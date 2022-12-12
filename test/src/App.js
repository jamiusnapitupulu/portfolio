// import styles from "./appStyles.module.css"
// import FotoProfil from "./foto/fotoku.png"
// import  skil1 from "./foto/Group 1.png"
// import  skil2 from "./foto/Group 2.png"
// import  skil3 from "./foto/Group 3.png"
// import  skil4 from "./foto/Group 4.png"
// import  skil5 from "./foto/Group 5.png"
// import  skil6 from "./foto/Group 6.png"

import About from "./components/about_page/About";
import Contact from "./components/contact_page/Contact";
import Experience from "./components/experience_page/Experience";
import HeroPage from "./components/hero_page/HeroPage";

// import  ig from "./foto/Group 7.png"
// import  linkedln from "./foto/Group 8.png"
// import  facebook from "./foto/Group 9.png"
// import  gmail from "./foto/Group 10.png"
// import  wa from "./foto/Group 11.png"
// import file from "./resume/CV Jamius Maruli Tua Napitupulu.pdf"



function App() {
  return (
    <div>
      <HeroPage/>
      <About/>
      <Experience/>
      <Contact/>
    </div>
    )
 }

 export default App;
  
    /* // <div>
    //   <div id="Home"className={styles.pageSatu}>
    //     <div className={styles.topnav}>
    //       <div className={styles.toplink}>
    //         <a href="#Home"><b>Home</b></a>
    //         <a href="#About"><b>About</b></a>
    //         <a href="#Experience"><b>Experience</b></a>
    //         <a href="#Contact"><b>Contact</b></a>
    //       </div>
    //     </div>
    //     <div className={styles.awal}>
    //       <span><h1><b>Jamius Maruli Tua Napitupulu</b></h1></span>
    //       <span>
    //         <p><b>I'am Fresh Graduated,</b></p>
    //         <p><b>Bachelor of Electrical and Computer Engineering</b></p>
    //       </span>
    //     </div>
    //     <div className={styles.button}>
    //       <span><a download="Resume_CV Jamius Maruli Tua Napitupulu"href={file}><b>Resume</b></a></span>
    //       <span><a href="#Contact"><b>Contact</b></a></span>
    //     </div>
    //   </div>

    //   <div>
    //     <div id="About" className={styles.pageDua}>
    //       <div className={styles.about}>
    //           <span><p><b>About Me</b></p></span>
    //       </div>
    //       <div className={styles.foto}>
    //         <div className={styles.fot}>
    //           <img className={styles.PP} src={FotoProfil} alt="#"></img>
    //         </div>
    //         <div className={styles.isifot}>
    //           <h3>A Bachelor of Electrical Engineering From Satya Wacana Christian University (SWCU) with an   Spesialist Instrument.</h3>
    //           <ul class="a">
    //             <li>Name : Jamius Maruli Tua Napitupulu</li>
    //             <li>Birthday : 03 Januari 1997</li>
    //             <li>Phone : +62-812-9985-7003</li>
    //             <li>City : Banjarnegara, Indonesia</li>
    //             <li>Degree : Bachelor</li>
    //           </ul>
    //         </div>
    //       </div>
    //       <div className={styles.skill}>
    //         <div className={styles.isiskill}>
    //           <img className={styles.sk1} src={skil1} alt="#"/>
    //           <img className={styles.sk2} src={skil2} alt="#"/>
    //           <img className={styles.sk3} src={skil3} alt="#"/>
    //           <img className={styles.sk4} src={skil4} alt="#"/>
    //           <img className={styles.sk5} src={skil5} alt="#"/>
    //           <img className={styles.sk6} src={skil6} alt="#"/>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <div>
    //   <div id="Experience" className={styles.pageTiga}>
    //       <div className={styles.experience}>
    //         <span><p><b>Experience</b></p></span>
    //       </div>
    //       <div className={styles.isiExp}>
    //         <p>Badminton Interest Talent Committee Faculty of Electrical and Computer Engineering (Head of Badminton Interest Talent) Oct 2017 - Jul 2018</p>
    //         <ul>
    //           <li>Coordinate and monitor badminton activity, 90% of the activity succes in 10</li>
    //           <li>Prepare facility for the activities</li>
    //           <li>Prepare a capital expenditure bugdet</li>
    //         </ul>
    //         <p>Design of Utilization of Kinetic Energy Into Electrical Energy Using Multi Generator on Stairs (Sept 2019 - Dec 2019)</p>
    //         <ul>
    //           <li>Find the source of the tool</li>
    //           <li>Developing of renewable energy system generators to increase efficiency</li>
    //           <li>repair components that are not working</li>
    //           <li>Create reports and data analysis</li>
    //         </ul>
    //         <p>Monitoring SOC and SOH Lithium Polymer Battery (2020)</p>
    //         <ul>
    //           <li>Make a design and wiring diagram of the tool</li>
    //           <li>Make tool according to design</li>
    //           <li>Do a test run of the tool</li>
    //           <li>Make reports and analyze data from the tools that have been made</li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
     
    //   <div> 
    //     <div id="Contact"className={styles.pageEmpat}>
    //       <div className={styles.Contact}>
    //         <p><b>Contact</b></p>
    //       </div>
    //       <div className={styles.Media}>
    //         <div className={styles.isiMedia}>
    //           <a href="https://instagram.com/jamiusnapitupulu?igshid=YmMyMTA2M2Y=" rel="_blank"><img className={styles.instagram} src={ig} alt=""/><b><br></br>jamiusnapitupulu</b></a>
    //           <a href="https://www.linkedin.com/in/jamius-maruli-tua-napitupulu-04817023a" rel="_blank"><img className={styles.link} src={linkedln} alt=""/><b><br></br>Jamius Maruli Tua Napitupulu</b></a>
    //           <a href="https://www.facebook.com/jamius.maruli.1" rel="_blank"><img className={styles.fb} src={facebook} alt=""/><b><br></br>Jamius Maruli T Napitupulu</b></a>
    //         </div>
    //       </div>
    //       <div className={styles.Media2}>
    //         <div className={styles.isiMedia2}>
    //           <a href="mailto:jamiusnapitupulu70@gmail.com" rel="_blank"><img className={styles.mail} src={gmail} alt=""/><b><br></br>jamiusnapitupulu70@gmail.com</b></a>
    //           <a href="https://wa.me/6181299857003" rel="_blank"><img className={styles.chat} src={wa} alt=""/><b><br></br>081299857003</b></a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div> */
 