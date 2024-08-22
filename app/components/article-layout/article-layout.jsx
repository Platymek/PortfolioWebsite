import ArticleGallery from '../article-gallery/article-gallery'
import styles from './article-layout.module.css'

export default function ArticleLayout({ children }, props) {

    return (

        <div className={styles.container}>
            
            <h1>Robots Hate Rain</h1>
            <h2>Itch.io</h2>
            
            <div className={styles.contentContainer}>
                
                {children}

                <ArticleGallery />
            </div>
        </div>
    )
}
