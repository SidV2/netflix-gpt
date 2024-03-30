import { LOGO, USER_AVATAR } from "../utils/constants";
import React from 'react';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

const Header = ({ hideYouTubeControls = false }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user && user.uid) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(
                    addUser({
                        uid: uid,
                        email: email,
                        displayName: displayName,
                        photoURL: photoURL
                    })
                );
                navigate("/browse");
            } else {
                dispatch(removeUser())
                navigate("/");
            }
        });
        // Unsubscribe when component unmounts
        return () => unsubscribe();
    }, [])

    const handleSignOut = () => {
        signOut(auth).then(() => {
            dispatch(removeUser());
        }).catch((error) => {
            navigate("/error");
        });
    }

    return (
        <div className={`w-screen absolute px-8 py-2  z-10 flex flex-col md:flex-row justify-between ${hideYouTubeControls ? 'bg-black' : 'bg-gradient-to-b from-black'} `}>
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
