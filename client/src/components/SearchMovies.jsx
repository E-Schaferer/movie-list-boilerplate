import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

class SearchMovies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          searchBar: ''
        }

        this.handleSearch = this.handleSearch.bind(this);
        this.handleRefresh = this.handleRefresh.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange({target}) {
      const {name, value} = target;
      this.setState({[name]: value})
    }

    handleSearch() {
      event.preventDefault();
      this.props.search(this.state.searchBar);
      this.setState({
          searchBar: ''
      });
      document.querySelector('.search-bar-input').value = '';
    }

    handleRefresh() {
      event.preventDefault();
      this.props.refresh();
    }

    render() {
        return (
          <form className="search-form">
              <input type="text" className="search-bar-input" name="searchBar" onChange={this.handleInputChange}/>
              <button className="search-button" onClick={this.handleSearch}>Search Movies</button>
              <button className="refresh-button" onClick={this.handleRefresh}>Refresh List</button>
          </form>
        )
    }
}

export default SearchMovies;