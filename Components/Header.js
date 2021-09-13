import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/header.module.scss'
import HomeImg from '../public/Images/static/homebtn.png'

export const Header = ({lang , setLanguage}) => {

	const [openMenu, setOpenMenu] = useState(false)

	const activeLangStyles = {
		backgroundColor: 'white',
    	color: 'black'
	}

	
	const activeMenuStyles = {
		left : "0"
	}

    return (
		<>
		<svg xmlns="http://www.w3.org/2000/svg"  onClick={() => setOpenMenu(true)}   className={openMenu ? styles.hideMenuSvg : styles.showMenuSvg}  width="40" height="40" viewBox="0 0 24 24" strokeWidth="2.5" stroke="#000" fill="none" strokeLinecap="round" strokeLinejoin="round">
				<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
				<line x1="4" y1="6" x2="20" y2="6" />
				<line x1="4" y1="12" x2="20" y2="12" />
				<line x1="4" y1="18" x2="20" y2="18" />
			</svg>
			<svg xmlns="http://www.w3.org/2000/svg" onClick={() => setOpenMenu(false)}  className={openMenu ? styles.showCloseSvg : styles.hideCloseSvg}  width="40" height="40" viewBox="0 0 24 24" strokeWidth="2.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
				<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
				<line x1="18" y1="6" x2="6" y2="18" />
				<line x1="6" y1="6" x2="18" y2="18" />
			</svg>
        <div className={styles.header} style={openMenu ? activeMenuStyles : null }>
			<Link href="/" >
                <div className={styles.HomeBtn}>
					<img src='/Images/Static/homebtn.png' alt="" className={styles.Homeimg} />
                </div>
			</Link>
			<div className={styles.langControls}>
				<Link href="/" >
					<div className={styles.homeLink}>Home</div>
				</Link>
				<div className={styles.langBtn} onClick={() => setLanguage('english')} style={lang === 'english' ? activeLangStyles : null}>
					English
				</div>
				<div className={styles.langBtn}  onClick={() => setLanguage('sinhala')} style={lang === 'sinhala' ? activeLangStyles : null}>
					Sinhala
				</div>
				<div className={styles.langBtn}  onClick={() => setLanguage('tamil')} style={lang === 'tamil' ? activeLangStyles : null}>
					Tamil
				</div>
			</div>
		</div>
		</>
    )
}
