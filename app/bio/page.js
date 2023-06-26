import Image from 'next/image'
import styles from './page.module.scss'
import { Media } from '@/components/media/media';

const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.png', '10.png'];

export default function Bio() {
  return (
    <main>
        <section className={styles.bio}>
        <div className="wrapper">
            <div className={styles.image}>
                <Media src="/images/bio/bio_portada.jpg" />
            </div>
            <div className={styles.inner}>
                <p>
                    My name is Pablo Arismendi Rabe, born and raised in the city of Resistencia, Chaco. Since I
                    was little, my identity had to be forged from within and with a self-taught initiative, since
                    the available tools or the cultural offer in my native province have always been very scarce.
                </p>
                <p>Living in a poor province may seem like a disadvantage but it was quite helpful to be
                    honest. It teached me to push and activate my inner voice.
                </p>
                <p>
                    I come from a family of artists: creative people with an entrepreneurial spirit. From a
                    father luthier and TV-technician with a cabinetmaker and some sort of a magical aircraft
                    passion and soul and an amazing sister specialized in murals and graphite. She is a massive
                    inspiration for me.
                    I have learned the value of the artisan, the imaginative and being a producer of my own
                    ideas with a radical character.
                </p>
                <p>
                    I have been a 3D artist for more than 12 years. I have ventured into the field of video
                    games, short films, virtual reality environments, augmented reality and advertising
                    campaigns for various types of clients. Over time I realized that I needed to exploit one
                    more edge in the creative department, that is why I decided to enter the world of
                    traditional art.
                </p>
                <img src="/images/bio/festival.jpg" className={styles.img} alt="" />
                <p>
                    I had the privilege of working for clients like Hasbro,
                    Sony, Epic Games, Hewlett Packard, Nike, Autograph
                    NFTs, T-Mobile and Mediamonks which forged in me a
                    spirit of innovation, testing my inventiveness and
                    taking my creativity to new heights. . Of the projects of
                    which I am most proud to have been a part, the virtual
                    reality production “Love Birds of the Twin Towers” that
                    was presented at the <a>film festival in Tribeca, New
                    York</a> stands out. 
                </p>
                <p>
                    This was the moment in which I discovered that my
                    ideas could be expanded to a much deeper and more
                    personal concept, which gave way to venture into the
                    world of painting on canvas as another channel of
                    expression.
                </p>
                <p>
                    Among my most precious works are also the short films: <span>&quot;Live, revive, remorse, repeat&quot;</span> and <span>&quot;The Intruder&quot;</span> made in conjunction with Epic Games and MediaMonks, as the main artist
                    for a series of projects and development of oriented 3D production to the movies.
                    The art, creative direction, cameras and lighting are my own.
                </p>
            </div>
        </div>
        </section>
        <section className={styles.sectionVideo}>
            <div className={styles.video}>
                <div className={styles.vimeoWrap}>
                    <div className={styles.vimeoWrapInner}>
                    <iframe
                    src="https://player.vimeo.com/video/560672013?h=560672013&amp;app_id=122963\"
                    frameborder="0"
                    allowfullscreen
                    title="The Intruder"
                    />
                    </div>

                </div>
                <div className={styles.vimeoWrap}>
                    <div className={styles.vimeoWrapInner}>
                    <iframe
                    src="https://player.vimeo.com/video/534893547?h=534893547&amp;app_id=122963\"
                    frameborder="0"
                    allowfullscreen
                    title="The Intruder"
                    />
                    </div>

                </div>
            </div>
        </section>
        <section>
            {images.map((img, index) => 
            <div className={styles.image} key={index}>
                <Media src={'/images/bio/' + img} alt="" />
            </div>
            )}
        </section>
    </main>
  )
}
