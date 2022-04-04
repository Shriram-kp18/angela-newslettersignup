const express=require("express");
const app=express();
const bodyparser=require("body-parser");
const request=require("request");
app.use(bodyparser.urlencoded({extension:true}));
app.use(express.static("public")); //this is very imp code for making our server to get the css files from our folder...
app.get("/",function(req,res){
  res.sendFile(__dirname +"/signup.html");
});
app.post("/",function(req,res){
  var email=req.body.email;
  var password=req.body.password;
  console.log(email);
  console.log(password);
});
app.listen(3000,function(){
  console.log("server is running at 3000");  //while seeing this project we didnt completed it we have to use
  //mailchimp for database and heroku for the online link submission or making our website online so we will do it later....
});
