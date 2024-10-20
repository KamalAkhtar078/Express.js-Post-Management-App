const express=require("express");
const app=express();
const port=8080;
const path=require("path");
const{v4:uuidv4}=require("uuid");
const methodOverride = require('method-override')

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(methodOverride('_method'));

let posts=[
    {
        id: uuidv4(),
        username:"hamidali",
        content:"I am working on the linux for the operating system."
    },
    {
        id:uuidv4(),
        username:"saifali",
        content:"I am working on the diseases of Cardic vascular system for the benifit of the people."
    },
    {
        id:uuidv4(),
        username:"yasirali",
        content:"I am working on the new clothing brand which will be lounched next year."
    },
];

app.set("view engine", "ejs");
app.set('views',path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname,"public")));


app.listen(port , () => {
    console.log(`Server is listening to the ${port}`);
});

app.get("/posts",(req,res)=> {
    res.render("index.ejs", { posts });
});

app.get("/posts/new",(req,res)=> {
    res.render("new.ejs");
});
app.post("/posts", (req,res) => {
    let { username , content } =req.body;
    let id=uuidv4();
    posts.push({id,username,content});
    res.redirect("/posts");
});

app.get("/posts/:id", (req,res) => {
   let {id}=req.params;
   let post=posts.find((p)=> id === p.id);
   res.render("show.ejs",{post});
});

app.patch("/posts/:id", (req, res) => {
    const { id } = req.params;
    const newContent = req.body.content;
    const post = posts.find((p) => p.id === id);
    
    if (!post) {
        return res.status(404).send("Post not found");
    }
    
    post.content = newContent;
    res.redirect("/posts");
});

app.get("/posts/:id/edit", (req,res) => {
    let {id}=req.params;
    let post=posts.find((p)=> id === p.id);
    res.render("edit.ejs",{post});
});
app.delete("/posts/:id", (req, res) => {
    const { id } = req.params;
    const postExists = posts.some((p) => p.id === id);
    
    if (!postExists) {
        return res.status(404).send("Post not found");
    }
    
    posts = posts.filter((p) => p.id !== id);
    res.redirect("/posts");
});
