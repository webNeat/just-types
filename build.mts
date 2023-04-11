import ts from 'typescript';
import fse from "fs-extra";

type Module = {
  name: string
  types: Type[]
}
type Type = {
  name: string
  description: string
  tests: Test[]
}
type Test = {
  expression: string
  value: string
}

async function main() {
  const modules = await loadModules()
  await fse.remove('docs')
  await fse.mkdir('docs')
  await generateReadme(modules)
  await Promise.all(modules.map(generateDocs))
}
main()

async function loadModules() {
  const names = await getModulesNames()
  return Promise.all(names.map(loadModule))
}

async function generateReadme(modules: Module[]) {
  let content = await fse.readFile('src/README.md', 'utf-8')
  const reference = modules.map(m => {
    return [
      `- [${m.name}](https://github.com/webNeat/just-types/blob/main/docs/${m.name}.md)`,
      ... m.types.map(t => `  - [${t.name}](https://github.com/webNeat/just-types/blob/main/docs/${m.name}.md#${t.name.toLowerCase()})`)
    ].join(`\n`)
  }).join(`\n\n`)
  content = content.replace('{{types-reference}}', reference)
  await fse.writeFile('README.md', content);
}

async function generateDocs({name, types}: Module) {
  const content = [
    `# ${name}`,
    `## Table Of Contents`,
    types.map(x => `- [${x.name}](#${x.name.toLowerCase()})`).join(`\n`),
    ... types.map(x => generateTypeDocs(name, x))
  ].join(`\n\n`)
  await fse.writeFile(`docs/${name}.md`, content)
}

function generateTypeDocs(mod: string, {name, description, tests}: Type) {
  return [
    `## ${name}`,
    description,
    `**Import**`,
    "```ts",
    `import {${name}} from 'just-types/${mod}'`,
    `// or`,
    `import {${mod}} from 'just-types'`,
    `// use ${mod}.${name}`,
    "```\n",
    "```ts",
    `import {${name}} from 'just-types/${mod}'\n`,
    ... tests.map(x => `${x.expression} //=> ${x.value}`),
    "```",
  ].join(`\n`)
}

async function loadModule(name: string) {
  const types: Type[] = []
  for (const filename of await getTypesFilenames(name)) {
    types.push(await loadType(name, filename) as any)
  }
  return {name, types}
}

async function loadType(moduleName: string, filename: string) {
  const {description, tests} = await parseFile(`src/${moduleName}/${filename}`)
  return {
    name: filename.split('.')[0],
    description,
    tests
  }
}

async function getModulesNames() {
  const entries = await fse.readdir('src', {withFileTypes: true})
  return entries.filter(x => x.isDirectory()).map(x => x.name)
}

async function getTypesFilenames(module: string) {
  const entries = await fse.readdir(`src/${module}`, {withFileTypes: true})
  return entries.filter(x => x.isFile() && x.name !== 'index.ts').map(x => x.name)
}

async function parseFile(filePath: string) {
  try {
    const content = await fse.readFile(filePath, 'utf-8')
    const sourceFile = ts.createSourceFile('temp.ts', content, 99, true, 3)
    let description = ''
    let tests: Test[] = []
    const visit = (node: ts.Node) => {
      if (isExportedType(node)) description = extractDescription(node)
      if (isTestsType(node)) tests = extractTests(node.type as any)
      ts.forEachChild(node, visit)
    }
    visit(sourceFile)
    return {description, tests}
  } catch (err) {
    console.error(`Error parsing file ${filePath}:`, err)
    return {description: '', tests: []}
  }
}

function isExportedType(node: ts.Node) {
  return (
    ts.isTypeAliasDeclaration(node) && 
    ts.getCombinedModifierFlags(node) & ts.ModifierFlags.Export &&
    (node as any).jsDoc && (node as any).jsDoc.length > 0
  );
}

function isTestsType(node: ts.Node): node is ts.TypeAliasDeclaration {
  return (
    ts.isTypeAliasDeclaration(node) && 
    node.name.text === 'Tests' &&
    ts.isTupleTypeNode(node.type)
  );
}

function extractDescription(node: any) {
  return node.jsDoc.map((x: any) => x.comment).join(`\n`)
}

function extractTests(node: ts.TupleTypeNode) {
  return node.elements.map(e => {
    const children = e.getChildAt(2).getChildAt(0).getChildAt(2).getChildren()
    return {
      expression: children[0].getFullText(),
      value: children[2].getFullText()
    }
  })
}