import React, { Component } from 'react';
import axios from 'axios';

import AddBooks from './AddBooks';

export default class Books extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: []
        }

    }

    componentDidMount() {
        this.getAllBooks();
    }

    getAllBooks() {
        axios.get('http://localhost:5000/books').then((res)=> {
            this.setState({
                books: res.data.data || res.data
            });
        })
    }

    addBook(book) {
        axios.post('http://localhost:5000/books',book).then((res)=>{
            this.getAllBooks();
        });

    }

    render() {
        return <div>
            <AddBooks addBook={user=> this.addBook(user)}></AddBooks>
            <div>
                <p>Books ({this.state.books.length})</p>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>ISBN</th>
                            <th>Author</th>
                            <th>Price</th>
                            <th>Year of publication</th>
                            <th>Publisher</th>
                        </tr>

                    </thead>
                    <tbody>
                    {
                        this.state.books.map((book)=>{
                            return <tr key={book.Name}>
                                <td>{book.Name}</td>
                                <td>{book.ISBN}</td>
                                <td>{book.Author}</td>
                                <td>{book.Price}</td>
                                <td>{book.YearOfPublication}</td>
                                <td>{book.Publisher}</td>
                            </tr>
                        })
                    }
                    </tbody>
                </table>
            </div>
        </div>
    }
}