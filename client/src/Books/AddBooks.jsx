import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export default class AddBooks extends Component {

    static get propTypes() {
        return {
            addBook: PropTypes.func
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            authors: [],
            Name: '',
            ISBN: '',
            Author: '',
            Price: '',
            YearOfPublication: '',
            Publisher: ''
        }
    }

    componentDidMount() {
        this.getAllAuthors();
    }

    getAllAuthors() {
        axios.get('http://localhost:5000/authors').then((res)=>{
            this.setState({
                authors: res.data,
                Author: res.data[0].FirstName
            })
        })
    }

    onSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
        if(this.state.Name && this.state.ISBN && this.state.Price
            && this.state.Publisher && this.state.YearOfPublication && this.state.Author) {
            var book = {
                Name: this.state.Name,
                ISBN: this.state.ISBN,
                Author: this.state.Author,
                Price: this.state.Price,
                YearOfPublication: this.state.YearOfPublication,
                Publisher: this.state.Publisher
            };
            this.props.addBook(book);
            // axios.post('http://localhost:5000/books',book).then((res)=>{
            //
            // })
        }

    }

    onNameChanged(event) {
        event.preventDefault();
        event.stopPropagation();
        this.setState({
            Name: event.target.value
        })
    }

    onISBNChanged(event) {
        event.preventDefault();
        event.stopPropagation();
        this.setState({
            ISBN: event.target.value
        })
    }

    onAuthorChanged(event) {
        event.preventDefault();
        event.stopPropagation();
        console.log(event.target.value);
        this.setState({
            Author: event.target.value
        })
    }

    onPriceChanged(event) {
        event.preventDefault();
        event.stopPropagation();
        this.setState({
            Price: event.target.value
        })
    }

    onYOPChanged(event) {
        event.preventDefault();
        event.stopPropagation();
        this.setState({
            YearOfPublication: event.target.value
        })
    }

    onPublisherChanged(event) {
        event.preventDefault();
        event.stopPropagation();
        this.setState({
            Publisher: event.target.value
        })
    }

    render() {
        return <div>
            <form>
                <label>Book Name: </label>
                <input type='text' onChange={(event)=> {this.onNameChanged(event)}}></input>
                <label>ISBN: </label>
                <input type='text' onChange={(event)=> {this.onISBNChanged(event)}}></input>
                <label>Author: </label>
                <select type='text' onChange={(event)=> {this.onAuthorChanged(event)}}>
                {
                    this.state.authors.map((author)=>{
                        return <option key={author.FirstName}>{author.FirstName}</option>
                    })
                }
                </select>
                <label>Price: </label>
                <input type='text' onChange={(event)=> {this.onPriceChanged(event)}}></input>
                <label>Year of publication: </label>
                <input type='text' onChange={(event)=> {this.onYOPChanged(event)}}></input>
                <label>Publisher: </label>
                <input type='text' onChange={(event)=> {this.onPublisherChanged(event)}}></input>

                <button onClick={(event) => {this.onSubmit(event)} }>Add</button>
            </form>
        </div>;
    }
}