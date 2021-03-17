import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Searchbar } from '../../components';
import { books, characters as charAPI } from '../../services';
import { PageContainer } from '../../styles/global';
import { deepClone, getIdfromURI } from '../../utils/misc';
import { BookTitle, CharTable, Link } from './CharList.style';

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
            const mother = char.mother !== '' ? getIdfromURI(char.mother) : '';
            const father = char.father !== '' ? getIdfromURI(char.father) : '';
            const house = char.allegiances[0]  ? getIdfromURI(char.allegiances[0]) : '';
            charList.push({ ...char, id: getIdfromURI(char.url), spouse, mother, father, house });
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

  const getChar = (id) => {
    let result = {};
    characters.map(char => char.id === id ? result = char : null);
    return result;
  }

  const getName = (id) => {
    let result = '';
    characters.map(char => char.id === id ? result = char.name : null);
    return result;
  }

  return (
    <PageContainer>
      <BookTitle>{book.name || ""}</BookTitle>
      <Searchbar label='Filtrer les personnages par nom' onSearch={(newValue) => setSearchTerm(newValue)} />
      { filteredCharacters.length !== 0 ?
        <CharTable>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nom</th>
              <th>Maison</th>
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
                <td>{char.house ? <Link onClick={() => history.push(`/house/${char.house}`)}>{char.house}</Link> : "none"}</td>
                <td>{char.gender}</td>
                <td><Link onClick={() => history.push({ pathname: `/char/${char.father}`, state: { character: getChar(char.father) } })}>{getName(char.father)}</Link></td>
                <td><Link onClick={() => history.push({ pathname: `/char/${char.mother}`, state: { character: getChar(char.mother) } })}>{getName(char.mother)}</Link></td>
                <td><Link onClick={() => history.push({ pathname: `/char/${char.spouse}`, state: { character: getChar(char.spouse) } })}>{getName(char.spouse)}</Link></td>
                <td>{char.born}</td>
                <td>{char.died}</td>
              </tr>)}
          </tbody>
        </CharTable>
        :
        <div>Récupération de la liste des personnages...</div>
      }
    </PageContainer>
  )
}

export default CharList;