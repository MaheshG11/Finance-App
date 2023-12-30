const  express  =require( "express");
const bodyParser =require( "body-parser");
const morgan =require( "morgan");
const mongoose =require( "mongoose");
const cors =require( "cors");
const dotenv =require( "dotenv");
const helmet =require( "helmet");
const kpiRoutes = require("./routes/kpi.js")
const KPI=require("./models/KPI.js")
//const{kpis}=require("./data/data.js")

dotenv.config()
const app=express()

/* Configurations */
app.use(helmet())
app.use(express.json())
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}))
app.use(morgan("common"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())

/* Database Connections */
const PORT=process.env.PORT
const MONGO=process.env.MONGO_URI

mongoose.connect(MONGO)
.then(async()=>{
    app.listen(PORT,()=>console.log(`SERVER PORT : ${PORT}`))
    //await mongoose.connection.db.dropDatabase();
    //KPI.insertMany(kpis);
    const kpis=await KPI.find()
    console.log(kpis)
    
})
.catch((err)=>console.log(`There was an error connecting to the database or starting the server the error was \n${err}`))
 

/* Routes */
app.use('/kpi',kpiRoutes);

