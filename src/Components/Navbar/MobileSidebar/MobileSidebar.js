import { Menu, Sidebar, Icon } from 'semantic-ui-react'
import { useNavigate } from "react-router-dom";
import './MobileSidebar.scss'

import FacebookLogo from "../../../imgs/facebook.png"
import InstagramLogo from "../../../imgs/instagram.png"

function MobileSidebar({ sidebar, setSidebar }) {
	const navigate = useNavigate()

	const routeChange = (path) => {
		navigate(path)
	}

	return (
		<Sidebar
			as={Menu}
			animation='overlay'
			vertical
			visible={sidebar}
			direction={"right"}
		>
			<div className='close-x'>
				<Icon name='window close outline' onClick={() => setSidebar(false)} />
			</div>
			<Menu.Item>
				<h2 onClick={() => { routeChange("/klubist"); setSidebar(false) }}>KLUBIST</h2>
			</Menu.Item>
			<Menu.Item>
				<h2 onClick={() => { routeChange("/kontakt"); setSidebar(false) }}>KONTAKT</h2>
			</Menu.Item>
			<Menu.Item>
				<h2 onClick={() => { routeChange("/liikmed"); setSidebar(false) }}>LIIKMED</h2>
			</Menu.Item>
			<Menu.Item>
				<span onClick={() => { routeChange("/voistlused"); setSidebar(false) }}>VÕISTLUSED<span className='alert'> (!!)</span></span>
			</Menu.Item>
			<div className='social-media'>
				<a href='https://www.instagram.com/rammukoobas/' target="_blank" rel="noopener noreferrer">
					<img src={InstagramLogo} alt="insta" />
				</a>
				<a href='https://www.facebook.com/rammukoobas' target="_blank" rel="noopener noreferrer">
					<img src={FacebookLogo} alt="fb" />
				</a>

			</div>
		</Sidebar>
	)
}

export default MobileSidebar