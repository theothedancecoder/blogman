const connect = require("./connect")
const express = require("express")
const cors = require("cors")
const posts = require("./postRoutes")
const users = require("./userRoutes")
const awsRoutes = require("./awsRoutes")
const multer = require("multer")
const upload = multer()

const app = express()
const PORT = 3000

app.use(cors({}))
app.use(express.json())
app.use(upload.any()) // multer must come before route handlers

app.use(posts)
app.use(users)
app.use(awsRoutes)

// Dummy route for testing
app.get('/test', (req, res) => {
  res.json({ message: "Backend is working fine!" })
})

async function startServer() {
  await connect.connectToServer()
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  })
}

startServer()
