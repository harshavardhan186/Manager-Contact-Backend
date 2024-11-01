const { timeStamp } = require("console")
const mongoose = require("mongoose")

const contactSchema = mongoose.Schema({
    user_id:{
         type:mongoose.Schema.Types.ObjectId,
         required:true,
         ref:"User",
    },
    name:{
        type:String,
        required:[true,"please add the contact Name"],
    },
    email:{
        type:String,
        required:[true,"please add the email address"],
    },
    phoneno:{
        type:String,
        required:[true,"please add the contact Number"],
    },

},
{timestamps:true,
}

);


module.exports=mongoose.model("Contact",contactSchema);

