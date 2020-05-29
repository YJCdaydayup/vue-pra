import formidable from 'formidable'
import fs from 'fs'
import path,{resolve} from 'path'
import md5 from 'md5'

export default {
    getInfo(ctx, next) {

    },
    // get请求
    async getData(ctx, next) {
        let {name, age} = ctx.query
        console.log(name,age)
        ctx.body = {
            status: 0,
            data: {
                name,
                age
            }
        }
    },
    // 文件上传
    async uploadFile(ctx, next) {
        let form = new formidable.IncomingForm()
        // let dir = path.join(__dirname, 'tmp');
        // if (!fs.existsSync(dir)) { //先判断文件夹名是否存在，不存在则生成根据XXX生成对应的文件夹
        //     fs.mkdirSync(dir);
        // }
        form.uploadDir = './tmp/'
        form.hash = "md5"
        // form.multiples = true
        // form.maxFileSize = 2000 * 1024 * 1024
        form.parse(ctx.req, function (err, fields, files) { 
            if (err) {
                throw err
            }
            let desPath = resolve('./public/imgs/')
            let {size, path: temPath, name, hash} = files.file
            name = path.extname(name)
            desPath = desPath + '/' + Math.floor(Math.random() * 10000).toString(16) + name
            // let readStream = fs.createReadStream(temPath);
            // let writeStream = fs.createWriteStream(desPath);
            // readStream.pipe(writeStream)
            fs.rename(resolve(temPath), desPath, function (err, result) {
                if (err) {
                    throw err
                }
            })
        })
    },
    async login(ctx, next) {
        console.log(ctx.request.body)
        let {code} = ctx.request.body
        let session = md5(md5(code) + 'SALT_KEY');
        global.sessionList.push({
            code,
            session
        })
        console.log(global.sessionList)
        ctx.body = {
            code: 0,
            errorMsg: '',
            data: {
                session
            }
        }
    }
}