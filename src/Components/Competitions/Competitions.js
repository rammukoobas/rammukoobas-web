import React from 'react'
import { useNavigate } from 'react-router-dom'
import { List } from 'semantic-ui-react'
import './Competitions.scss'

function Competitions() {

	const navigate = useNavigate()

	const routeChange = (path) => {
		navigate(path)
	}
	return (
		<section className='section-competition'>
			<div className='upcoming-banner'>
				<h1>TULEVASED VÕISTLUSED:</h1>
			</div>
			<h2 className='center'>----</h2>

			<div className='past-banner'>
				<h2>TOIMUNUD VÕISTLUSED:</h2>
			</div>
			<List className="nimekiri">
				<List.Item onClick={() => routeChange("/voistlused/viljandi-04-06-2022")}><h2>04.06.2022</h2><h3>Viljandi Rammumees ja Rammunaine 2022</h3></List.Item>
			</List>
		</section>
	)
}

export default Competitions