import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const portNumber = 3000;
const app = express();

const db = new pg.Client({
    user:"postgres",
    host:"localhost",
    database:"canvasChronicleDB",
    password:"Esv@1608",
    port:"5433"
});

var data_info = [];

db.connect();
db.query("SELECT * FROM card_info",(err,res)=>{
    if(err)
        console.log(err);
    else{
    data_info = res.rows;}
    db.end();
});
var data = data_info;
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
     res.render("canvasChronicle.ejs");
     console.log(data_info);
});

app.get("/canvasChronicle_Gallery.html",(req,res)=>{
    res.render("canvasChronicle_Gallery.ejs");
});

app.get("/canvasChronicle.html",(req,res)=>{
    res.render("canvasChronicle.ejs");
});

app.post("/",(req,res)=>{
    console.log(req.body.imageData);
    console.log(data_info);
    res.redirect("/get-card-data");
});

app.get('/get-card-data', (req, res) => {
    // Example data to send back to the client (this would typically come from your database)
    // Send data back as JSON
    res.setHeader('Content-Type', 'application/json');
    res.json(data_info[0]);
  });

app.listen(portNumber,()=>{
    console.log("Server is listening on Port "+portNumber);
}); 