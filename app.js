const express= require("express");
const app= express();
const path= require("path")

app.get("/", (req, res)=> 
res.send("esto funciona"));

app.use(express.static('public'));

app.get("/babbage", (req, res)=> 
res.sendFile(path.join(__dirname, "DH-Heroes/views/babbage.html")))

app.get("/berners", (req, res)=> 
res.sendFile(path.join(__dirname, "DH-Heroes/views/berners.html")))

app.get("/clarke", (req, res)=> 
res.sendFile(path.join(__dirname, "DH-Heroes/views/clarke.html")))

app.get("/hamilton", (req, res)=> 
res.sendFile(path.join(__dirname, "DH-Heroes/views/hamilton.html")))

app.get("/hopper", (req, res)=> 
res.sendFile(path.join(__dirname, "DH-Heroes/views/hopper.html")))

app.get("/lovalace", (req, res)=> 
res.sendFile(path.join(__dirname, "DH-Heroes/views/lovalace.html")))

app.get("/turing", (req, res)=> 
res.sendFile(path.join(__dirname, "DH-Heroes/views/turing.html")))




app.listen(3030, (req, res)=>console.log("corriendo"))
