// require('dotenv').config({path})
import express from 'express'
import dotenv from "dotenv"
import connectDB from "./db/index.js"

const app=express()

dotenv.config({
    path: './env'
})

connectDB()


.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on the port = ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log("MONGO DB CONNECTION FAILED: ",err)
})





/*
import express from "express"
const app = express()

(async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("Error", (error) => {
            console.log("ERROR: ",error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listnening on port: ${process.env.PORT}`)
        })

    } catch(error) {
        console.log("ERROR: ",error)
        throw error
    }
})()
*/
