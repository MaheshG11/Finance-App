const express=require('express')
const mongoose=require('mongoose')
const loadType=require('mongoose-currency').loadType
const schema=mongoose.Schema
loadType(mongoose)

const daySchema= new schema({
    date:String,
    revenue:{
        type:mongoose.Types.Currency,
        currency:"USD",
        get:(v)=>v/100

    },
    expenses:{
        type:mongoose.Types.Currency,
        currency:"USD",
        get:(v)=>v/100

    },
},{toJSON:{getters:true}}
)


const monthSchema= new schema({
    month:String,
    revenue:{
        type:mongoose.Types.Currency,
        currency:"USD",
        get:(v)=>v/100

    },
    expenses:{
        type:mongoose.Types.Currency,
        currency:"USD",
        get:(v)=>v/100

    },
    operationalExpenses:{
        type:mongoose.Types.Currency,
        currency:"USD",
        get:(v)=>v/100

    },
    nonOperationlExpenses:{
        type:mongoose.Types.Currency,
        currency:"USD",
        get:(v)=>v/100

    },
},{toJSON:{getters:true}}
)


const KPIschema= new schema(
    {
        totalProfit:{
            type:mongoose.Types.Currency,
            currency:"USD",
            get:(v)=>v/100

        },
        totalRevenue:{
            type:mongoose.Types.Currency,
            currency:"USD",
            get:(v)=>v/100

        },
        totalExpenses:{
            type:mongoose.Types.Currency,
            currency:"USD",
            get:(v)=>v/100

        },
        expensesByCategory:{
            type:Map,
            of:{
                type:mongoose.Types.Currency,
                currency:"USD",
                get:(v)=>v/100
    
            },
        },
        monthlyData:[monthSchema],
        dailyData:[daySchema],
    },{timestamps:true,toJSON:{getters:true}} 
)
const KPI=mongoose.model("KPI",KPIschema)
module.exports=KPI