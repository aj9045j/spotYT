import React, { useState } from 'react'

export default function Searchyt() {
    
    const [isSeen, setisseen] = useState(false);
    const [audioUrl, setAudioUrl] = useState('');
    const [currImage, setCurrImage] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const [query, setquery] = useState('');

    const handlesubmit = (event) => {
        event.preventDefault();
        console.log(query);

        fetch(`http://15.207.196.70:5000/searchyt`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ query: query })
        })
            .then(response => {
                if (response.ok) {
                    return response.json(); // Parse the response body as JSON
                } else {
                    throw new Error('Login failed');
                }
            })
            .then(data => {
                setAudioUrl(data.downloadUrl);
                setCurrImage(data.thumbnailUrl);

            })
            .catch(error => {
                console.error('Error:', error); // Handle fetch error or login failure
            });
    }

    const toggleBox = () => {
        setIsVisible(prevState => !prevState);
    };

    return (
        <div>
            <div className={`container ${isSeen ? 'seen' : 'nseen'}`}>
                <div className={`box ${isVisible ? 'show' : 'hide'}`}>
                    <div className='player'>

                        <img src={currImage} alt="" />
                        <audio src={audioUrl} controls autoPlay></audio>
                    </div>
                </div>
            </div>
            <button className="toggle-btn" onClick={toggleBox}>Toggle Box</button>
            <form onSubmit={handlesubmit}>
                <label htmlFor="url">enter the spotify url</label>
                <input
                    placeholder="search...."
                    type="text"
                    name="query"
                    id='url'
                    className='input'
                    onChange={(event) => setquery(event.target.value)}
                />

                <button type="submit" className='buttonn'>
                    <div className="buttonn-top">Submit</div>
                    <div className="buttonn-bottom"></div>
                    <div className="buttonn-base"></div>
                </button>
            </form>
        </div>
    )
}
