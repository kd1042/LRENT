//dependencies
const express = require('express')
const app = express();
const ejs = require('ejs')
const ejsMate = require('ejs-mate')
const mongoose = require('mongoose')
const session = require('express-session')
const flash = require('connect-flash')
const passport = require('passport')
const LocalStrat = require('passport-local')
const methodOverride = require('method-override')
const path = require('path')


app.engine('ejs', ejsMate)

app.set('view engine', 'ejs')
app.set('views',path.join(__dirname,'views'))

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

//cookies & session info
const sessionConfig = {
    secret: 'thisissecret',
    resave: false,
    saveUnintialized: true,

}
app.use(session(sessionConfig))
app.use(flash())

//mongoose(mongo)
mongoose.connect('mongodb://127.0.0.1:27017/lrent')
.then(() => {
    console.log('dbconnected')
})
.catch((err) => {
    console.log("error")
    console.log(err)
})

// web routes
const eqRoute = require('./Routes/equipmentRoute');
const showRoute = require('./Routes/eventRoutes');
const statusUpdate = require('./Routes/statusScript');
const checkAvailability = require('./Routes/checAvailability');
const dashboard = require('./Routes/dashboard');
const search = require('./Routes/searchRoutes');

app.use('/',eqRoute);
app.use('/',showRoute);
app.use('/',statusUpdate);
app.use('/',checkAvailability);
app.use('/',dashboard);
app.use('/',search);

app.all('*',(req, res, next) =>{
    res.send('page not found')
})

app.listen(3000,'192.168.1.4',() => {
    console.log('App Running')
})