const express =require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"crud_contact"
})
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.get("/api/get",(req,res)=>{
    const sqlGet ="SELECT * FROM contact_db";
    db.query(sqlGet,(error, result)=>{
     res.send(result);
    });
});
app.get("/",(req,res)=>{
    // const sqlInsert = "INSERT INTO contact_db (name, email, contact) VALUES ('jhon doe', 'jhondoe@gmail.com', 3445656)";
    // db.query(sqlInsert, (error , result)=>{
    //     console.log("error", error);
    //     console.log("result",result);
    //     res.send("hello express");
    // });
});
app.listen(5000, ()=>{
    console.log("Server is runningon port 5000");
})