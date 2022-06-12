import React from 'react'
import { useParams } from 'react-router-dom'
import ViljandiRammukad04062022 from '../Competitions/Catalogue/ViljandiRammukad04-06-2022/ViljandiRammukad04062022'

const competitonDictionary = {
	"viljandi-04-06-2022": ViljandiRammukad04062022
}

function Competition(props) {

	const params = useParams()
	const CompetitionInfoComponent = competitonDictionary[params.voistlus]

	if (!CompetitionInfoComponent) {
		return <h1 style={{ "paddingTop": "150px", "margin": "0" }}>URL / LINK ON EBAKORREKTNE. KONTROLLI SEDA PALUN!</h1>
	}

	return <CompetitionInfoComponent infoDisplayed={props.infoDisplayed} />
}

export default Competition