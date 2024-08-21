
import Link from 'next/link'
import styles from '../card-grid.module.css'
import Image from 'next/image'

export default function Card() {

    return (
        
        <Link href={'/'} className={styles.card} style={{ textDecoration: 'none' }}>

            <div className={styles.cardInner}>
                
                <div className={styles.cardTitle}>
    
                    The Rain
                </div>

                <div className={styles.cardInfo}>

                    <Image

                        src='../../../public/next.svg'
                        width={100}
                        height={100}
                        alt='Something effing Random'
                    />

                    <div className={styles.cardText}>

                        <strong>3 Button Arcade/ Shmup about an Angry Cloud</strong>
                        {'\n'}- Programmer
                        {'\n'}- Artist
                        {'\n'}- Gameplay Designer
                    </div>
                </div>
            </div>
        </Link>
    )
}
