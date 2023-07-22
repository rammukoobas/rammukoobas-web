import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Homepage from './Components/Homepage/Homepage';
import reportWebVitals from './reportWebVitals';

import 'semantic-ui-css/semantic.min.css'
import Navbar from './Components/Navbar/Navbar';
import { HashRouter, Route, Routes } from 'react-router-dom';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Competition from './Components/Competition/Competition';
import Competitions from './Components/Competitions/Competitions';
import Members from './Components/Members/Members';
import Footer from './Components/Footer/Footer';
import { PopupAlert } from './Components/PopupAlert/PopupAlert';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<HashRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/klubist" element={<About />} />
				<Route path="/kontakt" element={<Contact />} />
				<Route path="/liikmed" element={<Members />} />
				<Route path="/voistlused/:voistlus" element={<Competition />} />
				<Route path="/voistlused/:voistlus/live" element={<Competition infoDisplayed="live" />} />
				<Route path="/voistlused/:voistlus/video" element={<Competition infoDisplayed="live" />} />
				<Route path="/voistlused/:voistlus/register" element={<Competition infoDisplayed="register" />} />
				<Route path="/voistlused" element={<Competitions />} />
				<Route path="*" element={<Homepage />} />
			</Routes>
			{/* Popup alert goes here if necessary */}
			<PopupAlert />
			<Footer />
		</HashRouter>

	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
