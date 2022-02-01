import React, { useEffect, useState } from 'react';
import axios from '../axios';
import requests from '../request';
import '../Css/Banner.css'

function Banner() {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                //random number picker function
                Math.floor(Math.random() * request.data.results.length - 1)
                ]);
            return request;
        }
        fetchData();
    }, []);
    // console.log(movie);
    // console.log(`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <header
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center center",
            }}
        >      {/* >>> background image*/}
            <div className="banner__contents">

                {/* title */}
                <h1 className='banner__title'>{movie?.title || movie?.name || movie?.original_name}</h1>

                {/* div with 2 button */}
                <div className="banner__buttons">
                    <button className="banner__button">
                        Play </button>
                    <button className="banner__button">
                        My List
                    </button>
                    {/* desctiption */}
                    <h1 className="banner__description">
                        {truncate(movie?.overview, 150)}
                    </h1>
                </div>
            </div>
            <div className="banner__fadeBottom"></div>
        </header>);
}

export default Banner;
