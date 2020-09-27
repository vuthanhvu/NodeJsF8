const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');

const route = require('./routes/index');
const db = require('./config/db/index');

const app = express();
const port = 3000;

//db connect
db.connect();

//static
app.use(express.static(path.join(__dirname, 'public')));

//body parse
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

//template engine
app.engine(
    '.hbs',
    handlebars({
        extname: '.hbs',
    }),
);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// route init
route(app);

app.listen(port, () => {
    console.log(`Listen at ${port}`);
});
