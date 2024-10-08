import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import NavBar from "./components/navbar/navbar";
import { ThemeProvider } from "./theme-provider";

import "./globals.css";
import styles from "./app.module.css";

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
          <div className={styles.pageContainer}>

            {/* main box */}
            <div className={`${styles.main} ${styles.softBg}`}>

              {/* header */}
              <div className={`${styles.header}`}>

                {/* title */}
                <div className={styles.headerText}>Hector Selby Reimundez's Portfolio</div>
              </div>

              <NavBar/>

              <div style={{padding: 16, paddingTop: 16,}}>{children}</div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
