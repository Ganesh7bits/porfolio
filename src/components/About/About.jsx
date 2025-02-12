import { getImageUrl } from "../../utils";
import styles from "./about.module.css"

export const About = ()=>{
    return(
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img className={styles.aboutImg} src={getImageUrl("about/aboutImage.png")} alt="About" />
                <ul className={styles.aboutitems}>
                    <li className={styles.aboutitem}><img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
                       <div className={styles.aboutitemText}>
                         <h3>Front end developer</h3>
                         <p>I am front end developer in buildind simple and responsive
                            website to enachace perfomance and visibility
                         </p>
                    </div>
                    </li >
                    <li className={styles.aboutitem}><img src={getImageUrl("about/cursorIcon.png")} alt="ui icon" />
                       <div className={styles.aboutitemText}>
                         <h3>Ui designer</h3>
                         <p>I am ui designer in buildind simple and responsive
                            website to enachace perfomance and visibility
                         </p>
                    </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}