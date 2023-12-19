function clock()
{
    let date=new Date();
    console.clear();
    console.log((date.getHours()-12)+":"+date.getMinutes()+":"+date.getSeconds());
    setTimeout(clock,1000)
}

clock();