const express = require("express");
const router = express.Router();


router.get("/", (req, res) => { //Get the user details
    obj={
        name:"Saurabh",
        email:"saurabh12@gmail.com"
    }
    res.json(obj);
});

module.exports = router //Export the router to use in index.js