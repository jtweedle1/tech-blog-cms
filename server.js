//finish the registration and login, logout

//imports
require("dotenv").config(); //invoking env

const express = require("express"); //invoking express which will allow us to start the server
const session = require("express-session") //can attach this session to our sequelize, so user can perform actions as a logged in user
const expHandlebars = require("express-handlebars") //invoking handlebars so that we can use templates
const sequelize = require("./config/db") //db connection config, sequelize
const routes = require("./controllers") //everything in index is accessible
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const path = require("path")

//creating a cookie, needs a secret
const sess = {
    secret: process.env.SESSION_SECRET,
    cookie: {},
    store: new SequelizeStore({db: sequelize}),
    saveUninitialized: true,
    resave: false
}

//instance of express
const app = express();

//port
const PORT = process.env.PORT || 3001;

//middleware
// app.use(cors)
app.use(session(sess))
app.use(express.json()) //when you submit a regular form
app.use(express.urlencoded({ extended: true })) //body parser; allows us to access the req body
app.use(express.static('public')) //making files and folders in public available
app.use(routes) //server can use the routes and they are connected


//configure/connect handlebars to express
const handlebars = expHandlebars.create({
    helpers: {
        cut: function (string) { 
            var truncString = string.slice(0, 500)
            return truncString
        }
    }
}); //we will pass helper functions here

app.engine("handlebars", handlebars.engine)
// const { engine } = require("express-handlebars")
// app.engine("handlebars", engine({defaultLayout: "main"}))
app.set("view engine", "handlebars") //second param. is the file extension

//connecting to the database - async
sequelize.sync({force: false}) //every time the server is restarted, the db's data is NOT cleared -> this is good for dev.
.then(() => console.log("db connection successful"))
.catch((err) => console.log(err.message)) //only error (.message) message is printed

//server listening to the specific PORT we chose
app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}.`)
})