//imports
const express = require("express");
const app = express();
const fs = require('fs');
const PORT = 5000; //the server port number

//code inspired by the following tutorial : https://youtu.be/eg244TvZHyU?si=BvT8_NgnPpWJCz4q 
app.set("views", "views");
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false })); //to get info from forms
app.use(express.static("public")); //to server static files (like CSS or JS or images)

app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

app.get("/createAccount", (req,res)=>{
  res.render("account", {title : "Create an account"});
});

app.post("/creating", (req,res)=>{
  var accountInfo = req.body.username + ":"+req.body.password+"\n";
  fs.appendFile('public/accounts.txt', accountInfo, err => {
    if (err) {
      console.error(err);
    } else {
      
      res.render("account", {title : "Create an account"});
    }
});
});

app.get("/browse", (req, res) => {
  /*const animal = req.query.animal;
  const breed = req.query.breed;
  const age = req.query.age;
  const gender = req.query.gender;
  const alongDog = req.query.along;
  
  console.log(alongDog);*/


  res.render("browse", { title: "Browse Pets" });
});

app.get("/find", (req, res) => {
  res.render("find", { title: "Find pet" });
});

app.get("/dogCare", (req, res) => {
  res.render("dogCare", { title: "Dog care" });
});

app.get("/catCare", (req, res) => {
  res.render("catCare", { title: "Cat care" });
});

app.get("/giveaway", (req, res) => {
  res.render("giveaway", { title: "Give away a pet" });
});

app.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact Us" });
});

app.get("/privacy", (req, res) => {
  res.render("privacy", { title: "Privacy/Disclaimer" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
