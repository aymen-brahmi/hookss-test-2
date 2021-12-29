import React from 'react'
import MovieCard from './MovieCard'

function MovieList({films}) {
    return (
        <div className="disp">
            {films.map((el,indice) => <MovieCard indice={el.id} movies={el} /> )}
        </div>
    )
}

export default MovieList
