const Estimate = require("../models/estimateModel");

const getAllEstimates = async(req,res)=>{
    const estimates = await Estimate.find({}).sort({createdAt: -1});
    res.status(200).json(estimates);
}
const getEstimate = async(req,res)=>{
    const {id}=req.param;
    const estimate = await Estimate.findById({id});
    if(!workout){
        res.status(404).json({error: "Error Message"});

    }
    res.status(200).json(estimate);
}

module.exports = {getAllEstimates};