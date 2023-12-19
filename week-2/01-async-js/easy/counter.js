
function clock()
{
    console.clear();
    let date=new Date();

    console.log((date.getHours()-12)+":"+date.getMinutes()+":"+date.getSeconds());
}

setInterval(clock,1000)

clock();

// function padZero(n)
// {
//     return n<10?`$0{n}`:n
// }