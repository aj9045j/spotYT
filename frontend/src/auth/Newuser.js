


import React, { useState } from 'react';
import '../style/login.css';

export default function Newuser() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="cont">
            <form action="http://15.207.196.70:5000/register" method="POST" className="form">
                <div className="form_front">
                    <div className="form_details">Sign Up</div>
                    <input
                        className="input"
                        type="text"
                        placeholder="Username"
                        id="user_username"
                        name='userid'
                        value={username}
                        required
                        onChange={(event) => setUsername(event.target.value)}
                    />
                    <input
                        className="input"
                        type="text"
                        placeholder="Email"
                        id="user_email"
                        name="email"
                        value={email}
                        required
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <input
                        className="input"
                        placeholder="Password"
                        type="password"
                        id="user_password"
                        name="password"
                        value={password}
                        required
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <button type="submit" className="btn">Sign Up</button>
                </div>
            </form>
        </div>
    );
}
