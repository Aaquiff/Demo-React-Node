import React, { Component } from 'react';
import axios from 'axios';

export default class AddBooks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            authors: []
        }
    }

    getAllAuthors() {
        axios.get('http://localhost:5000/authors ')
    }

    render() {
        return <div>
            <form>

                <label>Book Name: </label>
                <input type='text'></input>
                <label>ISBN: </label>
                <input type='text'></input>
                <label>Author: </label>
                <input type='text'></input>
                <label>Price: </label>
                <input type='text'></input>
                <label>Year of publication: </label>
                <input type='text'></input>
                <label>Publisher: </label>
                <input type='text'></input>

                <button type='submit'>Add</button>
            </form>
        </div>;
    }
}