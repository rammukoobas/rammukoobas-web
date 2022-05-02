import React from 'react'
import { useParams } from 'react-router-dom'
import ViljandiRammukad04062022 from '../Competitions/Catalogue/ViljandiRammukad04-06-2022/ViljandiRammukad04062022'

const competitonDictionary = {
	"viljandi-04-06-2022": ViljandiRammukad04062022
}

function Competition() {

	const params = useParams()
	const CompetitionInfoComponent = competitonDictionary[params.voistlus]

	return <CompetitionInfoComponent />
}

export default Competition