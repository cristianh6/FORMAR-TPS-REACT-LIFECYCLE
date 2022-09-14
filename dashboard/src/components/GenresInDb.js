import React, { Component } from 'react';
import Genre  from './Genre';


class GenresInDb extends Component {
    constructor() {
        super()
        this.state = {
            genresList : []
        }
    }

    async componentDidMount() {
        try {
            let response = await fetch('http://localhost:3001/api/genres')
            let result = await response.json()
            /* console.log(result.data) */
            this.setState({
                genresList : result.data
            }) 
        } catch (error) {
            console.log(error)
        }

    }

    fondoCaja() {
        document.querySelector('.card-body').classList.add('bg-secondary')
    }



    render() {
        return (
            <div className="col-lg-6 mb-4">						
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 onMouseOver={ this.fondoCaja } className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h6>
                        </div>
                        <div  className="card-body" id='card-genre'>
                            <div className="row">
                                {
                                    this.state.genresList.map((genre,index)=>{
                                        return  <Genre  {...genre}  key={index} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default GenresInDb;
