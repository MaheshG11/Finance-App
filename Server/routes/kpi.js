const express=require('express')
const router=express.Router()
const kpi = require('../controller/kpi.js')


router.get('/kpis/',kpi)
module.exports=router