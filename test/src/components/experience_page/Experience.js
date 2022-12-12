import styles from "./experience.module.css"

function Experience(){
    return(
        <div>
            <div id="Experience" className={styles.pageTiga}>
                <div className={styles.experience}>
                    <span><p>Experience</p></span>
                </div>
                <div className={styles.isiExp}>
                    <p>Badminton Interest Talent Committee Faculty of Electrical and Computer Engineering (Head of Badminton Interest Talent) Oct 2017 - Jul 2018</p>
                    <ul>
                        <li>Coordinate and monitor badminton activity, 90% of the activity succes in 10</li>
                        <li>Prepare facility for the activities</li>
                        <li>Prepare a capital expenditure bugdet</li>
                    </ul>
                    <p>Design of Utilization of Kinetic Energy Into Electrical Energy Using Multi Generator on Stairs (Sept 2019 - Dec 2019)</p>
                    <ul>
                        <li>Find the source of the tool</li>
                        <li>Developing of renewable energy system generators to increase efficiency</li>
                        <li>repair components that are not working</li>
                        <li>Create reports and data analysis</li>
                    </ul>
                    <p>Monitoring SOC and SOH Lithium Polymer Battery (2020)</p>
                    <ul>
                        <li>Make a design and wiring diagram of the tool</li>
                        <li>Make tool according to design</li>
                        <li>Do a test run of the tool</li>
                        <li>Make reports and analyze data from the tools that have been made</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Experience;