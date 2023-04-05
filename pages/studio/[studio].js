import client from "../../apollo/client"
import { GET_ARTISTS, GET_ARTIST_LIST, GET_STUDIO_WORKS} from "../../apollo/queries/queries"
import { studioArray } from '../../config/data_config'
import styles from "../../styles/Studio.module.css"
import ArtworkContainer from "../../components/ArtworksContainer"
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react';

import Image from 'next/image';
import Header from "@/components/Header"
import Footer from "@/components/Footer"



const Studio = ({artistList})=>{

    // const [artistList, setArtistList] = useState({})
    const [artist, setArtist] = useState({})
    const [artistsNames, setArtistsNames] = useState({})

    const [studioWork, setStudioWork] = useState({})

    const [display, setDisplay] = useState(false)
    const [studioDetail, setStudioDetail] = useState({})
    const [vh, setVh] = useState(1)
    const [scrollPosition, setScrollPosition] = useState(0);
    const [headerStyle, setHeaderStyle] = useState('')

    // console.log(studio);
    const router = useRouter()
    let { studio } = router.query;
    // console.log(studio);
    useEffect(()=>{
        const handleScroll = (event) => {

            const height = window.innerHeight * 0.01;
            const position = window.pageYOffset;

            setVh(height);
            setScrollPosition(position)
        };
    
        
        window.addEventListener("scroll", handleScroll)

        return()=>{window.removeEventListener('scroll',handleScroll)}
    },[])

    useEffect(()=>{
        if(scrollPosition >= 90*vh){
            setHeaderStyle('#181818')
        }else{
            setHeaderStyle('')
        }
    },[scrollPosition])


    useEffect(()=>{
        if(studio){
            const foundStudio = studioArray.find((studioObj)=>studioObj.studioName == studio.toLowerCase());
            
            if(foundStudio){
                setDisplay(true);
                setStudioDetail(foundStudio)
                let alist = getArtistList();
            let a = getArtists();
            if(studio == 'media'){
                studio = 'media studio'
            }
            let s = getStudioWorks(studio);
            a.then(result=>{
    
                setArtist(result)
            })
    
            alist.then(result=>{
                // setArtistList(result);
                artistList = result
            })
    
            s.then(result=>{
                setStudioWork(result);        
                const studioArtists=[]
                result.data.artworks2022.nodes.map((element)=>{
                    let add = true;
                    studioArtists.map((a)=>{
                        if(a.userId === element.author.node.userId){
                            add = false;
                        }
                    })
                    if(add){
                        let studioArtist = {'userId':element.author.node.userId, 'name':element.author.node.artists2022.nodes[0].artistFields.artistName};
                        studioArtists.push(studioArtist)
                    }
                })
                setArtistsNames(studioArtists)
            })
            }
            
        }
    },[studio])

    return(

        <>
        {/* header */}
        {display&&<>
            {(artistList.length>0)&&<Header artistList={artistList} studioList={studioArray} originPage="studio" bgColor={headerStyle}/>}

            <div className={styles.heroSection}>
            <Image
                src={studioDetail.studioImage[1]}
                alt="cover image"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
            />
            <div className={styles.desc}>
                {studioDetail.studioDescription}
                <div className={styles.faculty}>Studio Faculty: {studioDetail.studioFaculty.map((item,index)=>(
                    <span key={item}>
                        {item}
                        {index !== studioDetail.studioFaculty.length - 1 && ", "}
                    </span>
                ))}</div>    
            </div>
            <div className={styles.title}>{display&&<h1>{studio.toUpperCase()}</h1>}</div>
            
        </div>

        <div>
            <ArtworkContainer items = {studioWork} artistsNames = {artistsNames}/>
        </div>
        </>}

            <Footer/>
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

    return {
        paths: studioArray.map((studio) => {
            return {
                params: {
                    studio: studio.studioName,
                }
            }
        }),
        fallback: false
    }
}