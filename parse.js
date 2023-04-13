console.log(JSON.stringify({
  titles: Array.from(document.querySelectorAll('table.base1 > thead th')).map(th => {
    return th.querySelector('a')?.title || ''
  }),
  lines: Array.from(document.querySelectorAll('table.base1 > tbody > tr')).map(tr => {
    return Array.from(tr.querySelectorAll('td')).map(x => x.innerText)
  })
}))
