import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import CircularProgress from '@mui/material/CircularProgress';

const GptMovieSuggestions = () => {
  const moviesLoading = useSelector((store) => (store.gpt.moviesLoading));
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  if (!movieNames) return null;

  return (
    <div className={'p-4 m-4 bg-black text-white bg-opacity-90'}>
      {
        moviesLoading ? (
          <div className="flex flex-col items-center h-screen justify-center">
            <CircularProgress
              color="error"
              className="m-5"
              size={"7rem"}
            />
            <p className="text-2xl">Loading Suggestions ...</p>
          </div>
        ) : (
          <div>
            {movieNames.map((movieName, index) => (
              <MovieList
                key={movieName}
                title={movieName}
                movies={movieResults[index]}
              />
            ))
            }
          </div >
        )
      }
    </div >
  );
};
export default GptMovieSuggestions;
