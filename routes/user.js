const express = require("express");
const { validateUser } = require("../models/user");
const { getUsers } = require("../database/user");
const Router = express.Router();

//get all users handler
Router.get("/", (req, res) => {
    try {
        const result = await getUsers();
        return res.send(result);
    } catch (err) {
        return res.send(["No Item Found In Database"]);
    }
 
});
//get one user by id

Router.get('/:id',(req,res)=>{})

module.exports = Router;
