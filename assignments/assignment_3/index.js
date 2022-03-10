const express=require("express");
const faker=require("faker");
const app=express();
var bodyParser = require('body-parser');


app.set('views','./views');
app.set('view engine','ejs');

app.use(bodyParser());
var users=[]

for(let i=0;i<5;i++){
	users.push({
		name:faker.name.findName(),
		email:faker.internet.email(),
		age:"24",
		city:"kolkata",
		profession:"Node Js Developer"
	})
}

console.log(users);
app.get('/',(req,res)=>{
	res.render("index.ejs",{users});
})

app.get('/form',(req,res)=>{
	res.render("form.ejs");
})

app.post('/user/add',(req,res)=>{
	//res.render("form.ejs");
	console.log(req.body);
	users.push({
		name: req.body.name,
		  email: req.body.email,
		  age: req.body.age,
		  city: req.body.city,
		  profession: req.body.profession

	})
	res.redirect("/");
})

app.listen(3000,()=>console.log("Server is running"));