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
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
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

    //[DELETE] /courses/:id
    delete(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new CoursesController();
