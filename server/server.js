require("dotenv").config();
const connectDB = require("./src/config/database");

const app= require("./src/app");

const PORT = process.env.PORT;


// app.listen(PORT);
connectDB();

app.listen(PORT , ()=>{
    console.log(`server started successfully ${PORT}`);
});


