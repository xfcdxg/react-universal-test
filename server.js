import express from 'express'

const app  = express()
const port = 9033

app.listen(port, () => {
  console.log('app run at ' + port)
})
