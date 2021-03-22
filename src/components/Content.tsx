
import { GenreResponseProps, MovieProps } from "../App";
import { MovieCard } from "./MovieCard";


interface ContentProps {
  movies:  MovieProps[]
  genreTitle: GenreResponseProps
}

export function Content({genreTitle, movies}: ContentProps) {

  return (

    
  <div className="container">
  <header>
    <span className="category">Categoria:<span> {genreTitle.title}</span></span>
  </header>

  <main>
    <div className="movies-list">
      {movies.map(movie => (
        <MovieCard title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
      ))}
    </div>
  </main>
</div>


  )


  // Complete aqui
}