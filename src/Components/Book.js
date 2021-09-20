import React from "react";
import "../Components Css/Book.css";

export default function Book(props) {
  return (
    <div className="book">
      <h1>Book Title:{props.title}</h1>
      <h2>Writer:{props.writer}</h2>
      <input
        onChange={props.changeTitle}
        value={props.title}
        className="inputField"
        type="text"
        placeholder="Change Book Title"
      />
      <input
        onChange={props.changeWriter}
        value={props.writer}
        className="inputField"
        type="text"
        placeholder="Change Writer Name"
      />

      <button onClick={props.deleteBook} className="button" type="text">
        Delete Book
      </button>
    </div>
  );
}
