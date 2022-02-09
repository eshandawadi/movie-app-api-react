import {useNavigate} from "react-router";

export const MovieCard =({movie})=>{
    const navigate = useNavigate();
    const routeHandler = ()=>{
        navigate('/movie/'+ movie.id)
    }
    return <div className="movie-card" onClick={routeHandler}>
        <img src={movie.medium_cover_image} alt=""/>
        <div className="content">
            <div className="movie-title">
                {movie.title}
            </div>
            <div className="year">{movie.year}</div>
        </div>
    </div>
}