const express = require('express');
const app = express();
const port = 5000;

//Middleware
const cors = require('cors');
app.use(cors());

const chefsData = require('./Data/chef.json');

app.get('/chefs', (req, res) => {
    res.send(chefsData)
})

app.get('/chefs/:id', (req, res) => {
    const id = req.params.id;
    const chef = chefsData.chefs.find(f => f.id == id)
    res.send(chef)
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})