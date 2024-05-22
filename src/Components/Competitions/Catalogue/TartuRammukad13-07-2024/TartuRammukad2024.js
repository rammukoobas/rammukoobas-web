import React, { useEffect, useState } from 'react'
import { Form, List, Button, Checkbox, Icon, Table } from 'semantic-ui-react'
import emailjs from "emailjs-com"

import '../../../Competitions/Competitions.scss'

import FacebookLogo from '../../../../imgs/facebook.png'

import CompetitionNavbar from '../../CompetitionNavbar'


import OverlayMessage from '../../../OverlayMessage/OverlayMessage'

function Info() {
	return (
		<div className='info-div text-center'>
			<h3>Selgitame välja Tartu Rammumehe ja Rammunaise 2024</h3>
			<h3>Võistlus toimub Tartu Lõunakeskuse jäähallis 13. juulil 2024 (13.07.2024) </h3>

			<h2>PLAANITAVAD VÕISTLUSALAD:</h2>
			<List ordered>
				<List.Item>Liivakottide viskamine üle 4,5m</List.Item>
				<List.Item>Liivakottide tõstmine õlale</List.Item>
				<List.Item>Karussell</List.Item>
				<List.Item>Õla kompleks ala</List.Item>
				<List.Item>Hummer Tyre apollon jõutõmme</List.Item>
			</List>

			<h2>Ajakava:</h2>
			<List>
				<List.Item>11.00-12.00 Kõigi võistlejate kogunemine</List.Item>
				<List.Item>12.00-12.20 Võistlejate tutvustamine</List.Item>
				<List.Item>12.20-15.00 Noorte ja U105 võistlus</List.Item>
				<List.Item>15.00-18.00 Meeste ja naiste avatud klassi võistlus</List.Item>
				<List.Item>18.00-19.00 Autasustamine</List.Item>
			</List>

			<h4>NB! Ajakava võib muutuda!</h4>
		</div>
	)
}

function Rules() {
	return (
		<div className='info-div'>
			<h2>ÜLDREEGILD JA FORMAAT:</h2>
			<List>
				<List.Item><h3>- Lubatud on kasutada tõstevööd, randmesidemed ja põlvesidemed, tõste jalanõusid, trikoosid, palgi särke jne. Lubatud ei ole mehaaniliselt sooritust parandavad atribuudid.</h3></List.Item>
				<List.Item><h3>- Talgi, kriidi, magneesiumi vms aine kasutamine on lubatud kehal ja riietel. Lubatud ei ole liimuvad vahendid hoidmissoorituse parandamiseks.</h3></List.Item>
				<List.Item><h3>- Võistleja riietus - lubatud on võistlustrikoo, lühikesed püksid. Võistlustel peab kandma korraldaja poolt ette antud särki kui ei ole juhendatud teisiti.</h3></List.Item>
				<List.Item><h3>- Enne igat võistlusala tutvustab kohtunik ala eripära ja võistlusreegleid kõigile grupi võistlejatele.</h3></List.Item>
				<List.Item><h3>- Eelmine ala määrab võistlusjärjekorra järgmisele alale. Ala võitja teeb järgmist ala viimasena!</h3></List.Item>
				<List.Item><h3>- Esimese ala järjekorra loosimine toimub võistlejate tutvustusel!</h3></List.Item>
			</List>

			<h2>VÕISTLUSALADE REEGILD:</h2>
			<div className='py-7'>
				<h2>Liivakottide viskamine üle 4,5m</h2>

				<Table basic='very'>
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell>Võistlusklass</Table.HeaderCell>
							<Table.HeaderCell>Kottide kaalud</Table.HeaderCell>
						</Table.Row>
					</Table.Header>

					<Table.Body>
						<Table.Row>
							<Table.Cell>Noored (23a ja alla)</Table.Cell>
							<Table.Cell>30lbs, 35lbs, 40lbs, 45lbs, 50lbs</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>Mehed U105 (alla 106kg)</Table.Cell>
							<Table.Cell>30lbs, 35lbs, 40lbs, 45lbs, 50lbs</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>Naised vaba klass</Table.Cell>
							<Table.Cell>15lbs, 20lbs, 25lbs, 30lbs, 35lbs</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>Mehed vaba klass</Table.Cell>
							<Table.Cell>40lbs, 45lbs, 50lbs, 55lbs, 60lbs</Table.Cell>
						</Table.Row>
					</Table.Body>
				</Table>

				<List>
					<List.Item>- Võidab see, kes tõstab kõige kiiremini kõik kotid õlale, ajalimiit 60 sekundit.</List.Item>
					<List.Item>- Aeg läheb kinni siis kui kohtunik annab alla märguande!</List.Item>
					<List.Item>- Kotte peab tõstma õlale järjest!</List.Item>
				</List>
			</div>
			<h2>Liivakottide tõstmine õlale</h2>

			<Table basic="very">
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell>Class</Table.HeaderCell>
						<Table.HeaderCell>Weights</Table.HeaderCell>
					</Table.Row>
				</Table.Header>

				<Table.Body>
					<Table.Row>
						<Table.Cell>Noored (23a ja alla)</Table.Cell>
						<Table.Cell>60kg, 80kg, 100kg, 120kg, 140kg</Table.Cell>
					</Table.Row>
					<Table.Row>
						<Table.Cell>Mehed U105 (alla 106kg)</Table.Cell>
						<Table.Cell>60kg, 80kg, 100kg, 120kg, 140kg</Table.Cell>
					</Table.Row>
					<Table.Row>
						<Table.Cell>Naised vaba klass</Table.Cell>
						<Table.Cell>30kg, 40kg, 50kg, 60kg, 80kg</Table.Cell>
					</Table.Row>
					<Table.Row>
						<Table.Cell>Mehed vaba klass</Table.Cell>
						<Table.Cell>60kg, 80kg, 100kg, 120kg, 140kg</Table.Cell>
					</Table.Row>
				</Table.Body>
			</Table>

			<List>
				<List.Item><h3>- Igal võistlejal on aega 60 sekundit, et teha maksimaalne arv korduseid</h3></List.Item>
				<List.Item><h3>- Raskust tohib vahepeal õlgadelt maha panna üks kord</h3></List.Item>
				<List.Item><h3>- Raami raskus selgub võistluspaigal</h3></List.Item>
				<List.Item><h3>- Võidab see, kes teeb 60 sekundi jooksul kõige rohkem korduseid</h3></List.Item>
				<List.Item><h3>- Alale on lubatud üks võistleja abiline</h3></List.Item>
			</List>

			<h2>Meremehe ja raami vedamine 15+15m</h2>
			<List>
				<List.Item><h3>- Meremehe raskused on järgmised:</h3></List.Item>
				<List.Item><h5>Noored (alla 20a) 200kg</h5></List.Item>
				<List.Item><h5>Naised vaba klass 150kg</h5></List.Item>
				<List.Item><h5>Mehed U90 (alla 90kg) 280kg</h5></List.Item>
				<List.Item><h5>Mehed U105 (alla 105kg) 280kg</h5></List.Item>
				<List.Item><h5>Mehed masters (üle 40 aastased) 280kg</h5></List.Item>
				<List.Item><h5>Mehed vaba klass 350kg</h5></List.Item>
				<List.Item><h3>- Igal võistlejal on aega meremehe ja raami kandmiseks 60 sekundit</h3></List.Item>
				<List.Item><h3>- Võidab see, kes käib vahemaa kõige kiiremini. Kui aeg saab otsa, siis võidab see, kes käib raskusega kõige kaugemale</h3></List.Item>
				<List.Item><h3>- Alale on lubatud üks võistleja abiline</h3></List.Item>
			</List>

			<h2>Dinnie Stones jooks 15m</h2>
			<List>
				<List.Item><h3>- Igal võistlejal on „Dinnie stone“ 15m raja läbimiseks aega 60 sekundit</h3></List.Item>
				<List.Item><h3>- Dinnie Stone ala raskused:</h3></List.Item>
				<List.Item><h5>Noored (alla 20a) 90kg ja 70kg </h5></List.Item>
				<List.Item><h5>Naised vaba klass 70kg ja 50kg</h5></List.Item>
				<List.Item><h5>Mehed U90 (alla 90kg) 110kg ja 90kg</h5></List.Item>
				<List.Item><h5>Mehed U105 (alla 105kg) 110kg ja 90kg</h5></List.Item>
				<List.Item><h5>Mehed masters (üle 40 aastased) 110kg ja 90kg</h5></List.Item>
				<List.Item><h5>Mehed vaba klass 130kg ja 110kg</h5></List.Item>
				<List.Item><h3>- Võidab see, kes käib vahemaa kõige kiiremini. Kui aeg saab otsa, siis võidab see, kes käib raskusega kõige kaugemale</h3></List.Item>
				<List.Item><h3>- Alale on lubatud üks võistleja abiline</h3></List.Item>
			</List>

			<h2>Kottide tõstmine</h2>
			<List>
				<List.Item><h3>- Kottide raskused:</h3></List.Item>
				<List.Item><h5>Noored (alla 20a) 80kg, 100kg ja 120 kg</h5></List.Item>
				<List.Item><h5>Naised vaba klass 80kg, 100kg ja 120 kg</h5></List.Item>
				<List.Item><h5>Mehed U90 (alla 90kg) 100kg, 120kg ja 140 kg</h5></List.Item>
				<List.Item><h5>Mehed U105 (alla 105kg) 100kg, 120kg ja 140 kg</h5></List.Item>
				<List.Item><h5>Mehed masters (üle 40 aastased) 100kg, 120kg ja 140 kg</h5></List.Item>
				<List.Item><h5>Mehed vaba klass 120kg ja 140 kg</h5></List.Item>
				<List.Item><h3>- Võidab see, kes tõstab kotte üle 1,2m kõrguse kõige rohkem kordi 60 sekundi jooksul</h3></List.Item>
				<List.Item><h3>- Üks tõste suurema raskusega võidab kõik väiksema raskusega tehtud tõsted!</h3></List.Item>
				<List.Item><h3>- Suurema raskusega tõstmise ebaõnnestumisel võib alati võtta kergema koti!</h3></List.Item>
				<List.Item><h3>- Alale on lubatud üks võistleja abiline!</h3></List.Item>
			</List>
		</div>
	)
}

function submitRegistration(e, setFormError, setSent, setErrorSending, setSending) {
	e.preventDefault()
	const sisu = Object.fromEntries(new FormData(e.target))

	setSending(true)

	if (!sisu["interested_video"]) {
		sisu["interested_video"] = "ei"
	}

	for (let el of Object.keys(sisu)) {
		if (sisu[el] === "") {
			setFormError(true)
			setSending(false)
			return
		}
	}

	emailjs.send("service_m8bfg0v", "template_kpvhezr", sisu, "DaGgmdahXul6skGgf")
		.then(response => {
			setSent(true)
			document.getElementById("reagmise-vorm").reset();
			console.log("E-kiri saadetud: ", response)
			setSending(false)
		})
		.catch(error => {
			setSent(true)
			setErrorSending(true)
			console.log("VIGA", error)
			setSending(false)
		})
}

function Register({ formError, setFormError }) {

	const [sent, setSent] = useState(false)
	const [sending, setSending] = useState(false)
	const [errorSending, setErrorSending] = useState(false)

	return (
		<div className='info-div'>
			<h2>Registreerumiseks palume täita järgneva avalduse:</h2>
			<Form id='reagmise-vorm' onSubmit={(e) => submitRegistration(e, setFormError, setSent, setErrorSending.bind(this), setSending)}>
				<Form.Field>
					<label>1. Ees- ja perekonnanimi (name)</label>
					<input name="nimi" placeholder='Ees- ja perekonnanimi / name' />
				</Form.Field>
				<Form.Field>
					<label>2. Vanus (age)</label>
					<input name="vanus" placeholder='Vanus / age' />
				</Form.Field>
				<Form.Field>
					<label>3. Sugu (gender)</label>
					<input name="sugu" placeholder='Mees/Naine male/female' />
				</Form.Field>
				<Form.Field>
					<label>4. Pikkus (height)</label>
					<input name="pikkus" placeholder='Pikkus (cm) / height (cm)' />
				</Form.Field>
				<Form.Field>
					<label>5. Kaal (weight)</label>
					<input name="kaal" placeholder='Kaal (kg) / weight (kg)' />
				</Form.Field>
				<Form.Field>
					<label>6. Võistlusklass (competition class) - Naised, Noored (alla 20a), Mehed U90, Mehed U105, Mehed Masters, Mehed Open</label>
					<input name="voistlusklass" placeholder='Võistlusklass / competition class' />
				</Form.Field>
				<Form.Field>
					<label>7. Klubi, mida sportlane esindab (represented club)</label>
					<input name="klubi" placeholder='Klubi / club' />
				</Form.Field>
				<Form.Field>
					<label>8. Riik, mida sportlane esindab (represented country)</label>
					<input name="riik" placeholder='Riik / country' />
				</Form.Field>
				<Form.Field>
					<label>9. Linn, mida sportlane esindab (represented city) </label>
					<input name="linn" placeholder='Linn / city' />
				</Form.Field>
				<Form.Field>
					<label>10. Telefoni number (phone)</label>
					<input name="telefon" placeholder='eg. +37255565565' />
				</Form.Field>
				<Form.Field>
					<label>11. E-posti aadress (email)</label>
					<input name="email" placeholder='eg. ats.ploom@gmail.com' />
				</Form.Field>
				<Form.Field>
					<label>12. T-Särgi suurus (shirt size)</label>
					<input name="sargi_suurus" placeholder='eg. XS, M, L, XXL etc' />
				</Form.Field>
				<Form.Field>
					<label>Kas oled huvitatud personaalsest videost, hinnad alates 30€ (Pannes linnukese kasti, edastatakse kontaktinfo partnerile, kes lepib detailid kokku). Are you interested in a personal video, prices from 30€ (By checking the box, the contact information will be forwarded to the partner, who will contact you and speak about the details)</label>
					<Checkbox name="interested_video" label="Huvitatud / Interested" value="jah"></Checkbox>
				</Form.Field>
				{formError &&
					<h4 style={{ "color": "maroon" }}>*Mingi sisend on jäänud sul täitmata! Palun kontrolli üle ja proovi uuesti registreerida. All inputs are not filled!</h4>
				}
				<Button className='button' type='submit' disabled={sending}>REGISTREERI</Button>
			</Form>

			<h2>Alternatiivselt registreerumiseks palume saata kirja e-mailile:</h2>
			<a href="mailto:rammumeesrammunaine@gmail.com"><h2>rammumeesrammunaine@gmail.com</h2></a>

			<h2>Infoga:</h2>
			<List ordered>
				<List.Item><h3>Ees ja perekonnanimi</h3></List.Item>
				<List.Item><h3>Vanus</h3></List.Item>
				<List.Item><h3>Sugu</h3></List.Item>
				<List.Item><h3>Pikkus</h3></List.Item>
				<List.Item><h3>Kaal</h3></List.Item>
				<List.Item><h3>Võistlusklass</h3></List.Item>
				<List.Item><h3>Klubi, mida sportlane esindab</h3></List.Item>
				<List.Item><h3>Riik, mida sportlane esindab</h3></List.Item>
				<List.Item><h3>Linn, mida sportlane esindab</h3></List.Item>
				<List.Item><h3>Telefoni number</h3></List.Item>
				<List.Item><h3>E-posti aadress</h3></List.Item>
				<List.Item><h3>T-särgi suurus</h3></List.Item>
				<List.Item><h3>Huvitatud videost</h3></List.Item>
			</List>

			{errorSending && sent ?
				<OverlayMessage message={"ERROR! Registreering ei õnnestunud"} closeFunc={() => setSent(false)} />
				:
				(sent ?
					<OverlayMessage message={"Registreering õnnestus!"} closeFunc={() => setSent(false)} />
					: null)
			}

		</div>
	)
}

function Live() {
	return (
		<>
			<div className='info-div'>
				{/* <h2>Otseülekanne toimub sport.television.ee keskkonnas:</h2>
				<a href='https://sport.television.ee/live/1819'><h2>https://sport.television.ee/live/1819</h2></a> */}
				<h2>Hetkel info puudub</h2>
			</div>
		</>
	)
}

function Media() {
	return (<></>)
}

function TartuRammukad22072023(props) {

	const [infoDisplayed, setInfoDisplayed] = useState("info")

	const [formError, setFormError] = useState(false)

	useEffect(() => {
		props.infoDisplayed ? setInfoDisplayed(props.infoDisplayed) : setInfoDisplayed("info")
	}, [props.infoDisplayed])


	return (
		<section className='competition'>
			<h1>Tartu Rammumees ja Rammunaine 2023</h1>
			<div className='social-media-event' onClick={() => { window.open("https://www.facebook.com/events/752661766046428") }}>
				<h3>Facebook event: </h3><img src={FacebookLogo} alt='facebook-logo' />
			</div>

			<div onClick={() => setInfoDisplayed("live")} className='photos center hover-cursor'>
				<h2><Icon style={{ "color": "maroon" }} name="circle" />VÕISTLUSE ÜLEKANNE</h2>

			</div>

			<div className='content'>
				<CompetitionNavbar infoDisplayed={infoDisplayed} allowRegister={false} setInfoDisplayed={setInfoDisplayed.bind(this)} />
				{infoDisplayed === "info" &&
					<Info />
				}
				{infoDisplayed === "rules" &&
					<Rules />
				}
				{infoDisplayed === "register" &&
					<Register formError={formError} setFormError={setFormError.bind(this)} />
				}
				{infoDisplayed === "live" &&
					<Live />
				}
			</div>

		</section>
	)
}

export default TartuRammukad22072023