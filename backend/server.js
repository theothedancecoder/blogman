const connect = require("./connect")
const express = require("express")
const cors = require("cors")
const posts = require("./postRoutes")
const users = require ("./userRoutes")
const awsRoutes = require("./awsRoutes")
const multer =require("multer")
const upload = multer()




const app =express()
const PORT = 3000


app.use(cors({
    origin: '*',  // Allows all origins
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Specify allowed methods
    allowedHeaders: 'Content-Type, Authorization', // Specify allowed headers
    credentials: true  // Optional: Allows sending cookies with CORS requests
}));







app.use(express.json())
app.use(upload.any()) // multer must come before route handlers else it will return undefined.
app.use(posts)
app.use(users)
app.use(awsRoutes)



app.listen(PORT, ()=>{
    connect.connectToServer()
    console.log(`server is running on port ${PORT}`)
})
