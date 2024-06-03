import React from 'react'
import { useParams } from 'react-router-dom'
import EestiMeisterPalk27082022 from '../Competitions/Catalogue/EestiMeisterPalk27-08-2022/EestiMeisterPalk27-08-2022'
import TartuRammukad22072023 from '../Competitions/Catalogue/TartuRammukad22-07-2023/TartuRammukad22072023'
import ViljandiRammukad04062022 from '../Competitions/Catalogue/ViljandiRammukad04-06-2022/ViljandiRammukad04062022'
import TartuRammukad13072024 from '../Competitions/Catalogue/TartuRammukad13-07-2024/TartuRammukad2024'

const competitonDictionary = {
	"viljandi-04-06-2022": ViljandiRammukad04062022,
	"toilasadam-27-08-2022": EestiMeisterPalk27082022,
	"tartu-22-07-2023": TartuRammukad22072023,
	"eesti-13-07-2024": TartuRammukad13072024
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