import client from "../../apollo/client"
import { GET_ARTISTS, GET_ARTIST_LIST, GET_STUDIO_WORKS} from "../../apollo/queries/queries"
import { studioArray } from '../../config/data_config'
import styles from "../../styles/Studio.module.css"
import ArtworkContainer from "../../components/ArtworksContainer"
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react';

import Image from 'next/image';





const Studio = ()=>{
    const [artistList, setArtistList] = useState({})
    const [artist, setArtist] = useState({})
    const [artistsNames, setArtistsNames] = useState({})

    const [studioWork, setStudioWork] = useState({})

    const [display, setDisplay] = useState(false)
    const [studioDetail, setStudioDetail] = useState({})
    // console.log(studio);
    const router = useRouter()
    const { studio } = router.query;
    // console.log(studio);

    const checkStudio = () => {
        // console.log(studio);
        if(studio){
            const foundStudio = studioArray.find((studioObj)=>studioObj.studioName == studio.toLowerCase());
            // console.log(foundStudio);
            if(foundStudio){
                setDisplay(true);
                setStudioDetail(foundStudio)
            }
        }

    }

    useEffect(()=>{
        if(studio){
            checkStudio();
            // console.log(display);
            let alist = getArtistList();
            let a = getArtists();
            let s = getStudioWorks(studio);
            a.then(result=>{
    
                setArtist(result)
            })
    
            alist.then(result=>{
                // console.log(result);
                setArtistList(result);
            })
    
            s.then(result=>{
                console.log(studio);
                // console.log(result);
                setStudioWork(result);           
                const studioArtists=[]
                // const arr = {'data':{'artworks2022':{"nodes":{"author"}}}};
                // console.log(result);
                result.data.artworks2022.nodes.map((element)=>{
                    let add = true;
                    // console.log(element.author.node.userId);
                    studioArtists.map((a)=>{
                        if(a.userId === element.author.node.userId){
                            add = false;
                        }
                    })
                    if(add){
                        let studioArtist = {'userId':element.author.node.userId, 'name':element.author.node.artists2022.nodes[0].artistFields.artistName};
                        studioArtists.push(studioArtist)
                    }
                    // if(element.artworkFields.studio===studio){
                    //     nodes.push(element)
                    // }
                })
                // console.log(studioArtists);
                setArtistsNames(studioArtists)
            })
        }




    },[studio])

    // console.log(artistsNames);
    return(

        <>
        {/* header */}
        {display&&<>
            <div className={styles.heroSection}>
            <Image
                src={studioDetail.studioImage[0].imagePath}
                alt="cover image"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
            />
            <div className={styles.desc}>
                {studioDetail.studioDescription}
                <div className={styles.faculty}>Studio Faclty: {studioDetail.studioFaculty.map((item)=>(
                    <spam key={item}>{item}</spam>
                ))}</div>    
            </div>
            <div className={styles.title}>{display&&<h1>{studio.toUpperCase()}</h1>}</div>
            
        </div>

        <div>
            <ArtworkContainer items = {studioWork} artistsNames = {artistsNames}/>
        </div>
        </>}

            
        </>
    )
}

export default Studio

async function getArtistList(){
    let aList;

    try{
        let aList = await client.query({
            query: GET_ARTIST_LIST
        })

        return aList
    }catch(err){
        // console.log(err);
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
        // console.log(err);
    }
}

async function getStudioWorks(s){
    // const { data: studioWorks } = await client.query({
    //     query: GET_STUDIO_WORKS,
    //     variables: {
    //         studio: studioName.replace("&amp;", "&")
    //     }
    // })
    // console.log(studio);
    let a;
    try{
        a = await client.query({
            query: GET_STUDIO_WORKS,
            variables:{
                studio: s
            }
        })
        return a;
    }catch(err){
        // console.log(err);
    }
}