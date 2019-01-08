const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

// Database
const db = require('./config/database');

// Testing Database
db.authenticate()
.then(() => console.log('Database connected...'))
.catch(err => console.log('Error: ' + err))

const app = express();

// Handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({extended: false}));

// set static folder
app.use(express.static(path.join(__dirname, 'public')))

// Index Route
app.get('/', (req, res) => res.render('index', {layout: 'landing'}));

// Event Routes
app.use('/events', require('./routes/events'));

const PORT = process.envPORT || 5000;

app.listen(PORT, console.log('Server started on port ${PORT}'));