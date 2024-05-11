import { useEffect } from "react";
import { useState } from "react";
import { get } from "../data/httpClient"; 
import { MovieCard } from "./MovieCard";

export function ContextMovieCard(){

    const [movies,setMovies]=useState([]);
    useEffect(()=>{
        get('/discover/movie').then((data)=>{
            setMovies(data.results);
            console.log(data);
        })
    },[])

    return(
        <ul className="grid grid-cols-[repeat(auto-fill,230px)] gap-[40px] p-[40px] justify-center sm:grid-cols[100%]">
            {movies.map((movie)=>(
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </ul>
    )
}