import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from "../styles/ArtistArtworks.module.css";
import ExpandArtwork from './ExpandArtwork';


const ArtistArtworks = ({items}) => {
    const [col1,setCol1] = useState([]);
    const [col2,setCol2] = useState([]);
    const [col3,setCol3] = useState([]);
    const [shuffle, setShuffled] = useState([]);
    const [show,setShow] = useState(false)
    const [popUpContent,setPopUpContent] = useState({})



    useEffect(()=>{
        let artworks = items
        


        for (let i = artworks.length - 1; i >= 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [artworks[i], artworks[j]] = [artworks[j], artworks[i]]
        }

        setShuffled(artworks)




    },[items])

    useEffect(()=>{
        const colOne = [];
        const colTwo = [];
        const colThree = [];
        for(let i =0;i<shuffle.length;i=i+3){

            colOne.push(i);

            if(i+1<shuffle.length){
                colTwo.push(i+1);
            }
            
            if(i+2<shuffle.length){
                colThree.push(i+2);
            }

        }
        console.log(col1);
        console.log(col2);
        console.log(col3);
        setCol1(colOne);
        setCol2(colTwo);
        setCol3(colThree);
    },[shuffle])

    // console.log(col1);
    // col1.map((i)=>{
    //     console.log(shuffle[i].artworkFields.image2d);
    // })
    const handlePopup=(i)=>{
        setShow(true);
        setPopUpContent(shuffle[i]);
    }


    console.log(shuffle);
    console.log(col1);
    // console.log(    shuffle[1]?.image2d?.sourceUrl);
    return(
        <>
        {/* {show&&<ExpandArtwork setShow={setShow} artwork={popUpContent}/>} */}
        <div className={styles.flexContainer}>
            <div className={styles.container}>

                <div className={styles.colOne}>
                    {
                        col1.length>0&&col1.map((i)=>(
                            <div className={styles.artworkContainer} key={i}>

                                    <Image 
                                        src={shuffle[i]?.artworkFields.artType=='single_view'?shuffle[i]?.artworkFields.image2d?.sourceUrl:shuffle[i]?.artworkFields.image3d1?.sourceUrl}
                                        alt={shuffle[i]?.artworkFields.artworkTitle}
                                        layout='fill'
                                        onClick={()=>{ handlePopup(i) }}
                                    />

                                <div className={styles.hideDesc}>

                                    <div className={styles.artName}>
                                        {shuffle[i]?.artworkFields.artworkTitle}
                                    </div>

                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className={styles.colTwo}>
                    {
                        col2.length>0&&col2.map((i)=>(
                            <div className={styles.artworkContainer} key={i}>

                                    <Image 
                                        src={shuffle[i]?.artworkFields.artType=='single_view'?shuffle[i]?.artworkFields.image2d?.sourceUrl:shuffle[i]?.artworkFields.image3d1?.sourceUrl}
                                        alt={shuffle[i]?.artworkFields.artworkTitle}
                                        layout='fill'
                                        // layout="responsive"
                                    />

                                <div className={styles.hideDesc}>

                                    <div className={styles.artName}>
                                        {shuffle[i]?.artworkFields.artworkTitle}
                                    </div>

                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className={styles.colThree}>
                    {
                        col3.length>0&&col3.map((i)=>(
                            <div className={styles.artworkContainer} key={i}>

                                    <Image 
                                        src={shuffle[i]?.artworkFields.artType=='single_view'?shuffle[i]?.artworkFields.image2d?.sourceUrl:shuffle[i]?.artworkFields.image3d1?.sourceUrl}
                                        alt={shuffle[i]?.artworkFields.artworkTitle}
                                        layout='fill'
                                    />

                                <div className={styles.hideDesc}>

                                    <div className={styles.artName}>
                                        {shuffle[i]?.artworkFields.artworkTitle}
                                    </div>

                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
        </>
    )
}

export default ArtistArtworks
