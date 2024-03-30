
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";

const Browse = () => {

    useNowPlayingMovies();

    return (
        <>
            <Header hideYouTubeControls={true} />
            <MainContainer />
        </>
    )
};
export default Browse;
