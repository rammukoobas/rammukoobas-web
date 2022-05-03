import React from 'react'

import './About.scss'

import SkacronLogo from '../../imgs/skarcon.png'
import KiilakaLogo from '../../imgs/painted-by-kiilakas-logo.png'
import KoverKang from '../../imgs/koverkang.png'
import Santrust from '../../imgs/santrust.png'

function About() {
	return (
		<section className='klubist'>
			<h1 className='center'>KLUBIST</h1>
			<div className='joon vaiksem'></div>
			<div className='joon'></div>
			<div className='banner'></div>
			<div className='joon'></div>
			<div className='joon vaiksem'></div>
			<div className='joon veelvaiksem'></div>

			<div className='tekst'>
				<h3>Rammuklubi MTÜ loodi 2021 aastal eesmärgiga tuua kokku jõutõstmise ja rammualade inimesed Tartus ja lähiümbruses ning luua klubi liikmetele spetsiaalne treeningruum, mis on täna tuntud kui Rammukoobas. Aktiivsemad klubi liikmed korraldavad võistlusi ja treeningpäevi Rammukoopas, nendest üritustest leiab infot meie Facebook ja Instagrami leheküljelt. Samuti käivad klubi liikmed ise võistlemas nii Eestis kui välisriikides. Läbi oma tegevuse tahame anda panuse jõu- ja rammuspordi kasvu ning levikusse Eestis. </h3>
				<h3>Klubi toimib tänu liikmete toetustele ja annetustele. Rammukoopa sisustuse ja inventari on klubi liikmed ise hankinud või on saadud see läbi toetajate. Selle eest ütleme koopa käimashoidmise eest nii oma liikmetele kui toetajatele: "AITÄH!" </h3>
				<h3 className='center'>Alati võib meid toetada tehes annetuse meie pangakontole:</h3>
				<h2 className='center'>Rammuklubi MTÜ</h2>
				<h2 className='center'>EE2722200221077993385</h2>
			</div>

			<div className='sponsorid center'>
				<h2 className='margin-top-50'>RAMMUKOOPA TOETAJAD:</h2>
				<div className='sponsori-pildid'>
					<div className='logo'>
						<img src={SkacronLogo} alt="skarcon logo" />
						<a href='http://www.skarcon.eu/' target="_blank" rel="noopener noreferrer"><h3>Skarcon OÜ</h3></a>
					</div>
					<div className='logo'>
						<img src={KiilakaLogo} alt="kiilaka logo" />
						<a href='http://kiilakas.ee/' target="_blank" rel="noopener noreferrer"><h3>Kiilaka Autod OÜ</h3></a>
					</div>
					<div className='logo'>
						<img src={Santrust} alt="santrust logo" />
						<a href='https://www.facebook.com/SanTrustoy' target="_blank" rel="noopener noreferrer"><h3>Santrust OÜ</h3></a>
					</div>
					<div className='logo'>
						<img src={KoverKang} alt="KoverKang logo" />
						<a href='https://www.instagram.com/koverkang/' target="_blank" rel="noopener noreferrer"><h3>Kõver Kang</h3></a>
					</div>

				</div>
			</div>


		</section>
	)
}

export default About