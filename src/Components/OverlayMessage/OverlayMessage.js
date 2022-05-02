import React from 'react'
import { Button } from 'semantic-ui-react'

import './OverlayMessage.scss'

function OverlayMessage({ message, closeFunc }) {
	return (
		<div className='overlay'>
			<div className='messageBox'>
				<h2>{message}</h2>
				<Button type='submit' onClick={closeFunc}>OK</Button>
			</div>
		</div>
	)
}

export default OverlayMessage