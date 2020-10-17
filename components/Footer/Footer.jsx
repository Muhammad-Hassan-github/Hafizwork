import React from 'react'
import widget from '../../assets/footer/calendar_widget.png'
import styles from './Footer.module.css'
import {Fade} from 'react-reveal'

export const Footer = () => {
    return (
        <div className={styles.container}>
            <p>What is the opportunity do you see?</p>
            <button>Discuss an Idea</button>
            <Fade bottom>
            <img src={widget} alt="widget" />
            </Fade>
        </div>
    )
}
