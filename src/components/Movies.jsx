import { useEffect, useState } from 'react'
import MovieService from '../services/MovieService';
import MovieList from './MovieList';


const Movies = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    document.title = "Movies | MovieDB"
  }, [])

  useEffect(() => {
    MovieService
      .getAll()
      .then(movieData => setMovies(movieData))
  }, [])

  return (
    <>
      <MovieList data={movies} />
    </>
  )
}

export default Movies