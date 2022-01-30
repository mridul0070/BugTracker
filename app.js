const connectDb = require('./db/connect')
const express = require('express')
const app = express()
require('dotenv').config()

const bugsRouter = require('./routes/bugman')




app.use(express.json())
app.get('/', (req, res)=>{
    res.send('first backend setup')
})


app.use('/api/bugs',bugsRouter)
app.use(express.urlencoded({ extended: false }))


const port = 3000



const start = async () =>{
    try {
        console.log(process.env.MONGO_URI)
        await connectDb(process.env.MONGO_URI)
        app.listen(port, console.log(`server listening on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()
