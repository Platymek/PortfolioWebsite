import { YouTubeEmbed } from '@next/third-parties/google'
import ArticleGallery from '../article-gallery/article-gallery'
import styles from './article-layout.module.css'

export default function ArticleLayout(props) {

    return (

        <div className={styles.container}>
            
            <div className={styles.contentContainer}>
                
                <div className={`${styles.textContainer}`}>

                    {props.children}
                </div>

                <div className={`${styles.galleryContainer} hidden md:block`}>

                    <ArticleGallery videoid={props.videoid} srcs={props.gallerySrcs} />
                </div>
            </div>

            <div className={`md:hidden`} style={{ marginTop: 16 }}>
                    
                <ArticleGallery videoid={props.videoid} srcs={props.gallerySrcs} />
            </div>
        </div>
    )
}
