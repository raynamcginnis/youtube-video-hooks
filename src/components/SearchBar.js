import React from "react";
import './SearchBar.css';

class SearchBar extends React.Component {
    //initialize state
    state = {term: ''};

    onInputChange = (event) => {
        this.setState({ term: event.target.value});
    };

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onTermSubmit(this.state.term)
    }

  render() {
    return (
      <div className="search-bar ui segment">
        <form 
        onSubmit={this.onFormSubmit}
        className="ui form">
          <div className="field">
            <label className="title">Video Search<i class="fab fa-youtube"></i></label>
            <input type="text"
            value={this.state.term}
            onChange={this.onInputChange}
            placeholder = "Search for the topic of your choice here..."
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
