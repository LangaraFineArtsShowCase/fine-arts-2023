import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import SideList from "./SideList";
import Image from 'next/image';
import styles from "../styles/ArtworksContainer.module.css";



const ArtworkContainer = ({items, artistsNames}) =>{
    const [shuffledItems, setShuffledItems] = useState([])
    const [leftColumn, setLeftColumn] = useState([])
    const [rightColumn, setRightColumn] = useState([])
    // const [showInfo, setShowInfo] = useState({display: 'none'})
    // console.log(artistsNames);
    let artworks;
    if(items.data != null){
        // artworks = items.data.artworks2023.nodes
        artworks = items.data.artworks2022.nodes

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

    const split = () => {
        let left = [];
        let right = [];
        for(let i=0;i<shuffledItems.length;i++){
            if(i%2==0){
                left.push(shuffledItems[i])
            }else{
                right.push(shuffledItems[i])
            }
        }
        // console.log(left);
        // console.log(right);
        setLeftColumn(left);
        setRightColumn(right);
    }


    useEffect(()=> {
        shuffle(artworks)
        split();
        // console.log(artworks);
    }, [items,shuffledItems])


    const numOfItems = shuffledItems.length
    // console.log(shuffledItems);
    // console.log(numOfItems);

    // const handelMouseEnter = (index) => {

    //     const node = document.getElementsByClassName("desc");
    //     // console.log(node);
    //     if(node[index]){
    //         node[index].className = "desc "+styles.showDesc
    //     }
    // }

    // const handelMouseLeave = (index) => {
    //     const node = document.getElementsByClassName("desc");
    //     console.log(node);
    //     if(node[index]){
    //         node[index].className = "desc "+styles.hideDesc
    //     }
    // }


    // console.log(shuffledItems);
    // console.log(leftColumn);

    return(
        <>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@800&display=swap" rel="stylesheet"/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@1,300&display=swap" rel="stylesheet"></link>
        </Head>
<div className={styles.flexContainer}>
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

                            />

                            <div className={styles.hideDesc}>

                                <div className={styles.artName}>
                                    {item.artworkFields.artworkTitle}
                                </div>

                                <div>
                                    {

                                    item.author.node.artists2022.nodes.map((artist,i)=>(

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
                            />

                            <div className={styles.hideDesc}>

                                <div className={styles.artName}>
                                    {item.artworkFields.artworkTitle}
                                </div>

                                <div>
                                    {

                                    item.author.node.artists2022.nodes.map((artist,i)=>(

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
                <SideList name={"Studios"} list={["Ceramics","Painting","Indigenous Carving & Toolmaking","Drawing", "Design", "Sculpture","Media Studio","Drawing","Print media","Textiles","Public art", "Performance"]}/>


            }
                
        </div>
        </div>
        </>
    )
}

export default ArtworkContainer