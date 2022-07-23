import React, { useEffect, useState } from 'react'
import { Form, List, Button } from 'semantic-ui-react'
import emailjs from "emailjs-com"

import '../../../Competitions/Competitions.scss'

import CompetitionNavbar from '../../CompetitionNavbar'
import OverlayMessage from '../../../OverlayMessage/OverlayMessage'

function Info() {
    return (
        <div className='info-div text-center'>
            <h3>Toimuvad Eesti meistrivõistlused palgi surumises</h3>
            <h3>Võistlus toimub Toila Sadamas 27. augustil (27.08.2022)</h3>

            <h3>13.00 alustavad noored ja naised</h3>

            <h3>14.00 alustavad mehed</h3>

            <h3>15.45 autasustamine</h3>

            <h2>VÕISTLUSKLASSID:</h2>
            <List>
                <List.Item>Noored mehed (alla 20 aasta)</List.Item>
                <List.Item>Naiste vabaklass</List.Item>
                <List.Item>Mehed U105 (alla 105kg)</List.Item>
                <List.Item>Masters mehed (üle 40 aasta)</List.Item>
                <List.Item>Meeste vaba klass</List.Item>
            </List>
        </div>
    )
}

function Rules() {
    return (
        <div className='info-div'>
            <h2>ÜLDREEGILD JA FORMAAT:</h2>
            <List>
                <List.Item><h3>- Enne võistlust tutvustab kohtunik ala eripära ja võistlusreegleid kõigile võistlejatele.</h3></List.Item>
                <List.Item><h3>- Lubatud on kasutada tõstevööd, randmesidemed ja põlvesidemeid, tõste jalanõusid, palgi särke jne. Lubatud ei ole mehaaniliselt sooritust parandavad atribuudid.</h3></List.Item>
                <List.Item><h3>- Talgi, kriidi, magneesiumi vms aine kasutamine on lubatud kehal ja riietel. Lubatud ei ole liimuvad vahendid.</h3></List.Item>
                <List.Item><h3>- Võistleja riietus - lubatud on võistlustrikoo, lühikesed püksid. Võistlustel peab kandma korraldaja poolt ette antud särki kui ei ole juhendatud teisiti.</h3></List.Item>
                <List.Item><h3>- Korraldaja võib reegleid muuta vastavalt vajadusele!</h3></List.Item>
            </List>

            <h2>PALGI EESTI MEISTRIVÕISTLUSE REEGLID:</h2>
            <List>
                <List.Item><h3>- Igal võistlejal on kolm katset</h3></List.Item>
                <List.Item><h3>- Võistleja peab algraskuse teatama sekretärile 10 minutit enne ala algust</h3></List.Item>
                <List.Item><h3>- Iga järgnev raskus on vaja sekretärile öelda järgmise võistleja katse jooksul</h3></List.Item>
                <List.Item><h3>- Võistlusalal on lubatud üks võistleja abiline.</h3></List.Item>
                <List.Item><h3>- Võistlejate viigi korral võidab see, kelle kehakaal on väiksem.</h3></List.Item>
                <List.Item><h3>- Eesti rekordkatseks saab võistleja lisakatsena neljanda (4) katse.</h3></List.Item>
            </List>
        </div>
    )
}

function submitRegistration(e, setFormError, setSent, setErrorSending) {
    e.preventDefault()
    const sisu = Object.fromEntries(new FormData(e.target))
    for (let el of Object.keys(sisu)) {
        if (sisu[el] === "") {
            setFormError(true)
            return
        }
    }
    emailjs.send("service_m8bfg0v", "template_kxx7969", sisu, "DaGgmdahXul6skGgf")
        .then(response => {
            setSent(true)
            document.getElementById("reagmise-vorm").reset();
            console.log("E-kiri saadetud: ", response)
        })
        .catch(error => {
            setSent(true)
            setErrorSending(true)
            console.log("VIGA", error)
        })
}

function Register({ formError, setFormError }) {

    const [sent, setSent] = useState(false)
    const [errorSending, setErrorSending] = useState(false)

    return (
        <div className='info-div'>
            <h2>Registreerumiseks palume täita järgneva avalduse:</h2>
            <Form id='reagmise-vorm' onSubmit={(e) => submitRegistration(e, setFormError, setSent, setErrorSending.bind(this))}>
                <Form.Field>
                    <label>1. Ees- ja perekonnanimi</label>
                    <input name="nimi" placeholder='Ees- ja perekonnanimi' />
                </Form.Field>
                <Form.Field>
                    <label>2. Vanus</label>
                    <input name="vanus" placeholder='Vanus' />
                </Form.Field>
                <Form.Field>
                    <label>3. Sugu</label>
                    <input name="sugu" placeholder='Sugu' />
                </Form.Field>
                <Form.Field>
                    <label>4. Pikkus</label>
                    <input name="pikkus" placeholder='Pikkus (cm)' />
                </Form.Field>
                <Form.Field>
                    <label>5. Kaal</label>
                    <input name="kaal" placeholder='Kaal (kg)' />
                </Form.Field>
                <Form.Field>
                    <label>6. Võistlusklass</label>
                    <input name="voistlusklass" placeholder='Võistlusklass' />
                </Form.Field>
                <Form.Field>
                    <label>7. Klubi, mida sportlane esindab</label>
                    <input name="klubi" placeholder='Klubi' />
                </Form.Field>
                <Form.Field>
                    <label>8. Linn, mida sportlane esindab</label>
                    <input name="linn" placeholder='Linn' />
                </Form.Field>
                <Form.Field>
                    <label>9. Telefoni number</label>
                    <input name="telefon" placeholder='nt 55565565' />
                </Form.Field>
                <Form.Field>
                    <label>10. E-posti aadress</label>
                    <input name="email" placeholder='nt ats.ploom@gmail.com' />
                </Form.Field>
                <Form.Field>
                    <label>11. T-Särgi suurus</label>
                    <input name="sargi_suurus" placeholder='nt XS, M, L, XXL jne' />
                </Form.Field>
                {formError &&
                    <h4 style={{ "color": "maroon" }}>*Mingi sisend on jäänud sul täitmata! Palun kontrolli üle ja proovi uuesti registreerida.</h4>
                }
                <Button className='button' type='submit'>REGISTREERI</Button>
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
                <List.Item><h3>Linn, mida sportlane esindab</h3></List.Item>
                <List.Item><h3>Telefoni number</h3></List.Item>
                <List.Item><h3>E-posti aadress</h3></List.Item>
                <List.Item><h3>T-särgi suurus</h3></List.Item>
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
        <div className='live'>
            <iframe title="otseülekanne" src="" width="640" height="360" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
        </div>
    )
}


function EestiMeisterPalk27082022(props) {

    const [infoDisplayed, setInfoDisplayed] = useState("info")

    const [formError, setFormError] = useState(false)

    useEffect(() => {
        props.infoDisplayed ? setInfoDisplayed(props.infoDisplayed) : setInfoDisplayed("info")
    }, [props.infoDisplayed])


    return (
        <section className='competition'>
            <h1>Eesti meistrivõistlused palgi surumises 2022</h1>

            <div className='content'>
                <CompetitionNavbar infoDisplayed={infoDisplayed} setInfoDisplayed={setInfoDisplayed.bind(this)} allowRegister={true} />
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

export default EestiMeisterPalk27082022