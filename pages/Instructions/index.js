import { useState } from "react"
import { Header } from "../../Components/Header"
import styles from '../../styles/Instructions.module.scss'
import Content from "../../Components/Content"


function Instructions() {

    const [lang , setLang] = useState('english')

    const animate = {
        type: "tween",
        damping: 100,
        stiffness: 10
      }

    return (
        <div className={styles.instructionsPage}>
            <Header setLanguage={setLang} lang={lang}/>
            <Content lang={lang}></Content>
        </div>
    )
}

export default Instructions
