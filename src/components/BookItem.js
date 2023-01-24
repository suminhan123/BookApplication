import React from "react";

export default function BookItem({key, Id, book_pages, book_publishDate, book_title}) {
    return(
        <div className="book-item">
            <br/>
            <strong>책 제목:{" "}</strong> {book_title}
            <br/>
            <span><strong>페이지 수:{" "}</strong> {book_pages}</span>
            <br/>
            <span><strong>출판일:{" "}</strong> {new Date(book_publishDate.toDate()).toLocaleString()}</span>
        </div>

    );
}