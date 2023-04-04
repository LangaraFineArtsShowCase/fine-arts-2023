import client from "../apollo/client"
import { GET_ARTISTS, GET_ARTIST_LIST } from "../apollo/queries/queries"
import { studioArray } from '../config/data_config'
import styles from "../styles/Artists.module.css"
import ArtworkContainer from "../components/ArtworksContainer"
import Link from 'next/link'
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header'


import Image from 'next/image';





const Artists = ()=>{
    const [artistList, setArtistList] = useState({})
    const [artist, setArtist] = useState({})
    const [vw, setVw] = useState(1)
    const [scrollPosition, setScrollPosition] = useState(0);
    const [headerStyle, setHeaderStyle] = useState('')


    useEffect(()=>{
        let alist = getArtistList();
        let a = getArtists();
        a.then(result=>{
            setArtist(result)
        })
        alist.then(result=>{
            setArtistList(result)
            // artistList = result


        })

        const handleScroll = (event) => {

            const width = window.innerWidth * 0.01;
            const position = window.pageYOffset;

            setVw(width);
            setScrollPosition(position)
        };
    
        
        window.addEventListener("scroll", handleScroll)

        return()=>{window.removeEventListener('scroll',handleScroll)}
    },[])

    useEffect(()=>{
        // setTimeout(() => {
            
        // }, 100);
        // alert(headerStyle)
        // console.log(headerStyle);
        if(scrollPosition >= 35*vw){
            // console.log('CHANGE');
            setHeaderStyle('#181818')
        }else{
            setHeaderStyle('')
        }
    },[scrollPosition])
    // console.log(vw);
    // console.log(scrollPosition);
    // console.log(artistList);


    return(

        <div>
        {/* header */}
        <div className={styles.artistsHeader} style={{ backgroundColor: headerStyle }}>

            {(artistList.length>0)&&<Header artistList={artistList} studioList={studioArray} originPage="artists" bgColor={headerStyle}/>}
        </div>

        {/* <Header artistList={artistList} studioList={studioArray} originPage="artists" /> */}

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
            
        </div>
    )
}

export default Artists

async function getArtistList(){
    let aList;

    try{
        let aList = await client.query({
            query: GET_ARTIST_LIST
        })

        return aList.data.artists2022.nodes
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