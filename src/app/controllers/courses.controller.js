const Course = require('../model/course.model');
const { mutipleToObject } = require('../../multi/index');

class CoursesController {
    //[GET] /courses/:slug
    show(req, res, next) {
        Course.find({ slug: req.params.slug })
            .then((courses) => {
                return res.render('courses/show', {
                    courses: mutipleToObject(courses),
                });
            })
            .catch(next);
    }
}

module.exports = new CoursesController();
