import { Icon } from 'semantic-ui-react'
import './PopupAlert.scss'
import { useState } from 'react'
import { useEffect } from 'react'

export const PopupAlert = () => {
	const [showPopup, setShowPopup] = useState(false)

	useEffect(() => {
		setTimeout(() => {
			setShowPopup(true)
		}, 1000);

	}, [])

	return (
		<>
			<div className={`popup-alert ${!showPopup ? "hidden" : ""}`}>
				<div className="header">
					<div>
						<h2><Icon name="circle" />LIVE</h2>
					</div>

					<Icon className='close' name="window close" onClick={() => setShowPopup(false)}></Icon>
				</div>
				<div className='popup-content'>
					<a href='https://rammukoobas.mikron.ee/parnu_rammumees_2023' target='_blank' rel="noreferrer">
						<h4>Pärnu Rammumees 2023 tulemused reaalajas</h4>
					</a>

				</div>
			</div>

		</>
	)
}