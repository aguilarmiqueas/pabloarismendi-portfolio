import styles from "./socials.module.scss"
import Link from "next/link"
export const Socials = () => {
    return (<div className={styles.socials}>
        <ul>
                <a href="https://www.instagram.com/arismendirabe/" target="_blank">
                    <img src="/icons/instagram.svg" alt=""></img>
                </a>
                <a href="https://www.linkedin.com/in/pablo-arismendi-rabe-/" target="_blank">
                                        <img src="/icons/linkedin.svg" alt=""></img>
                </a>
                <a href="https://www.artstation.com/pabloarismendirabe" target="_blank">
                    <img src="/icons/artstation.svg" alt=""></img>
                </a>
                <a href="https://vimeo.com/user57896108" target="_blank">
                    <img src="/icons/vimeo.svg" alt=""></img>
                </a>
        </ul>
    </div>)
}