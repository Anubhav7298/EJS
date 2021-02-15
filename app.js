const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

var items = [];

app.get("/", function(req , res) {

var day = date();
 res.render("list", {kindOfDay: day, listItem: items});
});

app.get("/about", function(req, res) {
  res.render("about");
});

app.post("/", function(req, res) {
input = (req.body.inp);
items.push(input);
  res.redirect("/");
})

app.listen(3000, function() {
  console.log("Server running on port 3000");
});
