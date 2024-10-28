import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const portNumber = 3000;
const app = express();

const db = new pg.Client({
    user:"postgres",
    host:"localhost",
    database:"canvasChronicleDB", 
    password:"MSD183*",
    port:"5433"
});

var data_info = [];
let index=0;

db.connect();
db.query("SELECT * FROM card_info",(err,res)=>{
    if(err)
        console.log(err);
    else{
    data_info = res.rows;}
    db.end();
});

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
     res.render("canvasChronicle.ejs");
});

app.get("/canvasChronicle_Gallery.html",(req,res)=>{
    res.render("canvasChronicle_Gallery.ejs");
});

app.get("/canvasChronicle.html",(req,res)=>{
    res.render("canvasChronicle.ejs");
});

app.post("/", (req, res) => {
    index = req.body.imageData - 1; 
    res.json(data_info[index]);
});

app.listen(portNumber,()=>{
    console.log("Server is listening on Port "+portNumber);
}); 