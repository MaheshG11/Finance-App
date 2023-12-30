const KPI =require('../models/KPI.js')
const kpi=async (req,res,next)=>{
    try{
        const kpis=await KPI.find()
        res.status(200).json(kpis)
        console.log(kpis)
    }catch(err){
        res.status(404).json({message:err.message})

    }
}
module.exports= kpi