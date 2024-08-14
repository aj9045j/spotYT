import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import '../style/login.css';

export default function Login() {
	const [email, setemail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();

		fetch(`http://15.207.196.70:5000/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ email, password })
		})
			.then(response => {
				if (response.ok) {
					return response.json(); // Parse the response body as JSON
				} else {
					throw new Error('Login failed');
				}
			})
			.then(data => {

				Cookies.set('sessionId', data.sessionId); // Set the sessionId cookie
				navigate('/'); // Navigate to the home page
			})
			.catch(error => {
				console.error('Error:', error); // Handle fetch error or login failure
			});

	};
	return (
		<>
			<h1>SpotYT</h1>
			<div className="cont">

				<form onSubmit={handleSubmit} className="form">
					<div className="form_front">
						<div className="form_details">Login</div>
						<input
							className='input'
							type="text"
							placeholder='Email'
							id="user_email"
							name="email"
							value={email}
							required
							onChange={(event) => setemail(event.target.value)}
						/>
						<input
							className='input'
							placeholder='Password'
							type="password" // Use type="password" for password field
							id="password"
							name="password"
							value={password}
							required
							onChange={(event) => setPassword(event.target.value)}
						/>
						<button type="submit" className="btn">Login</button>
						<span className="switch">Don't have an account?
							<label for="signup_toggle" className="signup_tog">
								<Link to="/register" className="signup_tog">
									Sign Up
								</Link>
							</label>
						</span>
					</div>
				</form>
			</div>
		</>
	)
}
