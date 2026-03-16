import express  from "express"
import cors from "cors"
import { sendMail } from "./sendmail.js";


const app = express()

app.use(express.json());

app.use(cors({

    origin:"portfolio-backend-two-lake.vercel.app",
    methods:["GET","POST"],
    credentials:true

}))


app.get("/",(req,res)=>{
    res.send({
        "hello":"working"
    })
})
app.post("/send-mail",async(req,res)=>
{
    // console.log(req.body)
await sendMail(req.body)
}
)

app.listen(3000,()=>{
    console.log("server is running")
})