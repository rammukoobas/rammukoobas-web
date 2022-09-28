import React from 'react'
import './Contact.scss'

import InstagramLogo from '../../imgs/instagram.png'
import FacebookLogo from '../../imgs/facebook.png'

import { Button, Popup } from 'semantic-ui-react'

function Contact() {

	const pangakonto = "EE272200221077993385"
	const pangakontoNimi = "MTÜ RAMMUKLUBI"

	const copyToClipboard = (text) => {
		navigator.clipboard.writeText(text)
	}

	return (
		<section className='kontakt'>
			<h1 className='center'>KONTAKT</h1>
			<div className='info'>
				<h2>Rammuklubi MTÜ</h2>
				<h2>Registrikood: 80602782</h2>
			</div>

			<div className='pank'>
				<h3>Pangakonto:</h3>
				<div className='with-button'>
					<h3>{pangakontoNimi}</h3>
					<Popup size='small' content='Kopeeritud' pinned on='click' trigger={<Button onClick={() => copyToClipboard(pangakontoNimi)} className='copy-button' icon='copy' />}></Popup>
				</div>
				<div className='with-button'>
					<h3>{pangakonto}</h3>
					<Popup size='small' content='Kopeeritud' pinned on='click' trigger={<Button onClick={() => copyToClipboard(pangakonto)} className='copy-button' icon='copy' />}></Popup>
				</div>
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