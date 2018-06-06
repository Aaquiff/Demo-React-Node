'use strict'

const mongoose = require('../mongoose.config');
const BookSchema = mongoose.model('Book');

var BooksController = function() {
    this.getAll = () => {
        return new Promise((resolve,reject)=>{
            BookSchema.find().exec().then((data) => {

                resolve({'status': 200, 'data': data})
            }).catch((err)=>{
                reject({'status': 200, 'message': err})
            })
        })
    }

    this.getByAuthor = (author) => {
        return new Promise((resolve, reject)=>{
            BookSchema.find({'Author': author}).then((data)=>{
                resolve({'status': 200, 'data': data})
            }).catch((err)=>{
                reject({'status': 404, 'message': err})
            })
        })
    }

    this.insertBook = (book) => {
        return new Promise((resolve, reject)=>{
            var tempbook = new BookSchema(book);
            console.log(tempbook);
            tempbook.save().then((data)=>{
                resolve({'status': 200, 'message': 'Book Inserted'})
            }).catch((err)=>{
                reject({'status': 404, 'message': err})
            })
        })
    }

}

module.exports = new BooksController();