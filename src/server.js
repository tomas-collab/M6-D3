import cors from 'cors'
import express from 'express'


const app = express()
const port = process.env.Port || 5001

app.use(cors())
app.use(express.json())

app.listen(port,()=>{
    console.log(`server is running on port : ${port}`)
})
app.on('error',(error)=>{console.log('server crashed ' ,error)})

export default Router