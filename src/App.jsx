import { useState } from "react";

const dictionary_data = [
  {
    word: "React",
    meaning: "A JavaScript library for building user interfaces.",
  },

  { word: "Component", meaning: "A reusable building block in React." },

  { word: "State", meaning: "An object that stores data for a component." },
];

function App() {
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState("");

  const handleClick = () => {
    if (word) {
      let obj = dictionary_data.find(
        (element) => element.word.toLowerCase() === word.toLowerCase()
      );
      if (obj && obj.word.toLowerCase() === word.toLowerCase()) {
        setDefinition(obj.meaning);
      } else {
        setDefinition("Word not found in the dictionary.");
      }
    } else {
      setDefinition("");
    }
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <input
        type="text"
        placeholder="Search for a word..."
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
      <button onClick={handleClick}>Search</button>
      <p style={{ marginTop: "10px", fontWeight: "bold" }}>Defintion:</p>
      {definition ? <p>{definition}</p> : <></>}
    </div>
  );
}

export default App;
