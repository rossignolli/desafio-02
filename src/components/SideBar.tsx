import React from "react";
import {GenreResponseProps} from '../App'
import { Button } from "./Button";

interface SideBarProps{
  genres: GenreResponseProps[];
  selectedGenreId: number;
  setGenreId: Function;
}

export function SideBar({ genres, selectedGenreId, setGenreId }: SideBarProps) {


  return (
    <nav className="sidebar">
  <span>Watch<p>Me</p></span>

  <div className="buttons-container">
    {genres.map(genre => (
      <Button
        id={String(genre.id)}
        title={genre.title}
        iconName={genre.name}
        onClick={() => setGenreId(genre.id)}
        selected={selectedGenreId === genre.id}
      />
    ))}
  </div>

</nav>
  )


  // Complete aqui
}

