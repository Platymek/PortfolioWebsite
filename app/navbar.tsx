"use client"

import { useEffect, useState } from "react";

export default function NavBar() {

    const [sticky, setSticky] = useState<boolean>(false);

    useEffect(() => {
        
        window.addEventListener("scroll", () => {

            setSticky(window.scrollY > 96);
        });
    });
  

    const buttonStyle = (selected: boolean) => {
  
        return {
    
            paddingLeft: 12,
            paddingRight: 12,
    
            color: selected ? 'white' : '#3313B9',
            backgroundColor: selected ? '#5928ED' : 'white',
            borderRadius: 999,
        }
    }

    function getStyle() {

        const style = {
            
            fontSize: 18,
            justifyContent: 'center',
            backgroundColor: '#7A5AF1',
            width: '100%',
            maxWidth: 800,
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
  

    return (
  
        <div style={getStyle()}>

            <div style={{
                
                display: 'flex',
                width: '100%',
                justifyContent: 'center',
            }}>
                <div style={{

                    backgroundColor: 'white',
                    borderRadius: 999,

                    padding: 4,
                    borderWidth: 4,
                    borderColor: '#7A5AF1',
                }}>
                    <button style={buttonStyle(true)}>About</button>
                    <button style={buttonStyle(false)}>Games</button>
                    <button style={buttonStyle(false)}>Software</button>
                    <button style={buttonStyle(false)}>Art</button>
                </div>
            </div>
        </div>
    );
}
