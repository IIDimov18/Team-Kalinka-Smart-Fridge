const express = require('express')
const path = require('path');

const app = express()

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
const port = 80;
app.use(express.urlencoded({
    extended: true
}))
const indexRouter = require('./routes/index');



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);

app.get('*', function(req, res){
    res.send('ERROR 404');
});
module.exports = app;
