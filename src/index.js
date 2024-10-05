const express = require('express')
const cors = require('cors')

const cookieParse = require('cookie-parser')
const morgan = require('morgan')
const db = require('./config/db')
const port = 3005
const app = express()
// const route = require('./routes')
const authRoute = require('./routes/auth')
const userRoute = require('./routes/user')
const adminRoute = require('./routes/admin')

//Connect to db
db.connect();
app.use(morgan('combined'))

app.use(cors());
app.use(cookieParse())
app.use(express.json())


// route(app)
app.use("/v1/auth", authRoute)
app.use("/v1/user", userRoute)
app.use("/v1/admin",adminRoute)
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
  })


  //Authentication  










