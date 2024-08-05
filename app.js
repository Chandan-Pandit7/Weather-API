const path=require('path');
const express=require('express');
const app=express();
const PORT=7777;

app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use(express.json());



//no of cores
// let totalCpus=os.cpus().length;
// console.log(totalCpus);

// console.log();



app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})