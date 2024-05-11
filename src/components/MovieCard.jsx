import { Link } from "react-router-dom";

export function MovieCard({movie}){

    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    
    return(
        <li className="list-none text-2xl text-center transition duration-500 hover:opacity-50 hover:translate-y-[-30px]">
            <Link to={"/movies/"+movie.id}>
            <img width={230} height={345} src={imageUrl} alt={movie.title} 
            className="rounded-[10px] max-w-screen-sm sm:h-auto"
            />
            </Link>
            <div>{movie.title}</div>
        </li>
    )
}