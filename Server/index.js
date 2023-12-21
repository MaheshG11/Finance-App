const  express  =require( "express");
const bodyParser =require( "body-parser");
const morgan =require( "morgan");
const mongoose =require( "mongoose");
const cors =require( "cors");
const dotenv =require( "dotenv");
const helmet =require( "helmet");


dotenv.config()
const app=express()
app.use(helmet())
app.use(express.json())
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}))
app.use(morgan("common"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())

console.log("hello")