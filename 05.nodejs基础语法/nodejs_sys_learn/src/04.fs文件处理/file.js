var fs = require('fs')

fs.mkdir('./test', (err) => {
  fs.writeFile('./test/test.txt', '测试文件', 'utf8', (err) => {
  fs.readFile('./test/test.txt', 'utf8', (err, data) => {
  fs.readdir('./test', (err, files) => {
  console.log(Object.prototype.toString.call(files))
  files.forEach((file)=>{
    fs.stat('./test/' + file, (err, stats) => {
      if (stats.isFile()) {
        console.log('是文件')
}
  })
  })
})
})
})
})


// fs.stat('./a', (err, stats)=>{
//   if (stats.isFile()) {
//
// }
// })
