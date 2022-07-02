import "./App.css";
import imagenRickMorty from "./img/Rick-Morty.png";
import title from "./img/Title.png";
import Character from "./Components/Characters.jsx";
import { useState } from "react";

function App() {
  const [characters, setCharacters] = useState(null);

  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const characterApi = await api.json();
    setCharacters(characterApi.results);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={title} className="title" alt="Rick & Morty" />
        {characters ? (
          <Character characters={characters} setCharacters={setCharacters} />
        ) : (
          <>
            <img
              src={imagenRickMorty}
              alt="Rick & Morty"
              className="img-home"
            />
            <button onClick={reqApi} className="btn-search">
              Json.put()
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
