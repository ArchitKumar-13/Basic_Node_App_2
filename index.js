const express = require("express")
const app = express();


app.get("/", (req, res) => {
    res.json({
        message:"You are visiting root..."
    })
})
app.get("/login", (req, res) => {
    res.json({
        message:"You are visiting login_route..."
    })
})
app.get("/signup", (req, res) => {
    res.json({
        message:"You are visiting signup_route..."
    })
})
app.get("/logout", (req, res) => {
    res.json({
        message:"You are visiting logout_route..."
    })
})


app.listen(8000, () => {
console.log("App is running on 8000");
});