"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CSSProperties, useEffect, useState } from "react";
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
  
    const stickyStyle: CSSProperties = {
  
        position: 'fixed',
        top: 0,
        alignSelf: 'center',
        marginTop: 16,
    }

    return (
        <div>
            <div className={styles.navBlock} />

            <div className={styles.navStyle} 
                style={ sticky ? stickyStyle : {} }>

                <div style={{ display: 'flex', width: '100%', justifyContent: 'center',}}>

                    <div className={styles.navButtonContainer}>
                        
                        <Link href={'/'} className={buttonStyle(pathname == '/')}>

                            About
                        </Link>

                        <Link href={'/Games'} className={buttonStyle(pathname == '/Games')}>

                            Games
                        </Link>

                        <Link href={'/UX'} className={buttonStyle(pathname == '/UX')}>

                            UX
                        </Link>

                        <Link href={'/Software'} className={buttonStyle(pathname == '/Software')}>

                            Software
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
