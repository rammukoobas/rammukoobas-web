import React, { useEffect, useState } from 'react'
import { Form, List, Button, Checkbox, Table } from 'semantic-ui-react'
import emailjs from "emailjs-com"

import '../../../Competitions/Competitions.scss'

import FacebookLogo from '../../../../imgs/facebook.png'

import CompetitionNavbar from '../../CompetitionNavbar'


import OverlayMessage from '../../../OverlayMessage/OverlayMessage'

function Info({ setInfoDisplayed }) {

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

			<h2>Tutvu võistluste formaadi ja reeglitega <span className='text-decoration-underline' onClick={() => setInfoDisplayed("rules")}>SIIN</span></h2>
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
			<div className='py-5 my-5 mt-0 pt-0'>
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

			<div className='py-5 my-5'>
				<h2>Liivakottide tõstmine õlale</h2>

				<Table basic="very">
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell>Võistlusklass</Table.HeaderCell>
							<Table.HeaderCell>Kaalud</Table.HeaderCell>
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

			</div>

			<div className='py-5 my-5'>
				<h2>Karussell</h2>
				<Table basic='very'>
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell>Võistlusklass</Table.HeaderCell>
							<Table.HeaderCell>Kaalud</Table.HeaderCell>
						</Table.Row>
					</Table.Header>

					<Table.Body>
						<Table.Row>
							<Table.Cell>Noored (23a ja alla)</Table.Cell>
							<Table.Cell>200kg</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>Mehed U105 (alla 106kg)</Table.Cell>
							<Table.Cell>220kg</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>Naised vaba klass</Table.Cell>
							<Table.Cell>120kg</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>Mehed vaba klass</Table.Cell>
							<Table.Cell>250kg</Table.Cell>
						</Table.Row>
					</Table.Body>
				</Table>
				<List>
					<List.Item><h3>- Võidab see, kes käib karusselliga kõige kaugemale. Kui aeg saab otsa, siis
						võidab see, kes on raskusega kõige kaugemale käinud.</h3></List.Item>
				</List>

			</div>


			<div className='py-5 my-5'>
				<h2>Õla kompleks ala</h2>

				<h3 className='pt-3'>Apollon kangi raskused:</h3>
				<Table basic='very'>
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell>Võistlusklass</Table.HeaderCell>
							<Table.HeaderCell>Kaalud</Table.HeaderCell>
						</Table.Row>
					</Table.Header>

					<Table.Body>
						<Table.Row>
							<Table.Cell>Noored (23a ja alla)</Table.Cell>
							<Table.Cell>70kg</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>Mehed U105 (alla 106kg)</Table.Cell>
							<Table.Cell>100kg</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>Naised vaba klass</Table.Cell>
							<Table.Cell>40kg kordustele</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>Mehed vaba klass</Table.Cell>
							<Table.Cell>110kg</Table.Cell>
						</Table.Row>
					</Table.Body>
				</Table>

				<h3 className='pt-3'>Metallpalgi raskused:</h3>
				<Table basic='very'>
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell>Võistlusklass</Table.HeaderCell>
							<Table.HeaderCell>Kaalud</Table.HeaderCell>
						</Table.Row>
					</Table.Header>

					<Table.Body>
						<Table.Row>
							<Table.Cell>Noored (23a ja alla)</Table.Cell>
							<Table.Cell>80kg</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>Mehed U105 (alla 106kg)</Table.Cell>
							<Table.Cell>100kg</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>Mehed vaba klass</Table.Cell>
							<Table.Cell>120kg</Table.Cell>
						</Table.Row>
					</Table.Body>
				</Table>


				<h3 className='pt-3'>Puidust palgi raskused:</h3>
				<Table basic='very'>
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell>Võistlusklass</Table.HeaderCell>
							<Table.HeaderCell>Kaalud</Table.HeaderCell>
						</Table.Row>
					</Table.Header>

					<Table.Body>
						<Table.Row>
							<Table.Cell>Noored (23a ja alla)</Table.Cell>
							<Table.Cell>90kg</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>Mehed U105 (alla 106kg)</Table.Cell>
							<Table.Cell>100kg</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>Mehed vaba klass</Table.Cell>
							<Table.Cell>120kg</Table.Cell>
						</Table.Row>
					</Table.Body>
				</Table>


				<h3 className='pt-3'>Metallist ploki raskused:</h3>
				<Table basic='very'>
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell>Võistlusklass</Table.HeaderCell>
							<Table.HeaderCell>Kaalud</Table.HeaderCell>
						</Table.Row>
					</Table.Header>

					<Table.Body>
						<Table.Row>
							<Table.Cell>Noored (23a ja alla)</Table.Cell>
							<Table.Cell>90kg</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>Mehed U105 (alla 106kg)</Table.Cell>
							<Table.Cell>100kg</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>Mehed vaba klass</Table.Cell>
							<Table.Cell>120kg</Table.Cell>
						</Table.Row>
					</Table.Body>
				</Table>
				<List>
					<List.Item><h3>- Igal võistlejal on raja läbimiseks aega 60 sekundit.</h3></List.Item>
					<List.Item><h3>- Võidab see, kes läbib raja kõige kiiremini.</h3></List.Item>
				</List>
			</div>

			<h2>Hummer Tyre apollon jõutõmme</h2>
			<List>
				<List.Item><h3>- Võistluse formaat toimub „last man standing“ formaadis (raskustega üles minek toimub ringi süsteemis ja kohtunike ette antud raskustega)</h3></List.Item>
				<List.Item><h3>- Võistleja tulemustena jääb võistlusprotokolli kolm viimast edukat tõmmet (võitja järjestus selgub parimate tõmmete järgi)!</h3></List.Item>
				<List.Item><h3>- Tõmmates sama tulemuse, võidab see võistleja, kes on kergem!</h3></List.Item>
				<List.Item><h3>- Tõmbel peavad käed hoidma kangist kinni põlvedest väljastpoolt.</h3></List.Item>
			</List>

			<h4 className='pt-5'>Edukat Võistlemist!</h4>
		</div>
	)
}

function submitRegistration(e, setFormError, setSent, setErrorSending, setSending) {
	e.preventDefault()
	const sisu = Object.fromEntries(new FormData(e.target))

	setSending(true)

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
					<label>2. Vanus võistluse hetkel (age)</label>
					<input name="vanus" placeholder='Vanus / age' />
				</Form.Field>
				<Form.Field>
					<label>3. Pikkus (height)</label>
					<input name="pikkus" placeholder='Pikkus (cm) / height (cm)' />
				</Form.Field>
				<Form.Field>
					<label>4. Kaal (weight)</label>
					<input name="kaal" placeholder='Kaal (kg) / weight (kg)' />
				</Form.Field>
				<Form.Field>
					<label>5. Klubi, mida sportlane esindab (represented club)</label>
					<input name="klubi" placeholder='Klubi / club' />
				</Form.Field>
				<Form.Field>
					<label>6. T-Särgi suurus (shirt size)</label>
					<input name="sargi_suurus" placeholder='eg. XS, M, L, XXL etc' />
				</Form.Field>
				<Form.Field>
					<label>7. Võistleja tutvustamisel lastav laul (theme song)</label>
					<input name="song" placeholder='https://youtu.be/DhlPAj38rHc' />
				</Form.Field>
				<Form.Field>
					<label>8. Telefoni number (phone)</label>
					<input name="telefon" placeholder='eg. +37255565565' />
				</Form.Field>
				<Form.Field>
					<label>9. E-posti aadress (email)</label>
					<input name="email" placeholder='eg. ats.ploom@gmail.com' />
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
				<List.Item><h3>Pikkus</h3></List.Item>
				<List.Item><h3>Kaal</h3></List.Item>
				<List.Item><h3>Klubi, mida sportlane esindab</h3></List.Item>
				<List.Item><h3>T-särgi suurus</h3></List.Item>
				<List.Item><h3>Telefoni number</h3></List.Item>
				<List.Item><h3>E-posti aadress</h3></List.Item>
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
			<h1>Tartu Rammumees ja Rammunaine 2024</h1>
			<div className='social-media-event' onClick={() => { window.open("https://www.facebook.com/events/958053296108924/") }}>
				<h3>Facebook event: </h3><img src={FacebookLogo} alt='facebook-logo' />
			</div>

			{/* <div onClick={() => setInfoDisplayed("live")} className='photos center hover-cursor'>
				<h2><Icon style={{ "color": "maroon" }} name="circle" />VÕISTLUSE ÜLEKANNE</h2>
			</div> */}

			<div className='content'>
				<CompetitionNavbar infoDisplayed={infoDisplayed} allowRegister={true} setInfoDisplayed={setInfoDisplayed.bind(this)} />
				{infoDisplayed === "info" &&
					<Info setInfoDisplayed={setInfoDisplayed} />
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