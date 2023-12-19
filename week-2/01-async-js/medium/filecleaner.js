const fs=require('fs');
const file="./a.txt"
fs.readFile(file,"utf-8",(err,res)=>{
    if(err)
    {
        console.log(err)
        return
    }
    console.log("Original: "+res)
    console.log("Trimmed: "+res.replace(/\s+/g,''))

})