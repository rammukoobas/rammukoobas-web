import React from 'react'
import { useNavigate } from 'react-router-dom'
import { List } from 'semantic-ui-react'
import './Competitions.scss'

import Viljandi2022 from './Catalogue/CompetitionImages/2022Viljandi.jpg'
import Palgimeister2022 from './Catalogue/CompetitionImages/2022Palgimeister.jpg'
import Tartu2023 from './Catalogue/CompetitionImages/2023Tartu.jpg'
import Tartu2024 from './Catalogue/CompetitionImages/2024Tartu.jpg'

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
				<h1 className='center'>- - -</h1>

			</List>
			<div className='past-banner'>
				<h2>TOIMUNUD VÕISTLUSED:</h2>
			</div>
			<List className="nimekiri">
				<List.Item onClick={() => routeChange("/voistlused/eesti-13-07-2024")}>
					<div className='competition-item'>
						<div className='competition-heading'>
							<h2>Eesti rammumees ja rammunaine 2024</h2><h3 className='mt-0'>13.07.2024</h3>
						</div>
						<img className='competition-img' src={Tartu2024} />
					</div>
				</List.Item>

				<List.Item onClick={() => routeChange("/voistlused/tartu-22-07-2023")}>
					<div className='competition-item'>
						<div className='competition-heading'>
							<h2>Tartu rammumees ja rammunaine 2023</h2><h3 className='mt-0'>22.07.2023</h3>
						</div>
						<img className='competition-img' src={Tartu2023} />
					</div>
				</List.Item>

				<List.Item onClick={() => routeChange("/voistlused/toilasadam-27-08-2022")}>
					<div className='competition-item'>
						<div className='competition-heading'>
							<h2>Eesti meistrivõistlused palgi surumises 2022</h2><h3 className='mt-0'>27.08.2022</h3>
						</div>
						<img className='competition-img' src={Palgimeister2022} />
					</div>

				</List.Item>

				<List.Item onClick={() => routeChange("/voistlused/viljandi-04-06-2022")}>
					<div className='competition-item'>
						<div className='competition-heading'>
							<h2>Viljandi Rammumees ja Rammunaine 2022</h2><h3 className='mt-0'>04.06.2022</h3>
						</div>
						<img className='competition-img' src={Viljandi2022} />
					</div>

				</List.Item>
			</List>
		</section>
	)
}

export default Competitions