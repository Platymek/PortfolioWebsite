import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { useState } from "react";
import NavBar from "./navbar";

const roboto = Roboto({ weight: "500", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hector's Portfolio",
  description: "The portfolio of Hector Selby Reimundez",
};

export default function RootLayout({

  children,

}: Readonly<{

  children: React.ReactNode;

}>) {
  return (
    <html lang="en">

      <body 
      
        style={{

          display: 'flex',
          backgroundColor: 'white',
          justifyContent: 'center',
        }} 
        
        className={roboto.className}
      >
        <div style={{
          
          marginTop: 20,
          marginBottom: 20,
          paddingBottom: 48,

          maxWidth: 800,
          width: '100%',
          justifyContent: 'center',

          borderRadius: 48,
          borderColor: '#7A5AF1',
          backgroundColor: '#E5E0FF',
        }}>

          <div style={{
            
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}>

            <Header/>
            <NavBar/>

            <div style={{padding: 16,}}>

              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

function Header() {

  return (

    <div style={{
      
      width: '100%',
      fontWeight: 'bold',
      backgroundColor: '#7A5AF1',
      
      padding: 8,
      paddingBottom: 0,

      borderTopLeftRadius: 48,
      borderTopRightRadius: 48,
    }}>

      <h1 style={{
        
        fontSize: 32,
        width: '100%',
        textAlign: 'center',
        color: 'white',
      }}>

        Hector Selby Reimundez's Portfolio
      </h1>

    </div>
  );
}
