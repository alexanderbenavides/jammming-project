import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  
  // Sets the argument for the seearch method in App.js to the state of term
  search() {
    this.props.onSearch(this.state.term);
  }
  
  // Sets the state of term to the value the user enters in input
  handleTermChange(event) {
    this.setState({ term: event.target.value });
  }

  handleKeyPress(event) {
    if(event.key === 'Enter') {
      this.search();
    }
  }
  
  render() {
    return(
      <div className="SearchBar">
        <input  placeholder="Enter A Song, Album, or Artist"
                onChange={this.handleTermChange}
                onKeyPress={this.handleKeyPress} />
        <a  onClick={this.search}>SEARCH</a>
      </div>
    );
  }
}

export default SearchBar;