import { YouTubeEmbed } from '@next/third-parties/google'
import ArticleGallery from '../article-gallery/article-gallery'
import styles from './article-layout.module.css'

export default function ArticleLinks(props) {

    function getLinks(links, linkNames) {

        var linkComponents = [];

        for (var i = 0; i < links.length; i++) {

            linkComponents.push(
                
                <a href={links[i]} key={`link-${i}`}>

                    {linkNames[i]}
                </a>
            );

            linkComponents.push(<br key={`br-${i}`}/>);
        }

        return linkComponents;
    }

    return (

        <h3 className={styles.articleLinks}>Links:<br/>
            {getLinks(props.links, props.linkNames)}
        </h3>
    )
}
