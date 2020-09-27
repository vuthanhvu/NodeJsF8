module.exports = {
    mutipleToObject: function (courses) {
        return courses.map((course) => {
            return course.toObject();
        });
    },

    simpleToObject: function (course) {
        return course.toObject();
    },
};
