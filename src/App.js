import React, { Component } from "react";
import Header from "./Components/Header";
import Book from "./Components/Book";
import "./Components Css/Book.css";

export default class App extends Component {
  state = {
    books: [
      { id: 1, title: "javaScript", writer: "Tanvir" },
      { id: 2, title: "C/C++", writer: "E-BalaGuru" },
      { id: 3, title: "Rust Programming", writer: "Steve Klabnik" },
    ],
    showBook: true,
  };
  deleteBook = (index) => {
    const book = [...this.state.books];
    book.splice(index, 1);
    this.setState({
      books: book,
    });
  };
  changeTitle = (event, index) => {
    event.preventDefault();
    const book = {
      ...this.state.books[index],
    };
    book.title = event.target.value;
    const updateBooks = [...this.state.books];
    updateBooks[index] = book;
    this.setState({ books: updateBooks });
  };
  changeWriter = (event, index) => {
    const writer = {
      ...this.state.books[index],
    };
    writer.writer = event.target.value;
    const books = [...this.state.books];
    books[index] = writer;
    this.setState({ books: books });
  };
  toggleBook = () => {
    this.setState({ showBook: !this.state.showBook });
  };
  render() {
    const bookState = [...this.state.books];
    let bookList = null;
    if (this.state.showBook) {
      bookList = bookState.map((book, index) => {
        return (
          <Book
            title={book.title}
            writer={book.writer}
            deleteBook={() => {
              this.deleteBook(index);
            }}
            changeTitle={(event) => {
              this.changeTitle(event, index);
            }}
            changeWriter={(event) => {
              this.changeWriter(event, index);
            }}
            key={book.id}
          />
        );
      });
    }

    return (
      <div>
        <Header headerTitle={`Book list`} />
        <div className="button2">
          <button className="button" type="button" onClick={this.toggleBook}>
            Toggle Book
          </button>
        </div>
        {bookList}
      </div>
    );
  }
}
