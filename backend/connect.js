
const { MongoClient, ServerApiVersion } = require('mongodb');
require("dotenv").config({path:"./.env"})

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.ATLAS_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
  // Limit connection pool to avoid hitting Atlas M0 free tier rate limits
  maxPoolSize: 10,
  minPoolSize: 1,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
});

let database

module.exports ={
  connectToServer: async () =>{
    try {
      await client.connect()
      database = client.db("BlogData")
      console.log("Successfully connected to MongoDB Atlas")
    } catch (err) {
      console.error("Failed to connect to MongoDB:", err.message)
      process.exit(1)
    }
  },
  getDb: () =>{
    return database
  },
  closeConnection: async () => {
    await client.close()
  }
}

/*async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);*/
