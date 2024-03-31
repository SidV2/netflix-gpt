
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";

const Browse = () => {

    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpComingMovies();
    
    return (
        <>
            <Header hideYouTubeControls={true} />
            <MainContainer />
            <SecondaryContainer />
        </>
    )
};
export default Browse;
