'use strict'

var mongoose = require('../mongoose.config');
var BookSchema = mongoose.model('Book');
var AuthorSchema = mongoose.model('Author');

var AuthorController = function() {

    this.getAll = ()=> {
        return new Promise((resolve,reject)=>{
            AuthorSchema.find().exec().then((data)=>{
                resolve({'status': 200, 'data': data})
            }).catch((err)=>{
                reject({'status': 404, 'message': err})
            })
        })
    };

    this.getAuthor = (firstname) => {
        return new Promise((resolve,reject)=> {
            AuthorSchema.find({FirstName: firstname}).exec().then((data) => {
                resolve({'status': 200, 'data': data})
            }).catch((err) => {
                reject({'status': 404, 'message': err})
            })
        })
    };

    this.getBooksByAuthor = (firstname) => {
        return new Promise((resolve,reject)=> {
            AuthorSchema.find({FirstName: firstname}).exec().then((data) => {
                if(data.length > 0) {
                    BookSchema.find({Author: data[0].FirstName + ' ' + data[0].LastName}).exec()
                        .then((data) => {
                            resolve({'status': 200, 'data': data})
                        }).catch((err) => {
                        reject({'status': 404, 'message': err})
                    })
                }
                else
                {
                    resolve({'status': 200, 'data': data})
                }
            }).catch((err) => {
                reject({'status': 404, 'message': err});
            })
        })
    }
}

module.exports = new AuthorController();