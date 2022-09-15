import React, { Component } from "react";
import Movie from "./Movie";

class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      load : true
    };
  }

  async componentDidMount() {
    try {
      let response = await fetch("http://localhost:3001/api/movies");
      let result = await response.json();
      this.setState({
        movies: result.data,
        load : false
      });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <div className="container-fluid">
        {/*<!-- PRODUCTS LIST -->*/}
        <h1 className="h3 mb-2 text-gray-800">
          All the movies in the Database
        </h1>

        {/*<!-- DataTales Example -->*/}
        <div className="card shadow mb-4">
          <div className="card-body">
          {this.state.load ? (
                    <p>cargando...</p>
                  ) : (
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
              >
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Titulo</th>
                    <th>Calificación</th>
                    <th>Premios</th>
                    <th>Duración</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>Id</th>
                    <th>Titulo</th>
                    <th>Calificación</th>
                    <th>Premios</th>
                    <th>Duración</th>
                  </tr>
                </tfoot>
                <tbody>
                    {this.state.movies.map((movie, i) => (
                      <Movie {...movie} key={movie.title + i}/>
                  ))}
                </tbody>
              </table>
            </div>
                  )}
          </div>
        </div>
      </div>
    )}
}

export default MovieList;
