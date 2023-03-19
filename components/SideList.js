import styles from "../styles/SideList.module.css";
import Head from 'next/head';


const SideList = (props) => {
    // console.log(props)

    const handelClick = (e) => {
        // console.log("who");
        console.log(e);
        // if(props.name == "studio"){
        //     // redirect to individual studio page
        //     // console.log(e);
        //     // console.log("wat");
        // }else{
        //     // redirect to individual artist page
        //     // console.log("watt");

        // }
        // console.log("wat");
    }

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

                    {props.list.map((item,index)=>(
                        <li onClick={()=>{handelClick(item)}}>{item}</li>
                    ))}
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