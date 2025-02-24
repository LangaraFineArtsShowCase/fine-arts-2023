import { useEffect, useState } from 'react'
import client from '@/apollo/client'
import { GET_ARTIST_LIST } from '@/apollo/queries/queries'
import Link from 'next/link'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import RightArrow from '@/components/svg/RightArrow'
import { studioArray } from '@/config/data_config'

const Home = ({ artistList, showComingSoon }) => {
  const [arrowColor, setArrowColor] = useState('#FFFFFF')

  return (
    <>
      <Head>
        <title>Langara Fine Arts Grad Show 2025</title>
      </Head>
      <Header
        artistList={artistList}
        studioList={studioArray}
        originPage="home"
      />
      <main className={styles.main}>
        <div className={styles.title}>
          <span className={styles.school}>Langara</span>
          <h1>
            <span>Fine</span> <span>Arts</span>
          </h1>
          <h2>Grad Show 2025</h2>
          {showComingSoon && (
            <span className={styles.coming_soon}>Coming Soon!</span>
          )}
        </div>
      </main>

      {!showComingSoon && (
        <div className={styles.buttonWrapper}>
          <Link
            href="/artists"
            onMouseEnter={() => setArrowColor('#000000')}
            onMouseLeave={() => setArrowColor('#FFFFFF')}
          >
            Enter Exhibition <RightArrow fill={arrowColor} />
          </Link>
        </div>
      )}
    </>
  )
}

export default Home

export async function getStaticProps(context) {
  try {
    const { data } = await client.query({
      query: GET_ARTIST_LIST,
    })

    return {
      props: {
        artistList: data?.artists2025?.nodes,
      },
      revalidate: process.env.REVALIDATE_DATA === 'true' ? 30 : false,
    }
  } catch (error) {
    console.log('error', error)

    return {
      props: {
        artistList: [],
      },
      revalidate: process.env.REVALIDATE_DATA === 'true' ? 30 : false,
    }
  }
}
