import { useState } from 'react'
import client from '@/apollo/client'
import { GET_ARTIST_LIST } from '@/apollo/queries/queries'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import RightArrow from '@/components/svg/RightArrow'

const Home = ({ artistList }) => {
  const [arrowColor, setArrowColor] = useState('#FFFFFF')

  return (
    <>
      <Header artistList={artistList} originPage="home" />
      <main className={styles.main}>
        <div className={styles.title}>
          <span className={styles.school}>Langara</span>
          <h1><span>Fine</span> <span>Arts</span></h1>
          <h2><span>Graduation</span> Exhibition 2023</h2>
        </div>
      </main>

      <div className={styles.buttonWrapper}>
        <a href="#" onMouseEnter={() => setArrowColor('#000000')} onMouseLeave={() => setArrowColor('#FFFFFF')}>Enter Exhibition <RightArrow fill={arrowColor} /></a>
      </div>
    </>
  )
}

export default Home

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