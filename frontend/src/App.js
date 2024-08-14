import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './auth/Login';
import Newuser from './auth/Newuser';
import Extraxt from './pages/Extraxt';
import Songs from './pages/Songs';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Extraxt />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Newuser />} />
				<Route path='/playlist' element={<Songs />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
