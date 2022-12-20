import styles from "./about.module.css"

import FotoProfil from "./../../foto/fotoku.png"
import  skil1 from "./../../foto/Group1.png"
import  skil2 from "./../../foto/Group2.png"
import  skil3 from "./../../foto/Group3.png"
import  skil4 from "./../../foto/Group4.png"
import  skil5 from "./../../foto/Group5.png"
import  skil6 from "./../../foto/Group6.png"

function About(){
    return(
        <div id="About" className={styles.pageDua}>
            <div className={styles.about}>
                <span>About Me</span>
            </div>
            <div className={styles.foto}>
                <div className={styles.fot}>
                    <img className={styles.PP} src={FotoProfil} alt="#"></img>
                </div>
                <div className={styles.isifot}>
                    <span>A Bachelor of Electrical Engineering From Satya Wacana Christian University (SWCU) with an Spesialist Instrument.</span>
                    <ul class="a">
                        <li>Name : Jamius Maruli Tua Napitupulu</li>
                        <li>Birthday : 03 Januari 1997</li>
                        <li>Phone : +62-812-9985-7003</li>
                        <li>City : Banjarnegara, Indonesia</li>
                        <li>Degree : Bachelor</li>
                    </ul>
                </div>
            </div>

            <div className={styles.skil}>
                <div className={styles.skill}>
                    <img src={skil1} alt="#"/>
                    <p>Digital/Analog Electrical</p>
                </div>
                <div className={styles.skill}>
                    <img src={skil2} alt="#"/>
                    <p>Electrical Wiring</p>
                </div>
                <div className={styles.skill}>
                    <img src={skil3} alt="#"/>
                    <p>PCB Design</p>
                </div>
            </div>
            <div className={styles.skills}>
                <div className={styles.skill2}>
                    <img src={skil4} alt="#"/>
                    <p>Microcontroller</p>
                </div>
                <div className={styles.skill2}>
                    <img src={skil5} alt="#"/>
                    <p>PLC</p>
                </div>
                <div className={styles.skill2}>
                    <img src={skil6} alt="#"/>
                    <p>C++</p>
                </div>
            </div>
        </div>
    )
}
export default About;