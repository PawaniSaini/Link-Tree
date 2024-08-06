const {Schema,model }=require('../connection');

const mySchema=new Schema({
    username:String,
    email:{type:String,unique:true},
    password:{ type:String,required:true},
    
    
    createdAt:{ type:Date,dafault:Date.now}
});

module.exports=model('users',mySchema);
