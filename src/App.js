import { useState } from 'react';
import './App.css';
import db from './firebase';
import {addDoc , collection} from "firebase/firestore";
import BookList from './BookList';

function App() {
  const [bookTitle, setBookTitle] = useState("");
  const [bookPage, setBookPage] = useState("");
  const [bookPublish, setBookPublish] = useState("");
  const [loadings, setLoadings] = useState(false);
  const [error, setError] = useState(null);

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
      alert(e.message);
      setError("에러가 발생했습니다.")
    }
    setBookTitle("");
    setBookPage("");
    setBookPublish("");
    setLoadings(false);
  }
  return (
    <div className="App">
      <h1>hansoom</h1>
      <form>
        <div>
          <label htmlFor="book-title">제목</label>
          <input type="text" name="name" id="book-title" value={bookTitle} placeholder="제목"
          onChange={(e) => setBookTitle(e.target.value)}></input>
        </div>

        <div>
          <label htmlFor="book-pages">페이지 수</label>
          <input type="number" name="pages" id="book-pages" value={bookPage} placeholder="페이지 수"
          onChange={(e) => setBookPage(e.target.value)}></input>
        </div>

        <div>
          <label htmlFor="book-publish-date">출판일</label>
          <input type="date" name="publish-date" id="book-publish-date" value={bookPublish} placeholder="출판일"
          onChange={(e) => setBookPublish(e.target.value)}></input>
        </div>

        <button type="submit" onClick={handleBook} disabled={loadings}>{loadings ? "저장 중입니다... " : "저장하기"}</button>
      </form>
      {error && (<p className="error">{error}</p>)}
      console.log("여기까지는?");
      <BookList />
    </div>
  );
}

export default App;
