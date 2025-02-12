
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";


export const Hero =() =>{
    return(
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi I am Ganesh</h1>
                <p className={styles.description}>I am Front End Developer</p>
                <a className={styles.contactBtn} href="mailto:ganeshacharya1222@gmail.com">Mail <p>Me at this</p></a>
            </div>
            <img className={styles.heroImg} src={getImageUrl("hero/heroImage.png")} alt="Hero" />
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>

        </section>
    )
}