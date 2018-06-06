'use strict'

const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    Name: {type: String, require: true},
    ISBN: {type: Number, require: true},
    Author: {type: String, require: true},
    Price: {type: String, require: true},
    YearOfPublication: {type: String, require: true},
    Publisher: {type: String, require: true}
});

const AuthorSchema = new mongoose.Schema({
    FirstName: {type: String, require: true},
    LastName: {type: String, require: true},
    Nationality: {type: String, require: true}
})

mongoose.model('Book', BookSchema);
mongoose.model('Author', AuthorSchema);

mongoose.connect('mongodb+srv://root:root@cluster0-uemqc.mongodb.net/test?retryWrites=true',(err) => {
    if (err) {
        console.log('Failed to connect to database');
        process.exit(-1);
    }
    else {
        console.log('Connected to database');
    }
})

module.exports = mongoose;