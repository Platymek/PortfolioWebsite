
import Link from 'next/link'
import styles from './card-grid.module.css'
import Image from 'next/image'
import { ScriptProps } from 'next/script'

export default function Card(props) {

    function getRoles(roles) {

        if (roles != undefined) {

            var newRolesArray = [<div key={'role-title'}>My Roles:</div>]
        
            for (var i = 0; i < roles.length; i++) {
    
                newRolesArray.push(
    
                    <div key={$`role-${i}`}>
                        {`- ${roles[i]}`}
                    </div>
                );
            }
    
            return newRolesArray;
        }
    }

    return (
        
        <div style={{ display: 'flex', justifyContent: 'center' }}>

            <Link href={`/Articles/${props.page}`} className={styles.card} style={{ textDecoration: 'none' }}>

                <div className={styles.cardInner}>
                    
                    <div className={styles.cardTitle}>

                        {props.title}
                    </div>

                    <div className={styles.cardInfo}>

                        <Image

                            src={props.src}
                            width={218}
                            height={1000}
                            alt={props.alt}
                            className={`${styles.cardImage}`}
                        />

                        <div className={styles.cardText}>

                            {props.text}
                        </div>
                        <div className={`${styles.cardRoles} hidden md:block`}>

                            {getRoles(props.roles)}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

/*

                
                        <div className={`${styles.cardRoles} hidden md:block`}>

                            My Roles: <br/>
                            {getRoles(props.roles)}
                        </div>
*/
