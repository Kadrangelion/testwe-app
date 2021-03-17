import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { books } from '../../services';
import { BookItem, HomeContainer, BookInfo, Link } from './Home.style';

const Home = () => {
  const history = useHistory();
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    books.getAllBooks().then(response => setBookList(response));
  }, []);

  return (
    <HomeContainer>
      {bookList.map(book => 
        <BookItem>
          <BookInfo>
            <div>{book.name}</div>
            <div>Nombre de Page: {book.numberOfPages}</div>
            <div>Editeur: {book.publisher}</div>
            <div>Date de sortie: {book.released}</div>
          </BookInfo>
          <Link onClick={() => history.push(`/book/${book.url.split('/')[(book.url.split('/').length-1)]}`)}>
            Voir les personnages du livre
          </Link>
        </BookItem>  
      )}
    </HomeContainer>
  )
}

export default Home;