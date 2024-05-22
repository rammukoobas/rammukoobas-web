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
						<h2><Icon name="circle" />VÕISTLUS!</h2>
					</div>

					<Icon className='close' name="window close" onClick={() => setShowPopup(false)}></Icon>
				</div>
				<div className='popup-content'>

					<h4>Pane end Tartu Rammumees ja Rammunaine 2024 võistlusele kirja!</h4>


					<div className='padding-top'>
						<a href='/#/voistlused/tartu-13-07-2024/register' onClick={() => setShowPopup(false)}>
							<h3>REGISTREERI SIIN</h3>
						</a>
					</div>

				</div>
			</div>

		</>
	)
}