import React, { useState, useEffect } from 'react';
import SideList from "./SideList";
import Image from 'next/image';
import styles from "../styles/ArtworksContainer.module.css";
import { useRouter } from 'next/router';
import ExpandArtwork from './ExpandArtwork';



const ArtworkContainer = ({items: artworks, artistsNames, originPage}) =>{
    const [shuffledItems, setShuffledItems] = useState([])
    const [leftColumn, setLeftColumn] = useState([])
    const [rightColumn, setRightColumn] = useState([])
    const [show, setShow] = useState(false)


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

    }, [artworks,shuffledItems,artworks])

    const router = useRouter();

    const handlePopup = (a) =>{
        if(originPage == 'studio'){
            router.push(`/artist/${a.author.node.userId}`)

        }else{
            router.push(`/artist/${a.author.node.userId}`)

        }
    }

    const disablePopup = () => {
        setShow(false);
    }

    const handleArtistClick = (a) => {
        router.push(`/artist/${a.author.node.userId}`)
    }

    return(
        <>

        <div className={styles.flexContainer}>
        {show==true&&<ExpandArtwork setShow={disablePopup}/>}
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
                                src ={item?.artworkFields?.thumbnail?.mediaItemUrl}
                                width={item?.artworkFields?.thumbnail?.mediaDetails?.width}
                                height={item?.artworkFields?.thumbnail?.mediaDetails?.height}
                                alt={item?.artworkFields?.artworkTitle}
                                onClick={()=>{handlePopup(item)}}
                            />

                            <div className={styles.hideDesc}>

                                <div className={styles.artName}>
                                    {item.artworkFields.artworkTitle}
                                </div>

                                <div>
                                    {

                                    item.author.node.artists2024.nodes.map((artist,i)=>(

                                        <div 
                                            className={styles.artistName}
                                            key = {i}    
                                            onClick={()=>{handleArtistClick(item)}}
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
                                src ={item?.artworkFields?.thumbnail?.mediaItemUrl}
                                width={item?.artworkFields?.thumbnail?.mediaDetails?.width}
                                height={item?.artworkFields?.thumbnail?.mediaDetails?.height}
                                alt={item?.artworkFields?.artworkTitle}
                                onClick={()=>{handlePopup(item)}}

                            />

                            <div className={styles.hideDesc}>

                                <div className={styles.artName}>
                                    {item?.artworkFields?.artworkTitle}
                                </div>

                                <div>
                                    {

                                    item.author.node.artists2024.nodes.map((artist,i)=>(

                                        <div className={styles.artistName}
                                             key = {i}
                                            onClick={()=>{handleArtistClick(item)}}

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
                <SideList name={"Studios"} list={["Ceramics","Painting","Indigenous Carving & Toolmaking","Drawing", "Design", "Sculpture","Media","Drawing","Print Media","Textiles","Public Art", "Performance"]}/>
            }
                
        </div>
        </div>
        </>
    )
}

export default ArtworkContainer