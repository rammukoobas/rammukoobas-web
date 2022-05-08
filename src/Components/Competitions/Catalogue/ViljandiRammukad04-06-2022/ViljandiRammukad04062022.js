import React, { useState } from 'react'
import emailjs from "emailjs-com"

import '../../../Competitions/Competitions.scss'

import FacebookLogo from '../../../../imgs/facebook.png'

import CompetitionNavbar from '../../CompetitionNavbar'

import Skarcon from './Sponsorid/skarcon.jpg'
import Alecoq from './Sponsorid/alecoq.png'
import AntsViljandi from './Sponsorid/ants_viljandi.jpg'
import Kleebikum from './Sponsorid/kleebikum.jpg'
import MulgiKontsert from './Sponsorid/mulgi_kontsert.jpg'
import PaintedByKiilakas from './Sponsorid/painted-by-kiilakas-logo.png'
import TartekPlus from './Sponsorid/Tartekplus-logo_01.png'
import ViljandiHansapaevad from './Sponsorid/viljandi_hansapäevad.png'
import Rammukoobas from '../../../../imgs/Rammukoobas.png'
import Kultuurikapital from './Sponsorid//kultuurikapital.png'
import Sakala from './Sponsorid/sakala.png'
import ViljandiLinn from './Sponsorid/viljandi_linn.png'
import IPharma from './Sponsorid/iPharma.png'
import LihaSobrad from './Sponsorid/lihasobrad.png'
import { Form, List, Button } from 'semantic-ui-react'
import OverlayMessage from '../../../OverlayMessage/OverlayMessage'

function Info() {
  return (
    <div className='info-div'>
      <h3>Peale pikka pausi toimub Viljandi hansapäevade raames jälle suurejooneline rammumeeste ja rammunaiste võistlus. </h3>
      <h3>Võistlus toimub Viljandi lauluväljakul 4. juunil 2022 (04.06.2022)</h3>
      <h2>VÕISTLUSALAD:</h2>
      <List>
        <List.Item>Hõberaha jõutõmme (eraldi Eesti meistrivõistluste arvestus)</List.Item>
        <List.Item>Raskuskoti kõrgusvise</List.Item>
        <List.Item>Rekka tõmbamine</List.Item>
        <List.Item>Palgi surumine</List.Item>
        <List.Item>Kompleksala</List.Item>
      </List>
      <h4>NB! MTÜ Rammuklubi jätab õiguse muuta alasid ja alade raskuseid vastavalt võistluste formaadile ja võimalustele. Alade ja raskuste valimisel on tähtis võistlejate ohutus ja tervis.</h4>
      <h2>Võistlus toimub neljas alagrupis:</h2>
      <List>
        <List.Item>Noored (alla 20 aastased)</List.Item>
        <List.Item>Naised (Vaba klass)</List.Item>
        <List.Item>Mehed (alla 105kg)</List.Item>
        <List.Item>Mehed (Vaba klass)</List.Item>
      </List>

      <h3>Alustame juba hommikul kell 11 naiste ja noorte alagruppidega ja esimeseks alaks vaatemänguline hõberaha jõutõmme.</h3>

      <h3>Eesti tugevaimad mehed hakkavad rammu katsuma kell 15.00. Esimese ala suurejoonelisust näitab see, et kaks maailma parimat jõutõmbajat, Rauno Heinla ja Asko Karu, tulevad maailmarekordit tegema hõberaha jõutõmbes!</h3>

      <h3 className='inline'>Vahepalaks pakub silmailu tantsutrupp: </h3> <a href="https://www.facebook.com/SStuudio" target="_blank" rel="noopener noreferrer" >https://www.facebook.com/SStuudio</a>

      <h3>NB! Kohapeal toimub pealtvaatajate vahel võistlus, kes jõuab suurima raskuse maast tõsta hoides kinni pöörlevast käepidemest!</h3>
    </div>
  )
}

function Rules() {
  return (
    <div className='info-div'>
      <h2>ÜLDREEGILD JA FORMAAT:</h2>
      <List>
        <List.Item><h3>- Lubatud on kasutada tõstevööd, randmesidemed ja põlvetoed, tõste jalanõusid, trikoosid, palgi särke jne. Lubatud ei ole mehaaniliselt sooritust parandavad atribuudid.</h3></List.Item>
        <List.Item><h3>- Talgi, kriidi, magneesiumi vms aine kasutamine on lubatud kehal ja riietel. Lubatud ei ole liimuvad vahendid hõidmissoorituse parandamiseks.</h3></List.Item>
        <List.Item><h3>- Võistleja riietus - lubatud on võistlustrikoo, lühikesed püksid. Võistlustel peab kandma korraldaja poolt ette antud särki kui ei ole juhendatud teisiti.</h3></List.Item>
        <List.Item><h3>- Enne igat võistlusala tutvustab kohtunik ala eripära ja võistlusreegleid kõigile grupi võistlejatele.</h3></List.Item>
      </List>

      <h2>VÕISTLUSALADE REEGILD:</h2>
      <h2>Hõberaha jõutõmme</h2>
      <List>
        <List.Item><h3>- Igal võistlejal on kolm katset</h3></List.Item>
        <List.Item><h3>- Võistleja peab algraskuse teatama sekretärile 10 minutit enne ala algust</h3></List.Item>
        <List.Item><h3>- Iga järgnev raskus on vaja sekretärile öelda järgmise võistleja katse jooksul</h3></List.Item>
        <List.Item><h3>- Jõutõmbetrikoo on lubatud</h3></List.Item>
        <List.Item><h3>- Tõmbel peavad käed hoidma kangist kinni põlvedest väljastpoolt.</h3></List.Item>
        <List.Item><h3>- Tõmbe Alal on lubatud üks võistleja abiline</h3></List.Item>
      </List>

      <h2>Raskuskoti kõrgusvise</h2>
      <List>
        <List.Item><h3>- Igal võistlejal on aega 90 sekundit, et saada kõik raskuskotid üle viskeraami</h3></List.Item>
        <List.Item><h3>- Iga koti aeg läheb kinni siis kui ta maandub teisele poole viskeraami.</h3></List.Item>
        <List.Item><h3>- Võistleja peab jääma samale raami poolele kust toimus vise.</h3></List.Item>
        <List.Item><h3>- Raami kõrgus selgub võistluspaigal</h3></List.Item>
        <List.Item><h3>- Viskekottide raskus ja kogus selgub võistluspaigal</h3></List.Item>
      </List>

      <h2>Rekka tõmbamine</h2>
      <List>
        <List.Item><h3>- Rekka raskused selguvad võistluspaigas</h3></List.Item>
        <List.Item><h3>- Rekka tõmbamise detailsed juhendid antakse 10 minutit enne ala algust</h3></List.Item>
        <List.Item><h3>- Tõmbamisel võib kanda mägi ronimissusse</h3></List.Item>
      </List>

      <h2>Palgi tõstmine</h2>
      <List>
        <List.Item><h3>- Noored ja naised tõstavad 50kg naiste palki, 70kg meeste palki või 90kg meeste palki korduste peale. </h3></List.Item>
        <List.Item><h3>- Mehed alla 105kg ja avatud klassis tõstavad meeste palki raskusega 100kg, 120kg või 140kg.</h3></List.Item>
        <List.Item><h3>- Üks kordus suurema raskusega on parem kui ükskõik mitu kordust väiksema raskusega.</h3></List.Item>
        <List.Item><h3>- Võidab see, kes teeb rohkem kordusi suurema raskusega.</h3></List.Item>
      </List>

      <h2>Kompleks ala</h2>
      <List>
        <List.Item><h3>- Kompleks ala elemendid ja reeglid teavitatakse võistluste ajal.</h3></List.Item>
        <List.Item><h3>- Võidab see, kes läbib distantsi kandes erinevaid elemente kõige kiiremini.</h3></List.Item>
      </List>

      <h2>Pealtvaatajate võistlus</h2>
      <List>
        <List.Item><h3>- Igal soovijal on nii palju katseid kui ta ebaõnnestub.</h3></List.Item>
        <List.Item><h3>- Pöörleva käepidemega raskust tuleb üles tõsta ühe käega.</h3></List.Item>
        <List.Item><h3>- Võidab see kes tõstab kõige raskema raskuse üles.</h3></List.Item>
        <List.Item><h3>- Autasustamine top 3 meest ja top 3 naist. </h3></List.Item>
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
  emailjs.send("service_m8bfg0v", "template_kpvhezr", sisu, "DaGgmdahXul6skGgf")
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
      <h3>NB! Tegemist on MTÜ Rammuklubi võistlusega ja eelregistreerimisega osavõtumaksu ei ole. Kuni 25.05.2022 kuupäevani saab eelregistreerida osalejaks mailiaadressil rammumeesrammunaine@gmail.com . Peale 25.05.2022 kuupäeva on osavõtumaks 50€ ühe osaleja kohta.</h3>
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
          <label>3. Pikkus</label>
          <input name="pikkus" placeholder='Pikkus (cm)' />
        </Form.Field>
        <Form.Field>
          <label>4. Kaal</label>
          <input name="kaal" placeholder='Kaal (kg)' />
        </Form.Field>
        <Form.Field>
          <label>5. Võistlusklass</label>
          <input name="voistlusklass" placeholder='Võistlusklass' />
        </Form.Field>
        <Form.Field>
          <label>6. Klubi, mida sportlane esindab</label>
          <input name="klubi" placeholder='Klubi' />
        </Form.Field>
        <Form.Field>
          <label>7. Linn, mida sportlane esindab</label>
          <input name="linn" placeholder='Linn' />
        </Form.Field>
        <Form.Field>
          <label>8. Telefoni number</label>
          <input name="telefon" placeholder='nt 55565565' />
        </Form.Field>
        <Form.Field>
          <label>9. E-posti aadress</label>
          <input name="email" placeholder='nt ats.ploom@gmail.com' />
        </Form.Field>
        <Form.Field>
          <label>10. T-Särgi suurus</label>
          <input name="sargi_suurus" placeholder='nt XS, M, L, XXL jne' />
        </Form.Field>
        <Form.Field>
          <label>11. Lemmiktoit</label>
          <input name="lemmiktoit" placeholder='Lemmiktoit' />
        </Form.Field>
        <Form.Field>
          <label>12. Lemmikvärv</label>
          <input name="lemmikvarv" placeholder='Lemmikvärv' />
        </Form.Field>
        <Form.Field>
          <label>13. Sünnikoht</label>
          <input name="sunnikoht" placeholder='Sünnikoht' />
        </Form.Field>
        <Form.Field>
          <label>14. Lemmik jõu- või rammuala</label>
          <input name="lemmikala" placeholder='Lemmik jõu- või rammuala' />
        </Form.Field>
        <Form.Field>
          <label>15. Palju rinnalt surud?</label>
          <input name="rinnalt" placeholder='Raskus' />
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
        <List.Item><h3>Pikkus</h3></List.Item>
        <List.Item><h3>Kaal</h3></List.Item>
        <List.Item><h3>Võistlusklass</h3></List.Item>
        <List.Item><h3>Klubi, mida sportlane esindab</h3></List.Item>
        <List.Item><h3>Linn, mida sportlane esindab</h3></List.Item>
        <List.Item><h3>Telefoni number</h3></List.Item>
        <List.Item><h3>E-posti aadress</h3></List.Item>
        <List.Item><h3>T-särgi suurus</h3></List.Item>
        <List.Item><h3>Lemmiktoit</h3></List.Item>
        <List.Item><h3>Lemmikvärv</h3></List.Item>
        <List.Item><h3>Sünnikoht</h3></List.Item>
        <List.Item><h3>Lemmik jõu- või rammuala</h3></List.Item>
        <List.Item><h3>Palju rinnalt surud?</h3></List.Item>
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

function ViljandiRammukad04062022() {

  const [infoDisplayed, setInfoDisplayed] = useState("info")

  const [formError, setFormError] = useState(false)
  return (
    <section className='competition'>
      <h1>Viljandi Rammumees ja Rammunaine 2022</h1>
      <div className='social-media-event' onClick={() => { window.open("https://www.facebook.com/events/1306534829867736") }}>
        <h3>Facebook event: </h3><img src={FacebookLogo} alt='facebook-logo' />
      </div>

      <div className='content'>
        <CompetitionNavbar infoDisplayed={infoDisplayed} setInfoDisplayed={setInfoDisplayed.bind(this)} />
        {infoDisplayed === "info" &&
          <Info />
        }
        {infoDisplayed === "rules" &&
          <Rules />
        }
        {infoDisplayed === "register" &&
          <Register formError={formError} setFormError={setFormError.bind(this)} />
        }
      </div>


      <div className='sponsors'>
        <h2>VÕISTLUST TOETAVAD:</h2>
        <div className='sponsor-list'>
          <div className='sponsor'>
            <img src={Skarcon} alt="sponsor" />
          </div>
          <div className='sponsor'>
            <img src={Rammukoobas} alt="sponsor" />
          </div>
          <div className='sponsor'>
            <img src={PaintedByKiilakas} alt="sponsor" />
          </div>
          <div className='sponsor'>
            <img src={ViljandiHansapaevad} alt="sponsor" />
          </div>
          <div className='sponsor'>
            <img src={Alecoq} alt="sponsor" />
          </div>
          <div className='sponsor'>
            <img src={AntsViljandi} alt="sponsor" />
          </div>
          <div className='sponsor'>
            <img src={Kleebikum} alt="sponsor" />
          </div>
          <div className='sponsor'>
            <img src={MulgiKontsert} alt="sponsor" />
          </div>
          <div className='sponsor'>
            <img src={TartekPlus} alt="sponsor" />
          </div>
          <div className='sponsor'>
            <img src={Kultuurikapital} alt="sponsor" />
          </div>
          <div className='sponsor'>
            <img src={ViljandiLinn} alt="sponsor" />
          </div>
          <div className='sponsor'>
            <img src={Sakala} alt="sponsor" />
          </div>
          <div className='sponsor'>
            <img src={IPharma} alt="sponsor" />
          </div>
          <div className='sponsor'>
            <img src={LihaSobrad} alt="sponsor" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ViljandiRammukad04062022