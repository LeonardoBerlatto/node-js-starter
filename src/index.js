import express from 'express'
const app = express()
const port = 3000

import { config } from 'dotenv'

app.get('/', (req, res) => {
  config({ path: process.env.NODE_ENV === "development" ? ".env.dev" : ".env" })

  res.send(process.env.DB_URL)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})