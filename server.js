const express = require("express");
const app = express();

app.get('/', (req,res) => {
    res.send("Server Done ✅");
});

app.get('/users', (req,res)=> {
    res.json({
        id:1,
        name:"Kakf",
    });
});

app.get("/users/:id",(req,res)=> {
    const clientData = req.params.id;

    res.json({
        id:1,
        name:'Krish',
        clientData:clientData,
    });
});

app.listen(8000, ()=> console.log("Server Running ... 🔥🔥🔥"));