import React from 'react'

import './Homepage.scss'

import RammukoopaLogo from '../../imgs/Rammukoobas_stroked.png'

export default function Homepage() {

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
