const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
app.use(cors());

const chefsData = require('./Data/chef.json');

app.get('/', (req, res) => {
    res.send(chefsData)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})