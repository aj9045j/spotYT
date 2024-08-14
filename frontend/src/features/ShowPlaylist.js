
import React, { useState, useEffect } from 'react'
import { Route, Navigate } from 'react-router-dom';

export default function ShowPlaylist(props) {
    const [playlists, setplaylist] = useState([]);
    useEffect(() => {
        const fetchSongs = async () => {
            try {
                const response = await fetch(`http://15.207.196.70:5000/fetchPlaylist/${props.email}`);

                if (!response.ok) {
                    throw new Error('Failed to fetch songs');
                }
                const data = await response.json();
                console.log(data.playlistName);
                setplaylist(data.playlistName);
            } catch (error) {
                console.error('Error fetching songs:', error);
            }
        };

        fetchSongs();
    }, [props.email]);

    const handleClick = (playlistId) => {
        console.log(playlistId);
        window.location.href = `/playlist/?playlistId=${playlistId}`
    }
    return (
        <div className='showplaylist'>
            {playlists.map(playlistId => (
                <button className='button' key={playlistId} onClick={() => handleClick(playlistId)}>{playlistId}</button>
            ))}
        </div>
    )
}

