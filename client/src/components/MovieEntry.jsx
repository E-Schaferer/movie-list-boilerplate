import React from 'react';
import ReactDOM from 'react-dom';
import MovieList from './MovieList.jsx';
import App from './App.jsx';


class MovieEntry extends React.Component {
   constructor(props) {
       super(props);
   }

    render() {
        return (
          <tr>
            <td>{this.props.movie.name}</td>
          </tr>
        )
    }
}

export default MovieEntry;