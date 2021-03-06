import React from 'react'
import './Contact.scss'

import InstagramLogo from '../../imgs/instagram.png'
import FacebookLogo from '../../imgs/facebook.png'

function Contact() {
	return (
		<section className='kontakt'>
			<h1 className='center'>KONTAKT</h1>
			<div className='info'>
				<h2>Rammuklubi MTÜ</h2>
				<h2>Registrikood: 80602782</h2>
			</div>

			<div className='pank'>
				<h3>Pangakonto:</h3>
				<h3>Rammuklubi MTÜ</h3>
				<h3>EE2722200221077993385</h3>
			</div>

			<h3>E-post: <a href='mailto:rammuklubi@gmail.com'>rammuklubi@gmail.com</a></h3>
			<div className='social-media'>
				<a href="https://www.instagram.com/rammukoobas/" target="_blank" rel="noopener noreferrer"><img src={InstagramLogo} alt="insta logo" /></a>
				<a href="https://www.facebook.com/rammukoobas" target="_blank" rel="noopener noreferrer"><img src={FacebookLogo} alt="facebook logo" /></a>
			</div>
		</section>
	)
}

export default Contact