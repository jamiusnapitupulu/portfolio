import styles from "./about.module.css"

import FotoProfil from "./../../foto/fotoku.png"
import  skil1 from "./../../foto/Group 1.png"
import  skil2 from "./../../foto/Group 2.png"
import  skil3 from "./../../foto/Group 3.png"
import  skil4 from "./../../foto/Group 4.png"
import  skil5 from "./../../foto/Group 5.png"
import  skil6 from "./../../foto/Group 6.png"

function About(){
    return(
        <div>
        <div id="About" className={styles.pageDua}>
            <div className={styles.about}>
                <span><p><b>About Me</b></p></span>
            </div>
            <div className={styles.foto}>
                <div className={styles.fot}>
                    <img className={styles.PP} src={FotoProfil} alt="#"></img>
                </div>
                <div className={styles.isifot}>
                    <h3>A Bachelor of Electrical Engineering From Satya Wacana Christian University (SWCU) with an   Spesialist Instrument.</h3>
                    <ul class="a">
                        <li>Name : Jamius Maruli Tua Napitupulu</li>
                        <li>Birthday : 03 Januari 1997</li>
                        <li>Phone : +62-812-9985-7003</li>
                        <li>City : Banjarnegara, Indonesia</li>
                        <li>Degree : Bachelor</li>
                    </ul>
                </div>
            </div>
            <div className={styles.skill}>
                <div className={styles.isiskill}>
                    <img className={styles.sk1} src={skil1} alt="#"/>
                    <img className={styles.sk2} src={skil2} alt="#"/>
                    <img className={styles.sk3} src={skil3} alt="#"/>
                    <img className={styles.sk4} src={skil4} alt="#"/>
                    <img className={styles.sk5} src={skil5} alt="#"/>
                    <img className={styles.sk6} src={skil6} alt="#"/>
                </div>
            </div>
        </div>
    </div>
    )
}
export default About;