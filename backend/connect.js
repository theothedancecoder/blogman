const { MongoClient, ServerApiVersion } = require('mongodb');
require("dotenv").config({ path: "./.env" })

const client = new MongoClient(process.env.ATLAS_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let database

module.exports = {
  connectToServer: async () => {
    try {
      await client.connect()
      database = client.db("BlogData")
      console.log("Successfully connected to MongoDB Atlas.")
    } catch (err) {
      console.error("Failed to connect to MongoDB:", err.message)
      process.exit(1)
    }
  },
  getDb: () => {
    if (!database) {
      throw new Error("Database not initialized. Call connectToServer first.")
    }
    return database
  }
}
