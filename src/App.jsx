import { useEffect, useState } from 'react'
import MovieService from './services/MovieService';
import MovieTable from './components/MovieTable';
import './App.css';


function App() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    MovieService
      .getAll()
      .then(movieData => setMovies(movieData))
  }, [])

  return (
    <>
      <MovieTable data={movies} />
    </>
  )
}

export default App