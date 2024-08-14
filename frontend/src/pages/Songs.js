import React, { useEffect, useState } from 'react';
import '../style/song.css';

export default function Song() {
    const [isVisible, setIsVisible] = useState(false);
    const [isSeen, setisseen] = useState(false);
    const [songs, setSongs] = useState([]);
    const [audioUrl, setAudioUrl] = useState('');
    const [currImage, setCurrImage] = useState('');
    const [queryParam, setQueryParam] = useState('');
    const [imageUrls, setImageUrls] = useState({});
    const [currindex, setcurrindex] = useState();
    useEffect(() => {
        const getQueryParam = async () => {
            const urlParams = await new URLSearchParams(window.location.search);
            setQueryParam(urlParams.get('playlistId'));
        };
        getQueryParam();
    }, []);

    useEffect(() => {
        const fetchSongs = async () => {
            try {
                const response = await fetch(`http://15.207.196.70:5000/fetchsong/${queryParam}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch songs');
                }


                const data = await response.json();

                setSongs(data.songs);
            } catch (error) {
                console.error('Error fetching songs:', error);
            }
        };
        fetchSongs();
    }, [queryParam]);

    useEffect(() => {
        const fetchImages = async () => {
            const urls = {};
            await Promise.all(
                songs.map(async (song) => {
                    try {
                        const response = await fetch(`http://15.207.196.70:5000/fetchImage/${song}`);
                        if (!response.ok) {
                            throw new Error('Failed to fetch image');
                        }
                        const data = await response.json();
                        urls[song] = data.url;
                    } catch (error) {
                        console.error('Error fetching image:', error);
                    }
                })
            );
            setImageUrls(urls);
        };

        fetchImages();
    }, [songs]);

    const playSong = async (query) => {
        try {
            const response = await fetch(`http://15.207.196.70:5000/fetchurl/${query}`);
            if (!response.ok) {
                throw new Error('Failed to fetch song URL');
            }
            const data = await response.json();
            setcurrindex(songs.indexOf(query));
            setAudioUrl(data.downloadUrl);

            setCurrImage(data.imageUrl);

        } catch (error) {
            console.error('Error playing song:', error);
        }
    };
    const nextSong = async () => {
        try {
            const nextSong = songs[(currindex + 1) % songs.length];
            playSong(nextSong);
        }
        catch (error) {
            console.log("error occur");
        }
    }

    const toggleBox = () => {
        setIsVisible(prevState => !prevState);
        setisseen(prevState => !prevState);
    };
    return (
        <div className='ss'>

            <div className='song-list'>
                <h1>ShowSong</h1>
                <ul>
                    {songs.map((song, index) => (
                        <li key={index}>
                            <button className="button" onClick={() => playSong(song)}>
                                <div className='song-info'>
                                    <img src={imageUrls[song]} alt={song} />
                                    <p>{song}</p>
                                </div>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            <div className={`container ${isSeen ? 'seen' : 'nseen'}`}>
                <div className={`box ${isVisible ? 'show' : 'hide'}`}>
                    <div className='player'>

                        <img src={currImage} alt="" />
                        <audio src={audioUrl} controls autoPlay onEnded={nextSong}></audio>
                    </div>
                </div>

            </div>
            <button className="toggle-btn" onClick={toggleBox}>Toggle Box</button>
        </div>
    );
}

