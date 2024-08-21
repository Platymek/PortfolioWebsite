
import Card from "./card/card";
import styles from './card-grid.module.css'

export default function CardGrid() {

    return (

        <div className={styles.cardGrid}>

            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        
        </div> 
    )
}
