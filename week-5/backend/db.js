const mongoose=require("mongoose")


mongoose.connect("mongodb+srv://vaisakh:mbPG2SXYrv0WcUH8@cluster0.cbramrs.mongodb.net/")
.catch(err=>console.log(err));

const formSchema=new Schema({
    name:String,
    desigination:String,
    interst:String
});

const FormData=mongoose.model("FormData",formSchema);

module.exports={FormData}