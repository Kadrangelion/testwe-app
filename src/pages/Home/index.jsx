import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { books } from '../../services';
import { PageContainer } from '../../styles/global';
import { getIdfromURI } from '../../utils/misc';
import { BookItem, BookInfo, Link } from './Home.style';

const Home = () => {
  const history = useHistory();
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    books.getAllBooks().then(response => setBookList(response));
  }, []);

  return (
    <PageContainer>
      {bookList.map(book => 
        <BookItem>
          <BookInfo>
            <div>{book.name}</div>
            <div><u>Nombre de Page:</u> {book.numberOfPages}</div>
            <div><u>Editeur:</u> {book.publisher}</div>
            <div><u>Date de sortie:</u> {book.released}</div>
          </BookInfo>
          <Link onClick={() => history.push(`/charList/${getIdfromURI(book.url)}`)}>
            Voir les personnages du livre
          </Link>
        </BookItem>  
      )}
    </PageContainer>
  )
}

export default Home;