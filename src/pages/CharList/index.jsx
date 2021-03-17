import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Searchbar } from '../../components';
import { books, characters as charAPI } from '../../services';
import { deepClone, getIdfromURI } from '../../utils/misc';
import { BookContainer, BookTitle, CharTable, Link } from './CharList.style';

const CharList = () => {
  const history = useHistory();
  const { id } = useParams();
  const [book, setBook] = useState({});
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

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
          setCharacters(deepClone(charList));
          setFilteredCharacters(deepClone(charList));
        }
      )
    })
  }, [id]);

  useEffect(() => {
    const charactersCopy = deepClone(characters); // Here we deep clone our list to prevent any data loss
    if (searchTerm !== '') {
      const filteredChar = charactersCopy.filter(o =>o.name.toLowerCase().includes(searchTerm.toLowerCase()));
      setFilteredCharacters(filteredChar);
    } else {
      setFilteredCharacters(charactersCopy)
    }
  }, [searchTerm])

  return (
    <BookContainer>
      <BookTitle>{book.name || ""}</BookTitle>
      <Searchbar label='Filtrer les personnages par nom' onSearch={(newValue) => setSearchTerm(newValue)} />
      { filteredCharacters.length !== 0 ?
        <CharTable>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nom</th>
              <th>Sexe</th>
              <th>Mère</th>
              <th>Père</th>
              <th>Epoux/Epouse</th>
              <th>Naissance</th>
              <th>Mort</th>
            </tr>
          </thead>
          <tbody>
            {filteredCharacters.map(char =>
              <tr>
                <td>{char.id}</td>
                <td>{char.name}</td>
                <td>{char.gender}</td>
                <td><Link onClick={() => history.push(`/char/${char.father}`)}>{char.father}</Link></td>
                <td><Link onClick={() => history.push(`/char/${char.mother}`)}>{char.mother}</Link></td>
                <td><Link onClick={() => history.push(`/char/${char.spouse}`)}>{char.spouse}</Link></td>
                <td>{char.born}</td>
                <td>{char.died}</td>
              </tr>)}
          </tbody>
        </CharTable>
        :
        <div>Récupération de la liste des personnages...</div>
      }
    </BookContainer>
  )
}

export default CharList;