const express=require('express');
const UserRouter=require('./Routers/UserRouter');
const ProductRouter =require('./routers/ProductRouter');
const cors=require('cors')
//initialize express
const app=express();

const port=5000;
//middleware
app.use(cors({
    origin:'http://localhost:3000'
}))
app.use(express.json());
app.use('/user',UserRouter);

app.use('/product',ProductRouter);
//endpoint or route
app.get('/',(req,res)=>{
    res.send('response from express')
});
app.get('/add',(req,res)=>{
    res.send('response from add');
});
//getall
//update
app.get('/getall',(req,res)=>{
    res.send('response from getall');
});
app.get('/update',(req,res)=>{
    res.send('response from update');
});
//starting the server express
app.listen(port,()=>{

    console.log('server started');
});