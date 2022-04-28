import React from 'react'

import { useNavigate } from "react-router-dom";

import './Navbar.scss'

import RammukoopaLogo from '../../imgs/Rammukoobas_vector_png.png'

function Navbar() {

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
				<img id='navbar-logo' src={RammukoopaLogo} alt="Logo" onClick={() => routeChange("/")} />
			</div>

			<div className='width-40 display-flex'>
				<h2 onClick={() => routeChange("/liikmed")}>LIIKMED</h2>
				<h2 onClick={() => routeChange("/voistlused")}>VÕISTLUSED</h2>
			</div>
		</header>
	)
}

export default Navbar