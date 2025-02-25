import express from "express";  // ✅ Correct syntax for ES Modules
import { prisma } from "../../packages/db/index.js"; // ✅ Add `.js` extension for local modules

const app=express()

app.use(express.json())

app.post('/insert',async(req,res)=>{
    const username=req.body.username
    const password=req.body.password

    const response=await prisma.user.create({
        data:{
            username:username,
            password:password
        }
    })

    res.send("Data Added")
})


app.listen(8000)