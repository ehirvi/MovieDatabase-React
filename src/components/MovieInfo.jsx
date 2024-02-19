import React from 'react'

const MovieInfo = ({ movie }) => {
  return (
    <>
      <h1>{movie.name}</h1>
      <h4>{movie.description}</h4>
    </>
  )
}

export default MovieInfo