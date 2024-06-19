const express = require("express") ;
const app = express() ;
const path = require("path") ;
const port = 1000 ;

app.set("view engine" , "ejs") ;
 app.set("views" , path.join(__dirname , "/views")) ;
 app.use(express.static(path.join(__dirname ,"public"))) ;


 /*listening */
app.listen(port  , () => {
    console.log(`listening on port ${port}`) ;
 });

app.get("/" , (req, res) => {
    res.render("page1.ejs") ;
}) ;

app.get("/sign-up" , (req ,res) => {
    res.render("sign-up.ejs") ;
    /*inclue a sing-up page */
})
app.get("/Live" , (req ,res) => {
    res.render("live.ejs") ;
});

app.get("*" , (req ,res ) => {
    res.send("page not available ") ; 
}) ;




