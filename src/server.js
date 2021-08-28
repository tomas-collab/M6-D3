import cors from 'cors'
import express from 'express'
import db from './db/models/index.js'

const app = express()
const port = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

db.sequelize.sync({force:true}).then(()=>{

    app.listen(port,()=>{
        console.log(`server is running on port : ${port}`)
    })
    app.on('error',(error)=>{console.log('server crashed ' ,error)})
})
.catch((e)=>console.log(e))

