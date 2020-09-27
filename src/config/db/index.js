const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1/nodeJs_blog_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        });
        console.log('Connect sucessfully !!!');
    } catch (error) {
        console.log('Connect failure !!!');
    }
}

module.exports = { connect };
