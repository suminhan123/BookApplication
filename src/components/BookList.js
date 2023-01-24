import React from 'react';
import { useEffect, useState } from 'react';
import {collection, onSnapshot, query, orderBy} from "firebase/firestore";
import db from '../firebase';
import BookItem from './BookItem';

export default function BookList(){
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const ref = collection(db, "books");
        const q = query(ref, orderBy('publishDate', 'desc'));
        onSnapshot(q, (snapshot) =>
        setBooks(snapshot.docs.map((doc) => ({
            book: doc.data(),
            id: doc.id
        }))))
    }, []);
    console.log(books);

    return(
        <div className='bookList'>
            <h2>책 목록</h2>
            {books && books.map(({id, book}) => (
                <BookItem key={id} Id={id}
                book_pages={book.pages}
                book_publishDate={book.publishDate}
                book_title={book.title}/>
            ))}
        </div>
    );
}