//imports
require("dotenv").config(); //invoking env
const express = require("express"); //invoking express which will allow us to start the server
const expHandlebars = require("express-handlebars") //invoking handlebars so that we can use templates

//instance of express
const app = express();

//port
const PORT = process.env.PORT || 3001;

//configure/connect handlebars to express
const handlebars = expHandlebars.create({}); //we will pass helper functions here
app.engine("handlebars", handlebars.engine)
app.set("view engine", "handlebars") 

//CREATING ROUTES

//homepage
app.get("/", (req, res) => {
    res.send("Welcome to our page!")
})

app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}.`)
})