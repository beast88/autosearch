import React, { useState, useEffect } from 'react';

const App = () => {
  const [array, setArray] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=151').then((response) =>
      response.json().then((data) => {
        setArray(data.results);
      })
    );
  }, []);

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};

export default App;
