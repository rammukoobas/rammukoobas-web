import React, { useState } from 'react'

import { useNavigate } from "react-router-dom";

import './Navbar.scss'

import RammukoopaLogo from '../../imgs/Rammukoobas_logo.jpg'
import MobileSidebar from './MobileSidebar/MobileSidebar';

function Navbar() {

	const [sidebar, setSidebar] = useState(false)

	const navigate = useNavigate()

	const routeChange = (path) => {
		navigate(path)
	}

	return (
		<header className='heading display-flex'>
			<div className='width-40 display-flex'>
				<h2 onClick={() => routeChange("/klubist")}>KLUBIST</h2>
				<h2 onClick={() => routeChange("/kontakt")}>KONTAKT</h2>
			</div>

			<div className='logo-container'>
				<a href={window.location.origin}>
					<img id='navbar-logo' src={RammukoopaLogo} alt="Logo" />
				</a>
			</div>

			<div className='width-40 display-flex'>
				<h2 onClick={() => routeChange("/galerii")}>GALERII</h2>
				<h2 onClick={() => routeChange("/voistlused")}>VÕISTLUSED</h2>
			</div>

			<div id={'burger'} onClick={() => setSidebar(!sidebar)}>
				<span></span>
				<span></span>
				<span></span>
			</div>

			<MobileSidebar sidebar={sidebar} setSidebar={setSidebar.bind(this)} />
		</header>
	)
}

export default Navbar