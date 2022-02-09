import {MovieCard} from "../components/common/MovieCard";
import {useEffect, useState} from "react";
import axios from "axios";
import {APIGetTopMovies} from "../API/Movie";
import {Loader} from "../components/common/Loader/Loader";

export const Landing = ()=>{
    const [movies,setMovies]=useState([]);
    const [loading,setLoading] = useState(true);
    useEffect(async ()=>{
        // axios.get('https://yts.mx/api/v2/').then((res)=>{
        //     setMovies([...res.data.data['movies']]);
        // });
        await loadMovies();
    },[]);

    //get,post,put,patch,delete
    const loadMovies = async () =>{
        setLoading(true);
        let res = await APIGetTopMovies();
        setMovies([...res.data.data['movies']]);
        setLoading(false);
    }
    return <section className={"wrapper"}>
       <h1>Movies List</h1>
        <div className="movie-content">
            {loading ? <Loader/> :
                movies.map((movie,key)=>
                <MovieCard key={key} movie={movie} />)
            }
        </div>
    </section>
}