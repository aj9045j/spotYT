import React, { useEffect, useState } from 'react'


export default function GetPlaylist(props) {

    const [code, setcode] = useState('');

    const handleauth = async (event) => {
        fetch('http://15.207.196.70:5000/auth').then(response => {
            if (response.ok) {
                return response.json(); // Parse the response body as JSON
            } else {
                throw new Error('Login failed');
            }
        })
            .then(data => {


                window.location.href = data.authorizeURL; // Navigate to the home page
            })
            .catch(error => {
                console.error('Error:', error); // Handle fetch error or login failure
            });

    }


    useEffect(() => {
        const handleAuthorization = () => {

            const urlParams = new URLSearchParams(window.location.search);
            setcode(urlParams.get('code'));

        }
        console.log(props.email);
        handleAuthorization();
    }, []);

    return (
        <div>
            <button type="button" className='buttonn' onClick={handleauth}>
                <div className="buttonn-top">Verify Spotify</div>
                <div className="buttonn-bottom"></div>
                <div className="buttonn-base"></div>
            </button>
            <h1>Upload Spotify Playlist</h1>
            <form action={`http://15.207.196.70:5000/search`} method='POST'>
                <label htmlFor="url">enter the spotify url</label>
                <input
                    placeholder="Type something here...."
                    type="text"
                    name="url"
                    id='url'
                    className='input'
                />
                <input type="hidden" name="code" value={code} />
                <input type="hidden" name="email" value={props.email} />
                <button type="submit" className='buttonn'>
                    <div className="buttonn-top">Submit</div>
                    <div className="buttonn-bottom"></div>
                    <div className="buttonn-base"></div>
                </button>
            </form>
        </div>
    )
}



