const connect = require("./connect")
const express = require("express")
const cors = require("cors")
const posts = require("./postRoutes")
const users = require ("./userRoutes")



const app =express()
const PORT = 3000

app.use(cors())
app.use(express.json())
app.use(posts)
app.use(users)


app.listen(PORT, ()=>{
    connect.connectToServer()
    console.log(`server is running on port ${PORT}`)
})