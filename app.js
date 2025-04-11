//imports
const express = require("express");
const app = express();
const fs = require("fs");
const session = require("express-session");

const PORT = 5000; //the server port number

//code inspired by the following tutorial : https://youtu.be/eg244TvZHyU?si=BvT8_NgnPpWJCz4q
app.set("views", "views");
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false })); //to get info from forms
app.use(express.static("public")); //to server static files (like CSS or JS or images)
app.use(
  session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: false,
  })
); //session

app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

app.get("/createAccount", (req, res) => {
  res.render("account", { title: "Create an account" });
});

app.post("/creating", (req, res) => {
  var accountInfo = req.body.username + ":" + req.body.password + "\n";

  if (userExists(req.body.username) == false) {
    fs.appendFile("public/accounts.txt", accountInfo, (err) => {
      if (err) {
        console.error(err);
        res.render("account", {
          title: "Create an account",
          message: "Unable to create account.",
        });
      } else {
        res.render("account", {
          title: "Create an account",
          message: "Account successfully added!",
        });
      }
    });
  } else {
    res.render("account", {
      title: "Create an account",
      message: "This user already exists! Try another username.",
    });
  }
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

app.get("/login", (req, res) => {
  res.render("login", { title: "Login" });
});

app.post("/logginIn", (req, res) => {
  if (verifyLogin(req.body.username, req.body.password)) {
    req.session.username = req.body.username;
    res.redirect("/giveaway");
  } else {
    res.render("login", {
      title: "Login",
      message: "Login failed :  Account does not exist.",
    });
  }
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

/* Functions */
function userExists(username) {
  //This does the following:
  // 1. Read the content of the file
  // 2. Split it into an array (each element of the array is a line)
  // 3. Check each line to see if the username already exist
  //      - If the username exists => return true
  //      - If the username does not exist => return false
  const file_content = fs.readFileSync("public/accounts.txt", "utf-8");
  const lines = file_content.split("\n");
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].split(":")[0] === username) {
      return true;
    }
  }
  return false;
}

function verifyLogin(username, password) {
  //This does the following:
  // 1. Read the content of the file
  // 2. Split it into an array (each element of the array is a line)
  // 3. Check each line to see if the username and password already exist
  //      - If they exists => return true
  //      - If they does not exist => return false
  const file_content = fs.readFileSync("public/accounts.txt", "utf-8");
  const lines = file_content.split("\n");
  for (let i = 0; i < lines.length; i++) {
    var elements = lines[i].split(":");
    if (elements[0] === username && elements[1] === password) {
      return true;
    }
  }
  return false;
}
