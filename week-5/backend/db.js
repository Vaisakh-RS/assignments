const mongoose=require("mongoose")


mongoose.connect("url")
.catch(err=>console.log(err));

const formSchema=new Schema({
    name:String,
    desigination:String,
    interst:String
});

const FormData=mongoose.model("FormData",formSchema);

module.exports={FormData}