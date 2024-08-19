import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import NavBar from "./navbar";
import { ThemeProvider } from "./theme-provider";

import "./globals.css";
import styles from "./app.module.css"

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

      <body className={roboto.className}>

        <ThemeProvider

            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
          <div style={{justifyContent: 'center', display: 'flex'}}>
            
            <div className={styles.main}>

              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', }}>

                  <div className={styles.header}>
              
                    <h1 style={{
                      
                      fontSize: 32,
                      width: '100%',
                      textAlign: 'center',
                      color: 'white',
                    }}>
              
                        Hector Selby Reimundez's Portfolio
                    </h1>
              
                  </div>

                  <NavBar/>

                  <div style={{padding: 16,}}>
                      {children}
                  </div>
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
