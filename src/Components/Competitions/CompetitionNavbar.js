import React from 'react'
import { Dropdown } from 'semantic-ui-react'

import './CompetitionNavbar.scss'

const dropdownOptions = [
	{ key: "info", value: "info", text: "ÜLDINFO" },
	{ key: "rules", value: "rules", text: "REEGLID" },
	// { key: "register", value: "register", text: "REGISTREERIMINE" },
]

function CompetitionNavbar({ infoDisplayed, setInfoDisplayed }) {
	return (
		<header className='competition-navbar'>
			<h2 className={infoDisplayed === "info" ? "underline" : null} onClick={() => { setInfoDisplayed("info") }}>ÜLDINFO</h2>
			<h2 className={infoDisplayed === "rules" ? "underline" : null} onClick={() => { setInfoDisplayed("rules") }}>REEGLID</h2>
			{/* <h2 className={infoDisplayed === "register" ? "underline" : null} onClick={() => { setInfoDisplayed("register") }}>REGISTREERIMINE</h2> */}


			<Dropdown
				className='mobile nav-dropdown'
				fluid
				selection
				value={infoDisplayed}
				onChange={(_e, data) => { setInfoDisplayed(data.value) }}
				icon="bars"
				options={dropdownOptions}
			/>
		</header>
	)
}

export default CompetitionNavbar