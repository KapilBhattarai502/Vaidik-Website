import express from 'express'
import nodemailer from 'nodemailer'
import 'dotenv/config'
import cors from 'cors'



const app=express();
app.use(express.json())
app.use(cors({
    credentials:true,
    origin:"http://localhost:5173",
}));
const transporter = nodemailer.createTransport({
    service:'gmail',
    host:'smtp.gmail.com',
    port:587,
    secure:false,
    auth: {
    user:process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
    }
   
});


const port=2010;

app.listen(port,(req,res)=>{
    console.log(`App is listening to port ${port}`);
    
})
app.post('/api/contact',async(req,res)=>{
    const {Name,Email,Message}=req.body;
   
    try{
    const info = await transporter.sendMail({
        from: {
            name:'Website',
            address:process.env.GMAIL_USER,
        }, // sender address
        to: ["suppliersvaidik@gmail.com"], // list of receivers
        text: `Name:${Name},Email:${Email},Message:${Message}`,  // Subject line
       
        
      
      });
      return res.json("Message sent successfully")
    
    }
      catch(err){
        res.send(err);
      }

      
   


})