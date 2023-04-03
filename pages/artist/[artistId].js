import client from "../../apollo/client"
import { GET_ARTISTS, GET_ARTIST_LIST, GET_ARTIST} from "../../apollo/queries/queries"
// import { studioArray } from '../../config/data_config'
// import styles from "../../styles/Studio.module.css"
import ArtworkContainer from "../../components/ArtworksContainer"
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react';

import Image from 'next/image';





const Artist = ()=>{
    const [artistList, setArtistList] = useState({})
    const [artist, setArtist] = useState({})
    const [currentArtist, setCurrentArtist] = useState({})

    const [artistsNames, setArtistsNames] = useState({})
    const [artistDetail, setArtistDetail] = useState({})


    // const [studioWork, setStudioWork] = useState({})
    const [artistWork, setArtistWork] = useState({})

    const [display, setDisplay] = useState(false)
    const [studioDetail, setStudioDetail] = useState({})

    const router = useRouter()
    const { artistId } = router.query;

    useEffect(()=>{
        if(artistId){
            console.log(artistId);
            const alist = getArtistList();
            alist.then(result=>{
                result.data.artists2022.nodes.map((a, i)=>{
                    if(a.author.node.userId == artistId){
                        setDisplay(true);
                        setCurrentArtist(a);
                        // console.log(a);
                    }
                })
            })
        }
    },[artistId])

    useEffect(()=>{
        if(currentArtist){
            const currentArtistId = currentArtist.author?.node?.userId;
            console.log(currentArtistId);
            const detail = getArtistWork(currentArtistId);
            detail.then(result=>{
                if(result.data.artists2022.nodes.length==1){
                    const artistInfo = result.data?.artists2022?.nodes[0]?.artistFields;
                    const artworkArray = result.data?.artists2022?.nodes[0]?.author?.node?.artworks2022?.nodes
                    if(artistInfo){
                        setArtistDetail(artistInfo);
                    }
                    if(artworkArray){
                        setArtistWork(artworkArray)
                    }
                }
            })
        }
    },[currentArtist])

    // console.log(artistsNames);
    return(

        <>
        {/* header */}
        {display&&<>
        <div>
            <h1>{artistDetail.artistName}</h1>

            <p>{artistDetail.blurb}</p>
            
        </div>

        <div>
            {/* <ArtworkContainer items = {studioWork} artistsNames = {artistsNames}/> */}
        </div>
        </>}

            
        </>
    )
}

export default Artist

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

async function getArtistWork(a){
    let arts;
    try{
        arts = await client.query({
            query: GET_ARTIST,
            variables:{
                userId: a
            }
        })
        return arts;
    }catch(err){
        console.log(err);
    }
}