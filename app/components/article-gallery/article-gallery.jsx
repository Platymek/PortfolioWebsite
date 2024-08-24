
import { YouTubeEmbed } from '@next/third-parties/google'
import styles from './article-gallery.module.css'
import Image from 'next/image'

export default function ArticleGallery(props) {

    function getImages(srcs) {

        var images = []

        for (var i = 0; i < srcs.length; i++) {

            images.push(<img 
            
                src={srcs[i]}
                width={1000}
                height={167}
                alt={'Gameplay Image'}
                className={`${styles.galleryImage}`}
                key={$`image-${i}`}
            />)
        }

        return images;
    }

    function getYoutubeEmbed(videoid) {

        if (videoid != undefined)

            return (
                
                <>
                    <YouTubeEmbed videoid={videoid} className={styles.youTubeEmbed} />
                    <div className={styles.youTubeEmbed}/>
                </>
            );
    }

    return (

        <div className={styles.container}>

            <h3>Gallery</h3>

            {getYoutubeEmbed(props.videoid)}

            {getImages(props.srcs)}
        </div>
    )
}
