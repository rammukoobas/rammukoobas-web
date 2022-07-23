import React from 'react'
import { Dropdown } from 'semantic-ui-react'

import './CompetitionNavbar.scss'

function CompetitionNavbar({ infoDisplayed, setInfoDisplayed, allowRegister }) {

	const dropdownOptions = [
		{ key: "info", value: "info", text: "ÜLDINFO" },
		{ key: "rules", value: "rules", text: "REEGLID" },
	]

	if (allowRegister) dropdownOptions.push({ key: "register", value: "register", text: "REGISTREERIMINE" })

	return (
		<header className='competition-navbar'>
			<h2 className={infoDisplayed === "info" ? "underline" : null} onClick={() => { setInfoDisplayed("info") }}>ÜLDINFO</h2>
			<h2 className={infoDisplayed === "rules" ? "underline" : null} onClick={() => { setInfoDisplayed("rules") }}>REEGLID</h2>
			{allowRegister &&
				<h2 className={infoDisplayed === "register" ? "underline" : null} onClick={() => { setInfoDisplayed("register") }}>REGISTREERIMINE</h2>
			}


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