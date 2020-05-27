import formidable from 'formidable'
import path from 'path'

export default {
    async getInfo(ctx, next) {
        
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
        const form = formidable({ multiples: true, uploadDir: path.resolve('./temp') })
        form.parse(req, (err, fields, files) => {
            console.log('fields:', fields);
            console.log('files:', files);
        });
    }
}