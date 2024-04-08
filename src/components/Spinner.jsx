
import CircularProgress from '@mui/material/CircularProgress';

const Spinner = () => {
    return (
        <div className="p-4 m-4 bg-black text-white bg-opacity-90 h-screen flex flex-col items-center justify-center">
            <CircularProgress
                color="error"
                className="m-5"
                size={"7rem"}
            />
            <p className="text-2xl">Loading Suggestions ...</p>
        </div>
    )
}

export default Spinner;
