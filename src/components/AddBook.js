import React from 'react';
import { useState } from 'react';
import db from '../firebase';
import {addDoc , collection} from "firebase/firestore";
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { Field } from '../ui/Field';
import { Message } from '../ui/Message';

export default function AddBook() {
    const [bookTitle, setBookTitle] = useState("");
    const [bookPage, setBookPage] = useState("");
    const [bookPublish, setBookPublish] = useState("");
    const [loadings, setLoadings] = useState(false);
    const [error, setError] = useState(null);
    const [isModal, setIsModal] = useState(false);

    const handleBook = async (e) => {
    e.preventDefault();
    setLoadings(true);

    try {
        const colref = collection(db, 'books');
        const payload = {
            title:bookTitle,
            pages:parseInt(bookPage),
            publishDate: new Date(bookPublish),
        }
        await addDoc(colref, payload)
        .then((docRef) => {console.log(docRef)})
        }catch(e) {
        setError("에러가 발생했습니다.")
    }
    setBookTitle("");
    setBookPage("");
    setBookPublish("");
    setLoadings(false);
    }
    return(
        <>
        <Button onClick={() => (setIsModal(true), setError(null))}>책 추가하기</Button>
        <Modal  show ={isModal} title= "새로운 책 추가하기" close ={()=> setIsModal (false)}> 
        <form>
            <Field labelText="제목" id="book-title">
            <input type="text" name="name" id="book-title"  value={bookTitle} placeholder="제목"
            onChange={(e) => setBookTitle(e.target.value)}></input>
            </Field>
            
            <Field labelText="페이지 수" id="book-pages">
            <input type="number" name="pages" id="book-pages" value={bookPage} placeholder="페이지 수"
            onChange={(e) => setBookPage(e.target.value)}></input>
            </Field>
            
            <Field labelText="출판일" id="book-publish-date">
            <input type="date" name="publish-date" id="book-publish-date" value={bookPublish} placeholder="출판일"
            onChange={(e) => setBookPublish(e.target.value)}></input>
            </Field>

            <Button type="submit" onClick={handleBook} disabled={loadings}>{loadings ? "저장 중입니다... " : "저장하기"}</Button>
            <Message  text ={error} type ="error" />
        </form>
    </Modal>
        
        </>
    );
}