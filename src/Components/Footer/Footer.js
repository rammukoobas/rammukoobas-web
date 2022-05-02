import React from 'react'
import './Footer.scss'

import InstagramLogo from '../../imgs/instagram.png'
import FacebookLogo from '../../imgs/facebook.png'

function Footer() {
	return (
		<header className='footer'>
			<h2>Rammuklubi MTÜ</h2>
			<div className='social-media'>
				<a href="https://www.instagram.com/rammukoobas/" target="_blank" rel="noopener noreferrer"><img src={InstagramLogo} alt="insta logo" /></a>
				<a href="https://www.facebook.com/rammukoobas" target="_blank" rel="noopener noreferrer"><img src={FacebookLogo} alt="facebook logo" /></a>
			</div>
			<div className='fotode-omanik'>
				<p>Fotod lehel:&nbsp;</p>
				<a href='https://www.instagram.com/lindjanar/' target="_blank" rel="noopener noreferrer"><h4>@lindjanar &nbsp;</h4></a>
			</div>
		</header>
	)
}

export default Footer