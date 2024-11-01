const { timeStamp } = require("console");
const mongoose=require("mongoose");

const userSchema = mongoose.Schema({
       username:{
        type:String,
        required:[true,"please ad  the user name"]
       },
       email:{
        type:String,
        required:[true,"please add the user email address"],
        unique:[true,"Email address is already taken"],
       },
       password:{
        type:String,
        required:[true,"please add the password"],

       },
},
{
    timestamps:true,
})


module.exports= mongoose.model("User",userSchema)