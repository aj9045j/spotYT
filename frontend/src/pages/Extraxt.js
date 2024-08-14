import React, { useEffect, useState } from 'react'
import { Route, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import GetPlaylist from '../features/GetPlaylist';
import ShowPlaylist from '../features/ShowPlaylist';
import '../style/playlist.css';
import Searchyt from '../features/Searchyt';

export default function Extraxt() {


    const sessionId = Cookies.get('sessionId');
    const [user, setUser] = useState(null);
    const [isLoggedIn, setisLoggedIn] = useState(false);
    const [email, setemail] = useState('');

    useEffect(() => {

        const fetchUserData = async () => {

            if (sessionId) {
                try {
                    const response = await axios.get('http://15.207.196.70:5000/api/getuser', {
                        params: { sessionId: sessionId }
                    });
                    setUser(response.data);
                    setisLoggedIn(true);

                } catch (error) {
                    console.log(error);
                }

            }

        }
        fetchUserData();

    }, [])

    useEffect(() => {
        setemail(user?.email || '');
    }, [user])

    return (
        <div>
            {sessionId ? (
                <>

                    <h1>Welcome to SpotYT</h1>
                    {email != '' ? <GetPlaylist email={email} /> : null}

                    <h1>Search in YouTube</h1>
                    <Searchyt />
                    <h1>Select the playlist</h1>
                    <ShowPlaylist email={email} />



                </>
            ) : (
                <Navigate to="/login" />
            )}
        </div>
    )
}
