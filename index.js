import express from 'express'
import cors from 'cors'
import Routes from'./src/routes'
require('dotenv').config()
require('./db')

const app = express()
app.use(cors({
    origin:process.env.CLIENT_URL,
    methods:['GET, POST, PUT , DELETE']
}))

// CRUD


app.use(express.json())
//Convert chuoi oj -> json
app.use(express.urlencoded({extended: true})); 


//
Routes(app)

const PORT = process.env.PORT || 8888

const listener = app.listen(PORT,()=>{
    console.log('Server on running on the port :' +listener.address().port);
})

