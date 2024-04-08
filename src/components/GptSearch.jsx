import { BG_URL } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { useSelector } from "react-redux";
import Spinner from "./Spinner";

const GPTSearch = () => {
  const moviesLoading = useSelector((store) => (store.gpt.moviesLoading));

  return (
    <>
      <div className="fixed -z-10">
        <img className="object-cover" src={BG_URL} alt="logo" />
      </div>
      <div className="">
        <GptSearchBar />
        {
          moviesLoading ? (
            <Spinner />
          ) : (
            <GptMovieSuggestions />
          )
        }
      </div>
    </>
  );
};
export default GPTSearch;