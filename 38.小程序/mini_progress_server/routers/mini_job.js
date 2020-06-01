import Router from 'koa-router'
import miniJob from './../controllers/miniJob'

const router = new Router({
    prefix: '/mini-api/job'
})

router.get('/get-job-list', miniJob.getJobList)
router.get('/get-job-types', miniJob.getJobTypes)

export default router