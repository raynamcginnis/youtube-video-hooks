import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();

    onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
        <label className="title">Video Search<i className="fab fa-youtube"></i></label>
          <input
            type="text"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
            placeholder = "Search for the topic of your choice here..."

          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
