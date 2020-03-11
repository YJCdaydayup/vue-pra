const {spawn} = require('child_process')

const child = spawn('pwd',{
    stdio: 'inherit'
})

// child.stdout.pipe(process.stdout);
// child.stdout.on('data',(data)=>{
//     console.log(data.toString())
// })

