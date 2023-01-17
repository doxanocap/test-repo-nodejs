const express = require('express')

const cors = require("cors")
const cookieParser = require('cookie-parser')
const dotenv = require('dotenv');
dotenv.config()

const api = require('./api/index')


const corsOptions = {
  exposedHeaders: '*',
  origin: 'http://localhost:3000',
  methods: 'GET, PUT, POST',
  credentials: true,
}

const app = express()
const port = 8080

//middleware
app.use(cookieParser());
app.use(express.json());
app.use(cors(corsOptions))
app.use("/api",api)

app.use((err, req, res, next) => {
  const status = err.status
  if (status !== undefined) {
    delete err.status
    res.status(status).json(err )
    return
  }
  console.log(err);
  res.status(500).json({error:"Something went wrong"})
})



const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = server