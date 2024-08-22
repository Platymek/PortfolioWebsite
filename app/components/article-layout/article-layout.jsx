import { YouTubeEmbed } from '@next/third-parties/google'
import ArticleGallery from '../article-gallery/article-gallery'
import styles from './article-layout.module.css'

export default function ArticleLayout(props) {

    function getLinks(links, linkNames) {

        var linkComponents = [];

        for (var i = 0; i < links.length; i++) {

            linkComponents.push(

                <a href={links[i]}>

                    {linkNames[i]}
                </a>
            );
        }

        return linkComponents;
    }

    return (

        <div className={styles.container}>
            
            <h1>{props.title}</h1>
            <h3>Platforms: {getLinks(props.links, props.linkNames)}</h3>
            
            <div className={styles.contentContainer}>
                
                <div className={`${styles.textContainer}`}>

                    {props.children}
                </div>

                <div className={`${styles.galleryContainer} hidden md:block`}>

                    <ArticleGallery videoid='Pzm71ju0Mn4' srcs={props.gallerySrcs} />
                </div>
            </div>

            <div className={`md:hidden`} style={{ marginTop: 16 }}>
                    
                <ArticleGallery videoid='Pzm71ju0Mn4' srcs={props.gallerySrcs} />
            </div>
        </div>
    )
}
