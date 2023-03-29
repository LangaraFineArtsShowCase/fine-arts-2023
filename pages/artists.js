import client from "../apollo/client"
import { GET_ARTISTS, GET_ARTIST_LIST } from "../apollo/queries/queries"
import { studioArray } from '../config/data_config'
import styles from "../styles/Artists.module.css"
import ArtworkContainer from "../components/ArtworksContainer"
import Link from 'next/link'
import React, { useState, useEffect } from 'react';

import Image from 'next/image';





const Artists = ()=>{
    const [artistList, setArtistList] = useState({})
    const [artist, setArtist] = useState({})


    useEffect(()=>{
        let alist = getArtistList();
        let a = getArtists();
        a.then(result=>{
            setArtist(result)
        })
        alist.then(result=>{
            setArtistList(result)
        })
        
    },[])

    console.log(artistList);


    return(

        <>
        {/* header */}
        <div className={styles.heroSection}>
            <Image
                // className={styles.coverImg}
                src="/images/NewArtistsPage1.jpg"
                alt="cover image"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
            />
            <h1 > ARTISTS</h1>
        </div>

        <div>
            <ArtworkContainer items = {artist}/>
        </div>
            
        </>
    )
}

export default Artists

async function getArtistList(){
    let aList;

    try{
        let aList = await client.query({
            query: GET_ARTIST_LIST
        })

        return aList
    }catch(err){
        console.log(err);
    }
}

async function getArtists(){
    let a;
    try{
        let a = await client.query({
            query: GET_ARTISTS
        })

        return a
    }catch(err){
        console.log(err);
    }
}