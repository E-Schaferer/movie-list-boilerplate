import React from 'react';
import ReactDOM from 'react-dom';
import MovieList from './MovieList.jsx';
import SearchMovies from './SearchMovies';

let theList = [
  {name: 'Monty Python and the Holy Grail'},
  {name: "Pan's Labyrinth"},
  {name: 'Up'},
  {name: 'Fistful of Dollars'},
  {name: 'Dragon Ball Super: Broly'},
];
//let searchList = [];
let noMatch = [{name: 'No Results Found'}]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: theList
    }

    this.searchMovieList = this.searchMovieList.bind(this);
    this.refreshPage = this.refreshPage.bind(this);
  }

  searchMovieList(name) {
    let searchList = [];
    let lowerName = name.toLowerCase();
    for (let i = 0; i < theList.length; i++) {
      if (theList[i].name.toLowerCase() === lowerName || theList[i].name.toLowerCase().includes(lowerName)) {
        searchList.push(theList[i])
      }
    }

    if (searchList.length === 0) {
      this.setState({
        list: noMatch
      })
    } else {
        this.setState({
          list: searchList
        })
    }
  }

  refreshPage() {
    this.setState({
      list: theList
    })
  }

  render() {
    return (
      <div>
        <h1>Movie List</h1>
        <div className="search-bar">
          <SearchMovies search={this.searchMovieList} refresh={this.refreshPage}/>
        </div>
        <MovieList theList={this.state.list}/>
      </div>
    )
  }
}

export default App;