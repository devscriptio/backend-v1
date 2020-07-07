const express = require("express");
const { validateUser } = require("../models/user");
const { getUsers, getUser, addUser } = require("../database/user");
const Router = express.Router();

//get all users handler
Router.get("/", (req, res) => {
    try {
        const result = await getUsers();
        if(result.length==0) return res.send(["No Item Found In Database"]);
        return res.send(result);
    } catch (err) {
        return res.status(200).send(err.message);
    }
 
});
//get one user by id
Router.get('/:id',(req,res)=>{
    try {
        const result = await getUser(req.params.id);
        if(!result) return res.status(401).send(`No user found with id ${req.params.id}`);
        return res.send(result);
    } catch (error) {
        return res.status(200).send(err.message);
    }
});
//add one user
Router.post('/',(req,res)=>{
    const {error} = validateUser(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    try {
        const result = await addUser(req.body);
        if(!result) return res.status(200).send(`Server Error Can't Store Your Data Please Try Again.`);
        return result;
    } catch (err) {
        return res.status(200).send(err.message);
    }
})

module.exports = Router;
