const mongoose=require('mongoose');

const url="mongodb+srv://pawanisaini19:aditi08@cluster0.ek4jvvf.mongodb.net/mydb?retryWrites=true&w=majority&appName=Cluster0"

//asynchronous function - Promise object
mongoose.connect(url)
.then((result) => {
    console.log('database connected');
})
.catch((err) => {
   console.log(err); 
});

module .exports=mongoose;