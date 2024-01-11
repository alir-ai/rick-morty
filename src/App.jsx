import {allCharacters} from "../data/data.js"
import "./App.css";
import Navbar from "./component/Navbar";
import CharacterList from "./component/CharacterList";
import CharacterDetail from "./component/CharacterDetail";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="main">
        <CharacterList characters={allCharacters} />
        <CharacterDetail />
      </div>
    </div>
  );
}

