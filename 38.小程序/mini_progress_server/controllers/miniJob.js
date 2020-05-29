import Job from './../models/job'

export default {
    async getJobList(ctx, next) {
        let {
          current, size, keyWords, jobTypeId
        } = ctx.query
        let records = await Job.getJobList(current, size)
        console.log(records.length)
        ctx.body = {
          status: 200,
          errMsg: 'request:ok',
          data: {
            records
          }
        }
    }
}