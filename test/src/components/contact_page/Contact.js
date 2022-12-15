import styles from"./contact.module.css"

import  ig from "./../../foto/instagram1.png"
import  linkedln from "./../../foto/linkedin1.png"
import  facebook from "./../../foto/facebook2.png"
import  gmail from "./../../foto/gmail.png"
import  wa from "./../../foto/whatsapp.png"

function Contact(){
    return(
        <div> 
            <div id="Contact"className={styles.pageEmpat}>
                <div className={styles.Contact}>
                    <p>Contact</p>
                </div>
                <div className={styles.Media}>
                    <div className={styles.isiMedia}>
                        <a href="https://instagram.com/jamiusnapitupulu?igshid=YmMyMTA2M2Y=" rel="_blank"><img className={styles.instagram} src={ig} alt=""/><span>jamiusnapitupulu</span></a>
                    </div>
                    <div className={styles.isiMedia}>
                        <a href="https://www.linkedin.com/in/jamius-maruli-tua-napitupulu-04817023a" rel="_blank"><img className={styles.link} src={linkedln} alt=""/><span>Jamius Maruli Tua Napitupulu</span></a>
                    </div>
                    <div className={styles.isiMedia}>
                        <a href="https://www.facebook.com/jamius.maruli.1" rel="_blank"><img className={styles.fb} src={facebook} alt=""/><span>Jamius Maruli T Napitupulu</span></a>
                    </div>
                </div>

                <div className={styles.Media2}>
                    <div className={styles.isiMedia2}>
                        <a href="mailto:jamiusnapitupulu70@gmail.com" rel="_blank"><img className={styles.mail} src={gmail} alt=""/><span>jamiusnapitupulu70@gmail.com</span></a>
                    </div>
                    <div className={styles.isiMedia2}>
                        <a href="https://wa.me/6181299857003" rel="_blank"><img className={styles.chat} src={wa} alt=""/><span>081299857003</span></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact;