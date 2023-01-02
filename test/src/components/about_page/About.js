import styles from "./about.module.css"

import FotoProfil from "./../../foto/fotoku.png"
import  skil1 from "./../../foto/grupSkill1.png"
import  skil2 from "./../../foto/grupSkill2.png"
import  skil3 from "./../../foto/grupSkill3.png"
import  skil4 from "./../../foto/grupSkill4.png"
import  skil5 from "./../../foto/grupSkill5.png"
import  skil6 from "./../../foto/grupSkill6.png"

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
                    <table>
                        <tr>
                            <td>Name</td>
                            <td>:</td>
                            <td>Jamius Maruli Tua Napitupulu</td>
                        </tr>
                        <tr>
                            <td>Birthday</td>
                            <td>:</td>
                            <td>03 Januari 1997</td>
                        </tr>
                        <tr>
                            <td>Phone</td>
                            <td>:</td>
                            <td>081299857003</td>
                        </tr>
                        <tr>
                            <td>City</td>
                            <td>:</td>
                            <td>Banjarnegara, Indonesia</td>
                        </tr>
                        <tr>
                            <td>Degree</td>
                            <td>:</td>
                            <td>Bachelor</td>
                        </tr>
                    </table>
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