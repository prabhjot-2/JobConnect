import express from " express";

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const PORT= 3001;
app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`)
})