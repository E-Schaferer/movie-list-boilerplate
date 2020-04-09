import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import MovieEntry from './MovieEntry.jsx';


class MovieList extends React.Component {
  constructor(props) {
      super(props);
  }

    render() {
        return (
        <table>
            <thead>
                <tr>
                  <th>Movie Name</th>
                </tr>
            </thead>
            <tbody>
              {this.props.theList.map((movie, index) => (
                <MovieEntry key={movie.name + index} movie={movie}/>
              ))}
            </tbody>
        </table>
        )
    }
}

export default MovieList;