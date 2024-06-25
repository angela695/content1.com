const express = require("express");
const app = express();
const path = require("path");
const port = 1000;

const { v4: uuidv4 } = require("uuid");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/*  acquiring all the data */
let data = require("./profile.js");

/*listening */
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/sign-up", (req, res) => {
    res.render("sign-up.ejs");
});

app.get("/profile", (req, res) => {
    res.render("profile.ejs");

});
/*cats profile */
app.get("/profile/cats", (req, res) => {
    let cats = data.cats;
    let images = cats.img;
    res.render("cats-profile.ejs", { cats, images });
});

app.get("/profile/dogs", (req, res) => {
    let dogs = data.dogs;
    let images = dogs.img;
    res.render("dogs-profile.ejs", { dogs, images });
});

app.post("/", (req, res) => {
    let { f_name } = req.body;
    res.redirect("/");
});

app.get("/profile/cats/create", (req, res) => {
    res.render("create.ejs");
});

app.post("/profile/cats", (req, res) => {
    let { url } = req.body;
    data.cats.img.push( url );
    res.redirect("/profile/cats") ;
});

/*dogs profile */

app.post("/", (req, res) => {
    let { f_name } = req.body;
    res.redirect("/");
});

app.get("/profile/dogs/create", (req, res) => {
    res.render("create.ejs");
});

app.post("/profile/dogs", (req, res) => {
    let { url } = req.body;
    data.dogs.img.push( url );
    console.log({url}) ;
    res.redirect("/profile/dogs") ;
}) ;

/*in case the page not available */
app.get("*", (req, res) => {
    res.send("page not available ");
});




