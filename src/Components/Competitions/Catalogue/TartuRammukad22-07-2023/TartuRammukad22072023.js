import React, { useEffect, useState } from 'react'
import { Form, List, Button, Checkbox } from 'semantic-ui-react'
import emailjs from "emailjs-com"

import '../../../Competitions/Competitions.scss'

import FacebookLogo from '../../../../imgs/facebook.png'

import CompetitionNavbar from '../../CompetitionNavbar'


import OverlayMessage from '../../../OverlayMessage/OverlayMessage'

function Info() {
	return (
		<div className='info-div text-center'>
			<h3>Selgitame välja Tartu Rammumehe ja Rammunaise 2023</h3>
			<h3>Võistlus toimub Tartu südalinnas 22. juulil 2023 (22.07.2023) </h3>
			<h2>PLAANITAVAD VÕISTLUSALAD:</h2>
			<List ordered>
				<List.Item>18 tolli jõutõmme (eraldi Eesti meistrivõistluste arvestus)</List.Item>
				<List.Item>Viking press</List.Item>
				<List.Item>Meremees ja raam 15+15m</List.Item>
				<List.Item>Kompleksala</List.Item>
				<List.Item>Kivide/kottide tõstmine</List.Item>
			</List>
			<h4>NB! Võistlusalad võivad muutuda vastavalt sponsoritele!</h4>
			<h2>Eesti meistrivõistlused 18 tolli jõutõmbes alaklassid:</h2>
			<List>
				<List.Item>Noored (alla 20 aastased)</List.Item>
				<List.Item>Naised (Vaba klass)</List.Item>
				<List.Item>Mehed U90 (alla 90kg)</List.Item>
				<List.Item>Mehed U105 (alla 105kg)</List.Item>
				<List.Item>Mehed masters (üle 40 aastased) </List.Item>
				<List.Item>Mehed (Vaba klass)</List.Item>
			</List>
			<h2>Tartu Rammumees ja Rammunaine alaklassid:</h2>
			<List>
				<List.Item>Noored (alla 20 aastased) - <strong>Eesti meistrivõistlused</strong></List.Item>
				<List.Item>Naised (Vaba klass)</List.Item>
				<List.Item>Mehed U90 (alla 90kg) - <strong>Eesti meistrivõistlused</strong></List.Item>
				<List.Item>Mehed U105 (alla 105kg) - <strong>Eesti meistrivõistlused</strong></List.Item>
				<List.Item>Mehed masters (üle 40 aastased) - <strong>Eesti meistrivõistlused</strong></List.Item>
				<List.Item>Mehed (Vaba klaass) - <strong>Eesti PRO liiga etapp </strong></List.Item>
			</List>

			<div class="framed">
				<h2>Maailmarekordikatse 18 tolli jõutõmbes !!!</h2>
				<h3>Rauno Heinla ning Aivars Smaukstelis tulevad ja üritavad tõmmata maailmarekordit 18 tolli jõutõmbes. </h3>
			</div>

			<h2>Ajakava:</h2>
			<List>
				<List.Item>09.00-09.55 Kogunevad naised ja noored </List.Item>
				<List.Item>10.00-12.00 Naiste ja noorte võistlus </List.Item>
				<List.Item>12.00-12.55 Kogunevad U90, U105 ja Masters klassid </List.Item>
				<List.Item>13.00-16.00 Võistlevad U90, U105 ja Masters klassid. </List.Item>
				<List.Item>16.00-17.00 Maailmarekordi katsed 18 tolli jõutõmbes. </List.Item>
				<List.Item>17.00-20.00 Võistlevad meeste vaba klassi sportlased. </List.Item>
				<List.Item>21.00 Autasustamine</List.Item>
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
			</List>

			<h2>VÕISTLUSALADE REEGILD:</h2>
			<h2>18 tolli Jõutõmme EMV</h2>
			<List>
				<List.Item><h3>- Igal võistlejal on kolm katset</h3></List.Item>
				<List.Item><h3>- Võistleja peab algraskuse teatama sekretärile 10 minutit enne ala algust</h3></List.Item>
				<List.Item><h3>- Iga järgnev raskus on vaja sekretärile öelda järgmise võistleja katse jooksul</h3></List.Item>
				<List.Item><h3>- Jõutõmbetrikoo on lubatud</h3></List.Item>
				<List.Item><h3>- Tõmbel peavad käed hoidma kangist kinni põlvedest väljastpoolt.</h3></List.Item>
				<List.Item><h3>- Tõmbe Alal on lubatud üks võistleja abiline</h3></List.Item>
				<List.Item><h3>- Võidab see, kes tõstab 18 tolli kõrguselt kõige suurema raskuse kooskõlas kohtunikega.</h3></List.Item>
			</List>

			<h2>Viking press</h2>
			<List>
				<List.Item><h3>- Igal võistlejal on aega 60 sekundit, et teha maksimaalne arv korduseid</h3></List.Item>
				<List.Item><h3>- Raskust tohib vahepeal õlgadelt maha panna üks kord</h3></List.Item>
				<List.Item><h3>- Raami raskus selgub võistluspaigal</h3></List.Item>
				<List.Item><h3>- Võidab see, kes teeb 60 sekundi jooksul kõige rohkem korduseid</h3></List.Item>
				<List.Item><h3>- Alale on lubatud üks võistleja abiline</h3></List.Item>
			</List>

			<h2>Meremehe ja raami vedamine 15+15m</h2>
			<List>
				<List.Item><h3>- Igal võistlejal on aega meremehe ja raami kandmiseks 60 sekundit</h3></List.Item>
				<List.Item><h3>- Meremehe ja raami raskused selguvad kohapeal</h3></List.Item>
				<List.Item><h3>- Võidab see, kes käib vahemaa kõige kiiremini. Kui aeg saab otsa, siis võidab see, kes käib raskusega kõige kaugemale</h3></List.Item>
				<List.Item><h3>- Alale on lubatud üks võistleja abiline</h3></List.Item>
			</List>

			<h2>Kompleks ala 15m</h2>
			<List>
				<List.Item><h3>Igal võistlejal on kompleks ala läbimiseks aega 60 sekundit</h3></List.Item>
				<List.Item><h3>- Kompleks ala raskused selguvad enne võistlust</h3></List.Item>
				<List.Item><h3>- Võidab see, kes käib vahemaa kõige kiiremini. Kui aeg saab otsa, siis võidab see, kes käib raskusega kõige kaugemale</h3></List.Item>
				<List.Item><h3>- Alale on lubatud üks võistleja abiline</h3></List.Item>
			</List>

			<h2>Kivide/Kottide tõstmine</h2>
			<List>
				<List.Item><h3>- Kivide/kottide raskused selguvad võistlusel</h3></List.Item>
				<List.Item><h3>- Võidab see, kes tõstab kive/kotte üle kõrguse kõige rohkem kordi</h3></List.Item>
				<List.Item><h3>- Alale on lubatud üks võistleja abiline</h3></List.Item>
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
	return (<></>)
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

			<div className='content'>
				<CompetitionNavbar infoDisplayed={infoDisplayed} allowRegister setInfoDisplayed={setInfoDisplayed.bind(this)} />
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