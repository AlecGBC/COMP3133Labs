console.log(process.uptime());
setInterval(()=>null,1000)
process.on('SIGINT',(time)=>{
     console.log(process.uptime());
     process.exit();
 })

process.on('exit',()=>{
    console.log(process.uptime());
})