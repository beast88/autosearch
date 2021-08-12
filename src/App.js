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
        placeholder='Search for a pokemon...'
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      {suggestions.length !== 0 && (
        <div className='results'>
          {suggestions.slice(0, 15).map((value, key) => {
            return <p className='result-item'>{value.name}</p>;
          })}
        </div>
      )}
    </div>
  );
};

export default App;
