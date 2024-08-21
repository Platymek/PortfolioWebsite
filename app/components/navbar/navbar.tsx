"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./navbar.module.css";

export default function NavBar() {

    const [sticky, setSticky] = useState<boolean>(false);
    const pathname = usePathname();

    useEffect(() => {
        
        window.addEventListener("scroll", () => {

            setSticky(window.scrollY > 96);
        });
    });
  

    const buttonStyle = (selected: boolean) => {
  
        if (selected) {

            return `${styles.navButton} ${styles.navButtonSelected}`
        }

        else return `${styles.navButton} ${styles.navButtonNotSelected}`;
    }

    function getStyle() {

        const style = {
            
            fontSize: 18,
            justifyContent: 'center',
            alignContent: 'center',
            backgroundColor: '#7A5AF1',
            width: '100%',
            maxWidth: 800,
            height: 48,
        };
  
        const stickyStyle = {
      
            position: 'fixed',
            top: 0,
            alignSelf: 'center',
        }
        
        if (sticky)

            return Object.assign(style, stickyStyle)
        else
            return style;
    }
  

    const style = {
            
        fontSize: 18,
        justifyContent: 'center',
        backgroundColor: '#7A5AF1',
        width: '100%',
        maxWidth: 800,
    };

    return (
        <div>
            <div style={{ position: sticky ? 'initial' : 'fixed', height: 48 }} />
            <div style={getStyle()}>

                <div style={{ display: 'flex', width: '100%', justifyContent: 'center',}}>

                    <div className={styles.navButtonContainer}>
                        
                        <Link href={'/'} className={buttonStyle(pathname == '/')}>

                            About
                        </Link>

                        <Link href={'/Games'} className={buttonStyle(pathname == '/Games')}>

                            Games
                        </Link>
                        <Link href={'/Software'} className={buttonStyle(pathname == '/Software')}>

                            Software
                        </Link>
                        <Link href={'/Art'} className={buttonStyle(pathname == '/Art')}>

                            Art
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
