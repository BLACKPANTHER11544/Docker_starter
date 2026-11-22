import express from "express"; 
import { PrismaClient } from "@prisma/client";
const app = express() ; 
const clinet = new PrismaClient() ;
app.use(express.json()); 
const PORT  = 8080; 

app.get("/getAll",async (req,res)=>{
    const getall = await clinet.user.findMany(); 
   res.status(200).json({data:getall}); 
})
app.post("/putOne", async(req,res)=>{
    const {name , email, password} = req.body ; 
    const response = await clinet.user.create({
        data:{
            name : name , 
            email : email , 
            password: password ,
        }
    })
    res.status(200).json({message : response});
})
app.listen(PORT,()=>{
    console.log(`Connected to ${PORT}`)
})