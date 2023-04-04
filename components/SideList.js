import {useState,useEffect} from 'react'
import { redirect } from 'next/navigation';
import styles from "../styles/SideList.module.css";
import Head from 'next/head';
// import { redirect } from 'next/navigation';
import Link from 'next/link'



const SideList = (props) => {
    // console.log(props)
    const [list, setList] = useState([])
    // console.log(list);
    useEffect(()=>{
        // setList(props.artistsNames)
        const isArr = Object.prototype.toString.call(props.artistsNames) == '[object Array]';
        console.log(props.artistsNames);
        // console.log(typeof(props.artistsNames));

        if(isArr){
            setList(props.artistsNames)
        }
        console.log(list);
    },[props.artistsNames])

    const handelClick = (e) => {

        // console.log(`/studio/${e}`);
        if(props.name == "Studios"){
            // redirect to individual studio page
            // console.log(e);
            // console.log("wat");
            // console.log("wat");
            // redirect(`/studio/${e}`)
        }
        // else{
        //     // redirect to individual artist page
        //     // console.log("watt");

        // }
        // console.log("wat");
    }

    // console.log(props.artistsNames);

    if(props){
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
                <div className={styles.sideMenu}>
                <ul>
                    <li><h2>{props.name}</h2></li>

                    {!props.artistsNames?                   
                    <>
                    {props.list.map((item,index)=>(
                        
                        <li 
                            key={index}
                        >
                            <div><Link href={`studio/${item.toLowerCase()}`}>{item}</Link></div>


                            
                        </li>
                    ))}
                    </>
                    :
                    <>
                    <>{list.map((item,index)=>(
                        <li onClick={()=>{handelClick(item)}}
                        key={index}
                        >
                            {item.name}
                        </li>
                    ))}</>
                    </>
                    }

                </ul>
                </div>
            </>
        )
    }
    return(
        <></>
    )
}

export default SideList