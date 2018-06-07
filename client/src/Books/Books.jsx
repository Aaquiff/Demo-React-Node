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
        this.getAllUsers();
    }

    getAllUsers() {
        axios.get('http://localhost:5000/books').then((res)=> {
            this.setState({
                books: res.data.data || res.data
            })
            console.log(res.data)
        })
    }

    render() {
        return <div>
            <AddBooks></AddBooks>
            <div>
                <p>Books ({this.state.books.length})</p>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>ISBN</th>
                        <th>Author</th>
                        <th>Price</th>
                        <th>Year of publication</th>
                        <th>Publisher</th>
                    </tr>
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
                </table>
            </div>
        </div>
    }
}