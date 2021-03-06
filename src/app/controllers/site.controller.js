const Course = require('../model/course.model');
const { mutipleToObject } = require('../../multi/index');

class SiteControllter {
    // [GET] /home
    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                return res.render('home', {
                    courses: mutipleToObject(courses),
                });
            })
            .catch(next);
    }

    //[GET] /search

    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteControllter();
