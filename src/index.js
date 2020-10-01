const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
var methodOverride = require('method-override');

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

//overwrite method
app.use(methodOverride('_method'));

//template engine
app.engine(
    '.hbs',
    handlebars({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// route init
route(app);

app.listen(port, () => {
    console.log(`Listen at ${port}`);
});
