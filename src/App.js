import './css/App.css';
import React, { useState, useEffect } from 'react';

const App = () => {
  const [array, setArray] = useState([]);
  const [search, setSearch] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=151/').then((response) =>
      response.json().then((data) => {
        setArray(data.results);
      })
    );
  }, []);

  const handleSearch = () => {
    const newFilter = array.filter((value) =>
      value.name.toLowerCase().includes(search.toLowerCase())
    );

    if (search === '') {
      setSuggestions([]);
    } else {
      setSuggestions(newFilter);
    }
  };

  useEffect(() => {
    handleSearch();
  }, [search]);

  return (
    <div className='container'>
      <input
        className='search'
        type='text'
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </div>
  );
};

export default App;
