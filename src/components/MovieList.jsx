const MovieList = ({ data }) => {
    return (
        <div className="movie-table">
            {data.map(movie => <MovieCard key={movie.id} movie={movie} />)}
        </div>
    )
}


const MovieCard = ({ movie }) => {
    return (
        <div className="movie-card" onClick={() => console.log("clicked on card")}>
            <img src={`http://localhost:8080/images/movie/${movie.id}`} alt="movieposter" width="90px"/>
            <h2>{movie.name}</h2>
            <h3>{movie.release_year}</h3>
            {/* <h4>{movie.description}</h4> */}
        </div>
    )
}

export default MovieList