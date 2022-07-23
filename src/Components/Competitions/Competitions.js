import React from 'react'
import { useNavigate } from 'react-router-dom'
import { List } from 'semantic-ui-react'
import './Competitions.scss'

import Viljandi2022 from './Catalogue/CompetitionImages/2022Viljandi.jpg'

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
			<List className="nimekiri">
				<List.Item onClick={() => routeChange("/voistlused/toilasadam-27-08-2022")}>
					<div className='competition-item'>
						<div className='competition-heading'>
							<h2>27.08.2022</h2><h3>Eesti meistrivõistlused palgi surumises 2022</h3>
						</div>
					</div>

				</List.Item>
			</List>
			<div className='past-banner'>
				<h2>TOIMUNUD VÕISTLUSED:</h2>
			</div>
			<List className="nimekiri">
				<List.Item onClick={() => routeChange("/voistlused/viljandi-04-06-2022")}>
					<div className='competition-item'>
						<div className='competition-heading'>
							<h2>04.06.2022</h2><h3>Viljandi Rammumees ja Rammunaine 2022</h3>
						</div>
						<img className='competition-img' src={Viljandi2022} />
					</div>

				</List.Item>
			</List>
		</section>
	)
}

export default Competitions