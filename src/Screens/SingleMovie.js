import React from 'react'
import Layout from '../Layout/Layout'
import { Movies } from '../Data/MoviesData';
import { useParams } from 'react-router-dom'
import MovieInfo from '../Components/Selection/MovieInfo';
import MovieCasts from '../Components/Selection/MovieCasts';
import MovieRates from '../Components/Selection/MovieRates';

function SingleMovie() {
    const {id} = useParams();
    const movie = Movies.find(movie => movie.name === id);

    return (
        <Layout>
            <MovieInfo movie={movie} />
            <div className="container mx-automin-h-screen px-2 my-2 ">
                <MovieCasts />
            </div>
            <MovieRates movie={movie}/>
        </Layout>
    )
}

export default SingleMovie