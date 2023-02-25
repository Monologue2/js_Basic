const express = require('express');
const path = require('path');
const ejs = require('ejs')
const app = express();

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.render('index',
    {
        title : "this is title"
    });
})


app.post('/ajax', (req, res)=>{
    const json = req.body;
    console.log(json)
    res.json(json);
})

app.listen(50002, () => {
    console.log(`Server Start on Docker`)
})