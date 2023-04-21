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
    const [vw, setVw] = useState(1);


    useEffect(()=>{
        const width = window.innerWidth;
        // console.log(width);
        setVw(width);
        
        const handleResize = (event) => {

            const width = window.innerWidth;
            // console.log(width);
            setVw(width);
        };
    
        
        window.addEventListener("resize", handleResize)
        window.addEventListener("load", handleResize)


        return()=>{
                    window.removeEventListener('resize',handleResize)
                    window.removeEventListener('load',handleResize)
                  }
    },[])


    useEffect(()=>{
        let artworks = items
        // console.log(artworks);
        


        // for (let i = artworks.length - 1; i >= 0; i--) {
        //     const j = Math.floor(Math.random() * (i + 1));
        //     [artworks[i], artworks[j]] = [artworks[j], artworks[i]]
        // }
        if(artworks.length>0){
            artworks.sort((a,b)=>{
                let orderA = a.artworkFields.order;
                let orderB = b.artworkFields.order;
                return(orderA - orderB)
    
            })
            // console.log(artworks);
    
            setShuffled(artworks)
        }





    },[items])

    useEffect(()=>{
        // console.log(vw);
        let colOne = [];
        let colTwo = [];
        let colThree = [];
        for(let i =0;i<shuffle.length;i=i+3){

            colOne.push(i);

            if(i+1<shuffle.length){
                colTwo.push(i+1);
            }
            
            if(i+2<shuffle.length){
                colThree.push(i+2);
            }

        }

        if(vw<768){
            colOne = [];
            colTwo = [];
            colThree = [];
            for (let i = 0; i < shuffle.length; i = i + 3) {
                if(i<3){
                    colOne.push(i);
                    if(i+1<shuffle.length){
                        colOne.push(i+1);
                    }
                    if(i+2<shuffle.length){
                        colOne.push(i+2);
                    }
                }else if(i<6){
                    colTwo.push(i);
                    if(i+1<shuffle.length){
                        colTwo.push(i+1);
                    }
                    if(i+2<shuffle.length){
                        colTwo.push(i+2);
                    }
                }else{
                    colThree.push(i);
                    if(i+1<shuffle.length){
                        colThree.push(i+1);
                    }
                    if(i+2<shuffle.length){
                        colThree.push(i+2);
                    }

                }

            }
              

        }

        setCol1(colOne);
        setCol2(colTwo);
        setCol3(colThree);
    },[shuffle, vw])

    const handlePopup=(i)=>{
        setShow(true);
        setPopUpContent(shuffle[i]);
    }

    const disablePopup = () => {
        setShow(false);
    }

    return(
        <>
        {show&&<ExpandArtwork setShow={disablePopup} artwork={popUpContent}/>}
        <div className={styles.flexContainer}>
            <div className={styles.container}>

                <div className={styles.colOne}>
                    {
                        col1.length>0&&col1.map((i)=>(
                            <div className={styles.artworkContainer} key={i}>

                                    <Image 
                                        src = {shuffle[i]?.artworkFields?.thumbnail?.mediaItemUrl}
                                        alt={shuffle[i]?.artworkFields.artworkTitle}
                                        height={shuffle[i]?.artworkFields.thumbnail?.mediaDetails?.height}
                                        width={shuffle[i]?.artworkFields.thumbnail?.mediaDetails?.width}

                                        onClick={()=>{ handlePopup(i) }}
                                    />

                                <div className={styles.hideDesc}>

                                    <div className={styles.artName}>
                                        {shuffle[i]?.artworkFields.artworkTitle}
                                    </div>

                                    <div className={styles.artSize}>
                                        {shuffle[i].artworkFields.size}
                                    </div>

                                    <div className={styles.artMaterial}>
                                        {shuffle[i].artworkFields.material}
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
                                        src = {shuffle[i]?.artworkFields?.thumbnail?.mediaItemUrl}
                                        alt={shuffle[i]?.artworkFields.artworkTitle}
                                        height={shuffle[i]?.artworkFields.thumbnail?.mediaDetails?.height}
                                        width={shuffle[i]?.artworkFields.thumbnail?.mediaDetails?.width}
                                        onClick={()=>{ handlePopup(i) }}
                                    />

                                <div className={styles.hideDesc}>

                                    <div className={styles.artName}>
                                        {shuffle[i]?.artworkFields.artworkTitle}
                                    </div>



                                    <div className={styles.artSize}>
                                        {shuffle[i].artworkFields.size}
                                    </div>

                                    <div className={styles.artMaterial}>
                                        {shuffle[i].artworkFields.material}
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
                                        src = {shuffle[i]?.artworkFields?.thumbnail?.mediaItemUrl}
                                        alt={shuffle[i]?.artworkFields.artworkTitle}
                                        height={shuffle[i]?.artworkFields.thumbnail?.mediaDetails?.height}
                                        width={shuffle[i]?.artworkFields.thumbnail?.mediaDetails?.width}
                                        onClick={()=>{ handlePopup(i) }}
                                    />

                                <div className={styles.hideDesc}>

                                    <div className={styles.artName}>
                                        {shuffle[i]?.artworkFields.artworkTitle}
                                    </div>

                                    <div className={styles.artSize}>
                                        {shuffle[i].artworkFields.size}
                                    </div>

                                    <div className={styles.artMaterial}>
                                        {shuffle[i].artworkFields.material}
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
