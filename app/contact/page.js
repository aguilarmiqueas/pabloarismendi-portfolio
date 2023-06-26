import styles from './page.module.scss'

export default function Contact() {
  return (
    <main>
        <section className={styles.contact}>
        <div className="wrapper">
            <div className={styles.inner}>
                <a href="https://www.instagram.com/arismendirabe/" target="_blank">Instagram</a>
                <a href="https://www.linkedin.com/in/pablo-arismendi-rabe-/" target="_blank">LinkedIn</a>
                <a href="https://www.artstation.com/pabloarismendirabe" target="_blank">ArtStation</a>
                <a href="https://vimeo.com/user57896108" target="_blank">Vimeo</a>
            </div>
        </div>
        </section>
    </main>
  )
}
