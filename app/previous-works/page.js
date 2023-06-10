import Image from 'next/image'
import styles from './page.module.scss'
import { Media } from '@/components/media/media'

const data = [
  {
    src: '/images/previous/Astro Fuelle.jpg',
    alt: '',
    quote: `
    Astro Fuelle - 80x80
    `
  }, 
  {
    src: '/images/previous/criatura laberinto.jpg',
    alt: '',
    quote: `
    criatura laberinto - 70x90
    `
  }, 
  {
    src: '/images/previous/Cristal.jpg',
    alt: '',
    quote: `
    Cristal - 50x70
    `
  }, 
  {
    src: '/images/previous/disonancia.jpg',
    alt: '',
    quote: `
    disonancia - 70x90
    `
  }, 
  {
    src: '/images/previous/El Chueco.jpg',
    alt: '',
    quote: `
    El Chueco - 70x90
    `
  }, 
  {
    src: '/images/previous/Mar de Fuego.jpg',
    alt: '',
    quote: `
    Mar de Fuego - 40x80
    `
  }, 
  {
    src: '/images/previous/Plomo.jpg',
    alt: '',
    quote: `
    Plomo - 80x80
    `
  }, 
  {
    src: '/images/previous/Sesiones de Ducha.jpg',
    alt: '',
    quote: `
    Sesiones de Ducha - 50x70
    `
  },
  {
    src: '/images/previous/Vitrales.jpg',
    alt: '',
    quote: `
    Vitrales - 40x80
    `
  },
]

export default function Home() {
  return (
    <main className={"main"}>
      <section className={styles.sectionMain}>
        {data.map((media, index) => <div key={index} className={styles.image}>
          <Media src={media.src} alt={media.alt} quote={media.quote} />
        </div>)}
      </section>
    </main>
  )
}
