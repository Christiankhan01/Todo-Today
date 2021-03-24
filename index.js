const express = require('express'); 
const app = express(); 
const cors = require("cors"); 
const PORT = process.env.PORT || 5000;
const path = require("path"); 




app.use(express.json()) //allows us to access data from client side 
app.use(cors())
// app.use(express.static(path.join(__dirname, "client/build"))); 
if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "client/build"))); 
}


console.log(__dirname); 
console.log(path.join(__dirname, "client/build")); 
//Routes 
app.use("/auth",require("./routes/jwtAuth")); 


//dashboard route
app.use("/dashboard", require("./routes/dashboard"));


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`); 
})
