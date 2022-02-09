import {useParams} from "react-router";
import axios from "axios";
import {useEffect, useState} from "react";

export const MovieDetails = () => {
    const [movie, setMovie] = useState({});
    const {id} = useParams();
    useEffect(() => {
        axios.get('https://yts.mx/api/v2/movie_details.json?movie_id=' + id)
            .then((res) => {
                console.log(res.data.data.movie)
                setMovie(res.data.data['movie']);
            });
    }, []);
    return (
        <section className={"movie-detail wrapper"}>
            <img src={movie.large_cover_image} alt="" height={300}/>
            <h1>{movie.title}</h1>
            <p>{movie.description_intro}</p>
            <h1><i className="material-icons">star</i>{movie.rating}</h1>
            {/* <h2>Torrents</h2>
            <h3>{movie && movie.torrents && movie.torrents.map((v, key) => <a key={key} href={v.url}>{v.quality}</a>)}
            </h3> */}
    </section>)
}