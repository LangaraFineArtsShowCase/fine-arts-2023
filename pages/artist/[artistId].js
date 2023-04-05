import client from "../../apollo/client"
import { GET_ARTISTS, GET_ARTIST_LIST, GET_ARTIST} from "../../apollo/queries/queries"
import { studioArray,awardWinners } from '../../config/data_config'
import styles from "../../styles/Artist.module.css"
// import ArtworkContainer from "../../components/ArtworksContainer"
import ArtistArtworks from '@/components/ArtistArtworks'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react';
import LeftLeaf from "@/components/svg/LeftLeaf"
import Head from 'next/head'
import Footer from "@/components/Footer"
import Image from 'next/image';


{/* <link rel="stylesheet" href="https://use.typekit.net/obc4toi.css"></link> */}


const Artist = ({artistList})=>{
    // const [artistList, setArtistList] = useState({})
    const [artist, setArtist] = useState({})
    const [currentArtist, setCurrentArtist] = useState({})

    const [artistsNames, setArtistsNames] = useState({})
    const [artistDetail, setArtistDetail] = useState({})


    // const [studioWork, setStudioWork] = useState({})
    const [artistWork, setArtistWork] = useState({})
    const [artField, setArtField] = useState({})

    const [display, setDisplay] = useState(false)
    const [displayAwardWinner, setAwardWinner] = useState(false)
    const [awardIndex, setAwardIndex] = useState('')



    const router = useRouter()
    const { artistId } = router.query;
    

    useEffect(()=>{
        if(artistId){
            // console.log(artistId);
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
            // console.log(currentArtistId);
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

            awardWinners.map((a,i)=>{
                // console.log(a);
                console.log(currentArtistId);
                if(a.winnerArtistID == currentArtistId){
                    setAwardWinner(true)
                    setAwardIndex(i)
                }
            })
        }
    },[currentArtist])

    useEffect(()=>{
        const artF = [];
        if(artistWork.length>0){
            artistWork.map((art, index)=>{
                if(!artF.includes(art.artworkFields.studio)){
                    artF.push(art.artworkFields.studio)
                }
            })
            // console.log(artF);
            setArtField(artF)
        }

    },[artistWork])

    // console.log(artistDetail);
    console.log(artistWork);
    return(

        <>
        {/* header */}
        {display&&
        
        <div className={styles.artistContainer}>
        <div className={styles.heroSection}>
            <div className={styles.artistNameHolder}>
                <h1 className={styles.artistName}>{artistDetail.artistName}</h1>

                {displayAwardWinner&&
                    <div className={styles.award}>
                        <div className={styles.leftLeafHolder}>
                            <div className={styles.leftLeaf}><LeftLeaf/></div>

                        </div>
                        <div className={styles.awardName}>{awardWinners[awardIndex].awardName}</div>
                        <div className={styles.rightLeaf}><LeftLeaf/></div>
                    </div>
                }
            </div>
            <div className={styles.artStudio}>
                {artField.length > 0 && artField.map((art,index)=>(
                    <span key={index}>
                        {art}{index !== artField.length - 1 && ', '}
                    </span>
                ))}
            </div>
            <div className={styles.artistDesc}>{artistDetail.blurb}</div>


            
        </div>

        <div>
            {/* <ArtworkContainer items = {studioWork} artistsNames = {artistsNames}/> */}
            <ArtistArtworks items = {artistWork}/>
        </div>
        </div>}

            <Footer/>
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

export async function getStaticProps(context) {

    try {
  
      const { data } = await client.query({
          query: GET_ARTIST_LIST
      })
  
      return {
          props: {
            artistList: data?.artists2022?.nodes
          },
          // revalidate: 30,
      }
  
    } catch (error) {
      console.log('error', error)
  
      return {
        props: {
          artistList: []
        },
        // revalidate: 30,
      }
    }
  }

export async function getStaticPaths() {

    const { data: artistList } = await client.query({
        query: GET_ARTIST_LIST
    })

    return {
        paths: artistList?.artists2022?.nodes.map((artist) => {
            return {
                params: {
                    artistId: artist.author.node.userId.toString(),
                }
            }
        }),
        fallback: false
    }
}