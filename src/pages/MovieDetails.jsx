import { useParams } from "react-router-dom"
import { get } from "../data/httpClient"
import { useEffect,useState } from "react"
import { getMovieImg } from "../utils/getMovieImg"

export function MovieDetails (){
    
    const {movieId} = useParams();
    const [movie,setMovie] = useState([]);
    const [generos,setGeneros] = useState([]);
    useEffect(()=>{
        get('/movie/'+movieId).then((data)=>{
            setMovie(data);
            setGeneros(data.genres[0])
        })
    },[movieId])
    
    const imageUrl = getMovieImg(movie.poster_path,500);

    return(
        <div className="flex justify-center flex-wrap">
            <img src={imageUrl} alt={movie.title} 
            className="rounded-[15px] max-w-[400px] m-[15px] h-auto w-[80%] object-cover"
            />
            <div className="text-2xl max-w-[400px] m-[15px] h-auto w-[80%]">
                <p className="mt-0 text-center text-3xl text-[#9f91fe] font-bold">
                    <strong>Título:</strong>
                    {movie.title}
                </p>
                <p>
                    <strong>Género: </strong>
                    {generos.name}
                </p>
                <p>
                    <strong>Descripcion: </strong>
                    {movie.overview}
                </p>
            </div>
        </div>
    )
}