import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { books, characters as charAPI } from '../../services';
import { getIdfromURI } from '../../utils/misc';

const Book = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const charList = [];
    books.getBook(id).then(response => {
      setBook(response);
      Promise.all(response.characters.map(char => {
        return new Promise((resolve, reject) => {
          charAPI.getCharacter(getIdfromURI(char)).then(response => resolve(response))
        })
      })).then(responses => {
        responses.map(char => {
            const spouse = char.spouse !== '' ? getIdfromURI(char.spouse) : '';
            const mother = char.spouse !== '' ? getIdfromURI(char.spouse) : '';
            const father = char.spouse !== '' ? getIdfromURI(char.spouse) : '';
            charList.push({ ...char, id: getIdfromURI(char.url), spouse, mother, father });
          });
          setCharacters(charList);
        }
      )
    })
  }, [id]);

  return (
    <div>
      {book.name || ""}
      {characters.map(char => <div>{`${char.name} | ${char.gender}`}</div>)}
    </div>
  )
}

export default Book;