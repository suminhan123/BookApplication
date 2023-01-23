import React from 'react';
import { useEffect, useState } from 'react';
import {collection, onSnapshot} from "firebase/firestore";
import db from './firebase';
import BookItem from './components/BookItem';

export default function BookList(){
    const [books, setBooks] = useState(null);

    useEffect(() => {
        const ref = collection(db, "books");
        const q = query(ref, orderBy('publishDate', 'desc'));
        onSnapshot(q, (snapshot) =>
        setBooks(snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }))))
    }, []);
    console.log(books);

    return(
        <div className='bookList'>
            <h2>책 목록</h2>
            {books.map((book) => (
                <BookItem book={book}/>
            ))}
        </div>
    );
}