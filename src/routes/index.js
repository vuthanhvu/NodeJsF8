const newsRouter = require('./news.route');
const siteRouter = require('./site.route');
const meRouter = require('./me.route');
const coursesRouter = require('./courses.route');

function route(app) {
    app.use('/courses', coursesRouter);
    app.use('/me', meRouter);

    app.use('/news', newsRouter);

    app.use('/', siteRouter);
}

module.exports = route;
