import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Table1 extends Component {
  state = {
    movies: getMovies(),
  };

  removeItem = (movieItem) => {
    const newArr = this.state.movies.filter((m) => m._id !== movieItem._id);
    this.setState({
      movies: newArr,
    });
  };

  render() {
    const item = this.state.movies.length;
    if (item === 0) {
      return <p>There are no movies in the database.</p>;
    }
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.state.movies.map((movieItem) => (
            <tr key={movieItem._id}>
              <td>{movieItem.title}</td>
              <td>{movieItem.genre.name}</td>
              <td>{movieItem.numberInStock}</td>
              <td>{movieItem.dailyRentalRate}</td>
              <td
                className="btn btn-outline-danger btn-sm"
                onClick={() => this.removeItem(movieItem)}
              >
                Delete
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
export default Table1;
