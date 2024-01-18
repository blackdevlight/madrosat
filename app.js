const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const request = require('request');

const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('home');
})
app.get('/home', (req, res) => {
    res.render('home');
});
app.get('/about', (req, res) => {
    res.render('about');
});
app.get('/courses', (req, res) => {
    res.render('courses');
});
app.get('/classmode', (req, res) => {
    res.render('classmode');
});
app.get('/contact', (req, res) => {
    res.render('contact');
});
app.get('/enroll', (req, res) => {
    res.render('enroll');
});


const port = 3000 || process.env.PORT;
app.listen(port, () => {
    `server started...`
});
