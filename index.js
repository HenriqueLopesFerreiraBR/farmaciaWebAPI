const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const Database = require('./src/database/connection')
const port = 3005


const userRouter = require('./src/routes/userRoutes')
const authRouter = require('./src/routes/authRoute')
const productRouter = require('./src/routes/productRoutes')
const clientRouter = require('./src/routes/clientRouter')
const CategoryRouter = require('./src/routes/categoryRouter')
const classificationRouter = require('./src/routes/ClassificationRouter')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(cors())

Database.connectDatabase();


app.use('/api/user/',userRouter)
app.use('/api/auth/',authRouter)
app.use('/api/product/',productRouter)
app.use('/api/client',clientRouter)
app.use('/api/classification',classificationRouter)
app.use('/api/category',CategoryRouter)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))