import { useEffect, useState } from 'react'
import './App.css'
import * as api from './api/characters'

function App() {

  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const getCharacters = async () => {
    const limit = 5;
    const offset = (currentPage - 1) * limit;
    const characters = await api.getCharacters(limit, offset);
    console.log(characters)
    setCharacters(characters.data.data.results)
  }

  useEffect(() => {
    getCharacters()
  }, [currentPage])


  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      {characters &&
        characters.map(character => (
          <div key={character.id}>
            {character.name}
            <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt="" /></div>
        ))}
      <button onClick={previousPage}>Página Anterior</button>
      <button onClick={nextPage}>Próxima Página</button>
    </div>
  )
}

export default App
