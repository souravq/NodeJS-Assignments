const express = require("express");
const mongoose = require('mongoose');
const User = require("./views/model/user");
const bodyparser = require("body-parser");
var methodOverride = require('method-override')


const app = express();
mongoose.connect('mongodb://localhost:27017/assignment_4');

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))

//app.use(express.static("public"));
app.use(bodyparser());


app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
    // add the code to read the data from data base
    const users = await User.find();
	console.log(users);
    res.render("index.ejs", {users});
});
app.get('/form',(req,res)=>{
	res.render("form.ejs");
})

app.post("/user/add", async (req, res) => {
    // write code to add the data in database
    await User.create({
        name: req.body.name,
		email: req.body.email,
		isPromoted: req.body.isPromoted
    })
    // redirect to home page
    res.redirect("/");
});

// Edit
app.put("/user/:id/edit_promote", async (req, res) => {
    await User.updateOne({_id: req.params.id},{isPromoted:true});
    res.redirect("/");
})

// Edit
app.put("/user/:id/edit_demote", async (req, res) => {
    await User.updateOne({_id: req.params.id},{isPromoted:false});
    res.redirect("/");
})

// delete
app.delete("/user/:id/delete", async (req, res) => {
    await User.deleteOne({_id: req.params.id});
    res.redirect("/");
})


app.listen(5000, () => console.log("server is listening at port 5000"));