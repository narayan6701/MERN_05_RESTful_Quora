const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({extended:true}));

app.set("view engine", "ejs");
app.set("views",path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        username: "Narayan",
        content: "I love coding"
    },
    {
        username: "Kirti",
        content: "I love maths"
    },
    {
        username: "Payal",
        content: "I love heheheehe"
    },
];

app.get("/posts", (req,res)=>{
    res.render("index.ejs", {posts} )
});

app.get("/posts/new", (req,res)=>{
    res.render("new.ejs");
});

app.post("/posts",(req,res)=>{
    let {username, content} = req.body;
    posts.push({username, content});
    console.log(req.body);
    res.send("Post request received");
});

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);
});


