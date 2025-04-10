//imports
const express = require("express");
const app = express();
const PORT = 5000; //the server port number

app.set("views", "views");
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false })); //to get info from forms
app.use(express.static("public")); //to server static files (like CSS or JS or images)

app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

app.get("/browse", (req, res) => {
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
