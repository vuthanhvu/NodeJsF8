const newsRouter = require('./news.route');
const siteRouter = require('./site.route');

function route(app) {
   
    app.use('/news', newsRouter);

    app.get('/search',siteRouter);

    app.use('/', siteRouter);

}

module.exports = route;