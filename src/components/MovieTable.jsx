import { Card, CardActionArea, CardActions, CardContent, CardHeader, Typography } from "@mui/material"

const MovieTable = ({ data }) => {
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            {data.map(movie => <MovieCard key={movie.id} movie={movie} />)}
        </div>
    )
}


const MovieCard = ({ movie }) => {
    return (
        <div style={{ margin: "20px" }}>
            <Card sx={{ minWidth: 250, maxWidth: 250, minHeight: 200, maxHeight: 200 }}>
                <CardActionArea>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {movie.name}
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                            {movie.release_year}
                        </Typography>
                        <Typography variant="body2" color={"text.secondary"}>
                            {movie.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}

export default MovieTable