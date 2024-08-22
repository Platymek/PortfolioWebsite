
import Link from 'next/link'
import styles from './card-grid.module.css'
import Image from 'next/image'
import { ScriptProps } from 'next/script'

export default function Card(props: ScriptProps) {

    function getRoles(roles: Array) {

        var newRolesArray = []
        
        for (var i = 0; i < roles.length; i++) {

            newRolesArray.push(

                <div>
                    {`- ${roles[i]}`}
                </div>
            );
        }

        return newRolesArray;
    }

    return (
        
        <div style={{ display: 'flex', justifyContent: 'center' }}>

            <Link href={`/Games/${props.page}`} className={styles.card} style={{ textDecoration: 'none' }}>

                <div className={styles.cardInner}>
                    
                    <div className={styles.cardTitle}>

                        Robots Hate Rain
                    </div>

                    <div className={styles.cardInfo}>

                        <Image

                            src={props.src}
                            width={210}
                            height={167}
                            alt={props.alt}
                            className={`${styles.cardImage}`}
                        />

                        <div className={styles.cardText}>

                            {props.text}
                        </div>
                
                        <div className={`${styles.cardRoles} hidden md:block`}>

                            My Roles: <br/>
                            {getRoles(props.roles)}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}
