import { LOGO, USER_AVATAR } from "../utils/constants";
import React from 'react';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from "../utils/firebase";
import { removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate("/");
            dispatch(removeUser());
        }).catch((error) => {
            navigate("/error");
        });
    }

    return (
        <div className="w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
            <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
            {user && 
                <div className="flex p-2 p-2 justify-between">
                    <img
                        className="hidden md:block w-10 h-10"
                        alt="usericon"
                        src={user?.photoURL}
                    />
                    <button
                        className="font-bold text-white"
                        onClick={handleSignOut}
                    >
                        (Sign out)
                    </button>
                </div>
            }
        </div>

    )
};
export default Header;
