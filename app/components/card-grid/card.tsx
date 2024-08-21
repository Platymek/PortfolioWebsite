
import Link from 'next/link'
import styles from './card-grid.module.css'
import Image from 'next/image'
import example from './example.png'

export default function Card() {

    return (
        
        <Link href={'/'} className={styles.card} style={{ textDecoration: 'none' }}>

            <div className={styles.cardInner}>
                
                <div className={styles.cardTitle}>
    
                    Robots Hate Rain
                </div>

                <div className={styles.cardInfo}>

                    <Image

                        src={'https://img.itch.zone/aW1nLzE3MDU1MzY1LnBuZw==/315x250%23c/0BZLKX.png'}
                        width={210}
                        height={167}
                        alt='Something effing Random'
                        className={`${styles.cardImage}`}
                    />

                    <div className={`${styles.cardText} hidden md:block`}>

                        A 3 Button Arcade Shmup about an Angry Cloud. Made for and winner of University game jam in 4 days.
                    </div>

                    <div className={styles.cardRoles}>

                        My roles:<br/>
                        - Programmer<br/>
                        - Artist<br/>
                        - Gameplay Designer<br/>
                        - Everything else
                    </div>
                </div>
            </div>
        </Link>
    )
}
