import Job from './../dbs/schema/job'

export default {
    async getJobList(current, size) {
        let jobs = await Job.find({}).limit(Number(size)).skip((current - 1) * Number(size))
        return jobs
    }
}