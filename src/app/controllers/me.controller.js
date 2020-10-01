const Course = require('../model/course.model');
const { mutipleToObject, simpleToObject } = require('../../multi/index');

class MeController {
    //[GET] me/stored/courses
    storedCourses(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('me/storedCourses', {
                    courses: mutipleToObject(courses),
                });
            })
            .catch(next);
    }

    //[GET] me/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then((course) =>
                res.render('me/editCourses', {
                    course: simpleToObject(course),
                }),
            )
            .catch(next);
    }
}

module.exports = new MeController();
