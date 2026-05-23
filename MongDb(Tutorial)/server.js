const express = require('express');
const app = express();

const userModel = require('./userModule');


app.get('/', (req, res) => {
    res.send("Hey");
})

app.get('/create', async (req, res) => {
    let createdUser = await userModel.create({
        name: "Harsh",
        username: "Har01",
        email: "harsh@gmail.com"
    })
    res.send(createdUser); 
})

// app.get('/update', async (req, res) => {
//     let updateduser = await userModel.findOneAndUpdate({username: "Har01"}, {name: "Harshraj kapoor"}, {name: true});
//     res.send(updateduser); 
// })

// app.get('/read', async (req, res) => {
//     let readuser = await userModel.find();// "find" give array and findOne gives object....
//     res.send(readuser); 
// })

app.get('/read', async (req, res) => {
        let readuser = await userModel.findOne({username: "Har01"});// "find" give array and findOne gives object....
        res.send(readuser); 
    })
    
// app.get('/delete', async (req, res) => {
//     let deleteduser = await userModel.findOneAndDelete({username: "Har01"});// "find" give array and findOne gives object....
//     res.send(`The dieleted accounts are ${deleteduser}`); 
// })

app.listen(3000);