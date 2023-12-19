// const fs=require("fs");

// const file='./a.txt';


// var p=new Promise(function(resolve){
//     fs.readFile(file,'utf-8',(err,res)=>{
//         if(err)
//         {
//             console.log(err)
//             return
//         }   
//         // console.log(res);
//         resolve(res);  //to indicate the operation is completed
//     })
// });

// p.then(res=>console.log(res))

// let a=0;
// for(i=0;i<10000000000000;i++)
// {
//     a++;
// }


var p=new Promise(function(resolve){
    setTimeout(function(){
        resolve("Hello")
    },5000)
})

console.log("Hellow world")
async function print()
{
    const res=await p;
    console.log(res)
}

print