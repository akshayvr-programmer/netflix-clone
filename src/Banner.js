import React, {useState, useEffect} from 'react'
import axios from './axios';
import requests from './requests';
import './Banner.css';
function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchComedyMovies)
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length) - 1]);
            return request;



        }
        fetchData();
    }, []);
    console.log(movie);
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <header
        style={{
            backgroundSize: "cover",
            backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
            backgroundPosition: "center center",

        }}> 


        <div className="banner"> 
            <div className="bammer__contents"> 
            <h1> {movie?.title || movie?.name || movie?.original_name}  </h1>
            </div>
            <h1 className="banner__description"> 
            { truncate(movie?.overview, 150)}
            
            </h1>
            <div className="banner__buttons">
                <button className="banner__button"> My List </button>
                <button className="banner__button"> Play </button>
                 </div>
                
                
             
                 </div> </header>   



            
        

    )
}

export default Banner
