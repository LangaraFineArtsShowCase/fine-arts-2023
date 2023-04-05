import styles from '../styles/ExpandArtwork.module.css'
import Image from 'next/image';


const ExpandArtwork = (setShow, artwork)=>{
    const art = setShow.artwork;
    return (
        <div className={styles.wholePage}>
            <div className={styles.imgHolder}>

                <div className={styles.btnContainer}>
                    <div className={styles.closeButton} onClick={setShow.setShow}>
                        <div></div>
                        <div></div>
                    </div>
                </div>


                {art?.artworkFields?.artType == 'single_view'&&
                    <Image
                        src={art?.artworkFields?.image2d?.sourceUrl}
                        alt={art?.artworkFields?.artworkTitle}
                        layout='fill'
                        objectFit='contain'
                    />
                }
            </div>
        </div>
    )
}

export default ExpandArtwork