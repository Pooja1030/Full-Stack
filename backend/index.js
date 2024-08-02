import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import foodRouter from './routes/foodRoute.js'
import userRouter from './routes/userRoute.js'
import 'dotenv/config'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'





// app config
const app = express()
const port = process.env.PORT || 4000


// middleware
app.use(express.json())
app.use(cors())


// db connection
connectDB()


// api endpoints
app.use("/api/food",foodRouter)
app.use("/images", express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)


app.get("/", (req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})



// mongodb+srv://poojasawant1030:135792468@cluster0.ybzzeqe.mongodb.net/?
// mongodb+srv://poojasawant1156:Who123456@cluster0.o4qtlvb.mongodb.net/
