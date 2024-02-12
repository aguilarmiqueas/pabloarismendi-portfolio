import Image from 'next/image'
import styles from './page.module.scss'
import { Media } from '@/components/media/media'

const data = [
  {
    src: '/images/simultaneo/1.jpg',
    alt: '',
    quote: `
    SM01 “Visión de un mundo que termina” (vision of a world that ends”)

    60x80cm. acrylics on canvas.
    `
  }, 
  {
    src: '/images/simultaneo/2.jpg',
    alt: '',
    quote: `
    SM02 “Sendero en tensión” (path in-tension)
    60x80cm. Acrylics on canvas.
    `
  }, 
    {
    src: '/images/simultaneo/3.jpg',
    alt: '',
    quote: `
    SM03 “Pasillo/averno” (hallway/underworld)
    60x80cm. Acrylics on canvas.

    `
  }, 
    {
    src: '/images/simultaneo/4.jpg',
    alt: '',
    quote: `
    SM04 “profundidad demencial de una mente aturdida” (mental depth of a troubled mind)
    60x80cm. Acrylics on canvas.
    `
  }, 
  {
    src: '/images/simultaneo/5.jpg',
    alt: '',
    quote: `
    SM05 “El Péndulo” ("the pendulum”) 
    70x130cm. acrylics on canvas.
    `
  }, 
  {
    src: '/images/simultaneo/6.jpg',
    alt: '',
    quote: `
    SM06 “Cyberpunk Christ” 60x80cm. acrylics on canvas.
    `
  }, 
]

export default function Home() {
  return (
    <main className={"main"}>
      <section className={styles.sectionMain}>
        <div className={"wrapper"}>
        <div className={styles.titleWrap}>
        <h1 className={styles.title}>SIMULTÁNEO series - Inversion by superposition</h1>
        </div>

        <p className={styles.paragraph}>
          I&apos;m looking for the balance between the complexness and deepness but keeping the aesthetic visuals simple and easy to digest. actively in search of contrasts and textures embedded into the composition forming a single thing. The artwork can be splitted into 3 blocks (A and B side + the root structure or matrix, which is the base guideline and link that holds everything together). This is accomplished by a creative process which I call “inversion by superposition”
        </p>
        </div>

        {data.reverse().map((media, index) => <div key={index} className={styles.image}>
          <Media src={media.src} alt={media.alt} quote={media.quote} />
        </div>)}
      </section>
    </main>
  )
}
