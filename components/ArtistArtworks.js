import React, { useState, useEffect } from 'react';
import Image from 'next/image';
// import styles from "../styles/ArtistArtwork.module.css";


const ArtistArtworks = ({items}) => {
    // console.log(items);
    useEffect(()=>{
        for(let i = 0; i < items.length; i + 3){
            console.log(i);
            console.log(i+1);
            console.log(i+2);

        }
    },[items.length])
    return(
        <>
        <div>
            haha
        </div>
        </>
    )
}

export default ArtistArtworks
