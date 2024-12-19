const express = require ("express");
const app = express();

app.post("/users", (req,res)=>{
    return res.send ("ok")
});
app.listen(3000);
