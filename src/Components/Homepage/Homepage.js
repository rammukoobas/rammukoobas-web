import React, { useEffect } from 'react'

import './Homepage.scss'

import RammukoopaLogo from '../../imgs/Rammukoobas_stroked.png'

export default function Homepage() {

	// useEffect(() => {
	// 	const card = document.querySelector('.circle-card');
	// 	const container = document.querySelector('.area');

	// 	const logo = document.querySelector('#logo')

	// 	function mousemoveEvent(e) {
	// 		let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
	// 		let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
	// 		card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
	// 	}

	// 	function mouseenterEvent(_e) {
	// 		card.style.transition = "none";
	// 		//Popout
	// 		logo.style.transform = "translateZ(130px)";
	// 	}

	// 	function mouseleaveEvent(_e) {
	// 		card.style.transition = "all 0.5s ease";
	// 		card.style.transform = `rotateY(0deg) rotateX(0deg)`;
	// 		//Popback
	// 		logo.style.transform = "translateZ(0px)";
	// 	}

	// 	container.addEventListener('mousemove', mousemoveEvent)
	// 	//Animate In
	// 	container.addEventListener("mouseenter", mouseenterEvent)
	// 	//Animate Out
	// 	container.addEventListener("mouseleave", mouseleaveEvent)

	// 	return () => container.removeEventListener("mousemove", mousemoveEvent)
	// }, [])

	return (
		<section className='intro'>
			<div className='background'></div>
			<div className='area'>
				<div className='container'>
					<div className='phrase'>
						<h1>JÕU- JA RAMMUALADE KOOBAS</h1>
					</div>
					<div className='circle-card'>
						<img id="logo" src={RammukoopaLogo} alt="Logo" />
					</div>
				</div>

			</div>
		</section>
	)
}
