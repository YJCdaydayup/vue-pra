import mongoose from 'mongoose'

const JobSchema = new mongoose.Schema({
    jobName: {
        type: String,
        default: "前端全栈工程师"    
    },
    minSalary: {
        type: Number,
        default: 0
    },
    maxSalary: {
        type: Number,
        default: 1000000
    },
    salaryType: {
        type: String,
        default: 1
    },
    companyId: {
        companyName: {
            type: String,
            default: "川财证券"
        },
        companySize: {
            type: Number,
            default: 500
        },
        financingType: {
            type: Number,
            default: 1000000
        }
    },
    workExp: {
        type: String,
        default: "三年"
    },
    eduLeve: {
        type: String,
        default: "本科"
    },
    publisherId: {
        avatarUrl: {
            type: String,
            default: "http://img4.imgtn.bdimg.com/it/u=1286840921,3454313853&fm=11&gp=0.jpg"
        },
        nickName: {
            type: String,
            default: "Sara"
        }
    },
    city: { 
        type: String,
        default: "深圳"
    }


})

let Job = mongoose.model('Job',JobSchema)


Job.create({})


export default Job

