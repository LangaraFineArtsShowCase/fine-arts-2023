import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import SideList from "./SideList";
import Image from 'next/image';
import styles from "../styles/ArtworksContainer.module.css";
import StudioPopUp from './StudioPopUp';
import { useRouter } from 'next/router';



const ArtworkContainer = ({items, artistsNames, originPage}) =>{
    const [shuffledItems, setShuffledItems] = useState([])
    const [leftColumn, setLeftColumn] = useState([])
    const [rightColumn, setRightColumn] = useState([])
    const [show, setShow] = useState(false)
    const [popUpContent, setPopUpContent] = useState({})
    // const [showInfo, setShowInfo] = useState({display: 'none'})
    // console.log(artistsNames);
    let artworks;
    if(items.data != null){
        // artworks = items.data.artworks2023.nodes
        artworks = items.data.artworks2023?.nodes

    }

    // const what = ([...artworks])


    // console.log(artworks.length);

    const shuffle = (artworks) => {
        if(artworks){
            for (let i = artworks.length - 1; i >= 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [artworks[i], artworks[j]] = [artworks[j], artworks[i]]
            }
            setShuffledItems(artworks)
        }

    }



    useEffect(()=> {
        shuffle(artworks)
        // split();
        let left = [];
        let right = [];
        for(let i=0;i<shuffledItems.length;i++){
            if(i%2==0){
                left.push(shuffledItems[i])
            }else{
                right.push(shuffledItems[i])
            }
        }

        setLeftColumn(left);
        setRightColumn(right);

    }, [items,shuffledItems,artworks])

    const router = useRouter();

    const numOfItems = shuffledItems.length
    // console.log(originPage);
    const handlePopup = (a) =>{
        if(originPage == 'studio'){
            setShow(true);
            setPopUpContent(a);
        }else{
            console.log(a);
            router.push(`/artist/${a.author.node.userId}`)
        }
    }

    const closePopUp = () => {
        console.log('wat');

        // setShowPopUp(false);
    }
    const disablePopup = () => {
        setShow(false);
    }

    return(
        <>

        <div className={styles.flexContainer}>
        {show==true&&<StudioPopUp setShow={disablePopup} content={popUpContent}/>}
        <div className={styles.container}>
            <div className={styles.colOne}>
                {
                    leftColumn.length>0
                    ?
                    leftColumn.map((item,index)=>(
                        <div
                            className={styles.artworkContainer}
                            key = {index}

                        >
                            <Image
                                src ={item.artworkFields.thumbnail.mediaItemUrl}
                                width={item.artworkFields.thumbnail.mediaDetails.width}
                                height={item.artworkFields.thumbnail.mediaDetails.height}
                                alt={item.artworkFields.artworkTitle}
                                onClick={()=>{handlePopup(item)}}
                            />

                            <div className={styles.hideDesc}>

                                <div className={styles.artName}>
                                    {item.artworkFields.artworkTitle}
                                </div>

                                <div>
                                    {

                                    item.author.node.artists2023.nodes.map((artist,i)=>(

                                        <div 
                                            className={styles.artistName}
                                            key = {i}    
                                        >
                                            {artist.artistFields.artistName}
                                        </div>
                                    ))

                                    }
                                </div>

                            </div>
                        </div>
                        
                    ))
                    :
                    <div></div>
                }
            </div>

            <div className={styles.colTwo}>
                {
                    rightColumn.length>0
                    ?
                    rightColumn.map((item,index)=>(
                        <div
                            className={styles.artworkContainer}
                            key = {index}

                        >
                            <Image
                                src ={item.artworkFields.thumbnail.mediaItemUrl}
                                width={item.artworkFields.thumbnail.mediaDetails.width}
                                height={item.artworkFields.thumbnail.mediaDetails.height}
                                alt={item.artworkFields.artworkTitle}
                                onClick={()=>{handlePopup(item)}}

                            />

                            <div className={styles.hideDesc}>

                                <div className={styles.artName}>
                                    {item.artworkFields.artworkTitle}
                                </div>

                                <div>
                                    {

                                    item.author.node.artists2023.nodes.map((artist,i)=>(

                                        <div className={styles.artistName}
                                             key = {i}
                                        >
                                            {artist.artistFields.artistName}
                                        </div>
                                    ))

                                    }
                                </div>

                            </div>
                        </div>
                        
                    ))
                    :
                    <div></div>
                }
            </div>
            

            
        </div>

        <div className={styles.studioContainer}>

            {artistsNames
            ?
                <SideList name={"Artists"} list={[]} artistsNames= {artistsNames}/>

            :
                <SideList name={"Studios"} list={["Ceramics","Painting","Indigenous Carving & Toolmaking","Drawing", "Design", "Sculpture","Media","Drawing","Print Media","Textiles","Public art", "Performance"]}/>


            }
                
        </div>
        </div>
        </>
    )
}

export default ArtworkContainer