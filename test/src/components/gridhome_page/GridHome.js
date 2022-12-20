import styles from "./gridHome.module.css"
import file from "./../../resume/CV Jamius Maruli Tua Napitupulu.pdf"

function GridHome(){
    return(
        <div className={styles.pageContainer}>
            <div className={styles.topnav}>
                <a href="#Home">Home</a>
                <a href="#About">About</a>
                <a href="#Experience">Experience</a>
                <a href="#Contact">Contact</a>
            </div>
            <div className={styles.content}>
                <p>Jamius Maruli Tua Napitupulu</p>
                <p>I'am Fresh Graduated,</p>
                <p>Bachelor of Electrical and Computer Engineering</p>
                <a href={file} download="Resume_CV Jamius Maruli Tua Napitupulu" >Resume</a>
                <a href="#Contact">Contact</a>
            </div>
        </div>
        // <div id="Home"className={styles.pageSatu}>
        //     <div className={styles.topnav}>
        //         <div className={styles.toplink}>
        //             <a href="#Home">Home</a>
        //             <a href="#About">About</a>
        //             <a href="#Experience">Experience</a>
        //             <a href="#Contact">Contact</a>
        //         </div>
        //     </div>
        //     <div className={styles.awal}>
        //         <span>Jamius Maruli Tua Napitupulu</span>
        //         <p>I'am Fresh Graduated,</p>
        //         <p>Bachelor of Electrical and Computer Engineering</p>
        //     </div>
        //     <div className={styles.button}>
        //         <div className={styles.butt}>
        //             <span><a button onclick download="Resume_CV Jamius Maruli Tua Napitupulu"href{file}><b>Resume</b></a></span>
        //             <span><a href="#Contact"><b>Contact</b></a></span>
        //         </div>
        //     </div>
        // </div>
    )
}
export default GridHome;