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

    //[GET] /courses/create
    create(req, res, next) {
        res.render('courses/create');
    }

    //[POST] /courses/store
    store(req, res, next) {
        const formData = { ...req.body };
        formData.image =
            'https://scontent.fhph1-1.fna.fbcdn.net/v/t1.0-9/117945328_3160821100699633_2326489541200622634_o.jpg?_nc_cat=104&_nc_sid=8bfeb9&_nc_ohc=O2V-d34heJgAX9vl9yK&_nc_ht=scontent.fhph1-1.fna&oh=d5d9f8fd7c4bdfef4f5097dc2ea6c87b&oe=5F98AAE7';
        const course = new Course(formData);
        course
            .save()
            .then(() => {
                return res.redirect('/');
            })
            .catch(next);
    }

    //[PUT] /courses/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }
}

module.exports = new CoursesController();
