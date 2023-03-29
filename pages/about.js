import aboutStyles from '../styles/About.module.css'
import client from '../apollo/client'
import { GET_ARTISTS, GET_ARTIST_LIST } from '@/apollo/queries/queries'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import { aboutImages, imageBasePath } from '../config/data_config'
import dynamic from 'next/dynamic'
import styles from '@/styles/About.module.css'

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const About = ({artistList}) => {
  return (
    <>
      <Header artistList={artistList} />
      <main className={styles.main}>

        <section className={`${styles.section} ${styles.heroSection}`}>
          <div className={styles.wrapper}>
            <h1 className={styles.pageTitle}>Fine Arts</h1>
            <h2 className={styles.pageSubtitle}>Graduation Exhibition <small>2023</small></h2>
            <div className={styles.videoWrapper}>
              <ReactPlayer
                url={`${imageBasePath}/videos/about/About-Video.mp4`}
                playing={true}
                muted={true}
                controls={false}
                loop={true}
                width='400px'
                height='400px'
              />
            </div>
            <div>
              <p>Welcome to Langara Fine Arts virtual graduation showcase for 2023</p>
              <p>Our students have produced an incredible amount of amazing work this year which is evident in this virtual exhibition and in our in person exhibition at Langara College (April 29th to May 8th in the A Building Main Foyer). This two-part exhibition celebrates this dedicated group of young artists. As a Department, we want to express how proud we are of these students and their exhibited artwork.</p>
              <p>Langara Fine Arts gratefully acknowledges that we do what we do on traditional, ancestral and unceded Musqueam territory.</p>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.bgGray} ${styles.portraitStephanie}`}>
          <div className={styles.wrapper}>
            <div className={`${styles.personPortrait} ${styles.textAlignRight}`}>
              <h2>Stephanie Aitken</h2>
              <span>- Department Chair</span>
              <Image
                src={`${imageBasePath}/images/about/stephanie-aitken.jpg`}
                alt="stephanie aitken"
                width={361}
                height={361}
                priority={true}
              />
            </div>
            <div>
              <p>The work in this exhibition represents the culmination of at least 2 years of critical engagement with materials, processes and ideas, of risk-taking and hard work. The work you see required an incredible amount of bravery to produce. Committing to a fine arts program and to art making as a career is a leap of faith and not for the timid. Some of our students have made this leap with little in the way of economic or family support and I want to acknowledge these students in particular.</p>
              <p>To family and friends of our grads who may be reading this I want to specially acknowledge you as well. Your love and support of our students has helped to deliver them to the incredible achievement represented by this exhibition.</p>
            </div>
            <div>
              <p>The following people are responsible for creating this virtual showcase: Milos Campbell, our Assistant Dept Chair, Elizabeth Milton, Fine Arts faculty member.</p>
              <p>Web and Mobile App students: Jose Arteaga, Megumi Takashima and Tayo Adetola as well as Fine Arts student, Wakana Shimamura. Thank you, team!!</p>
              <p>Please enjoy this showcase and contact me or Milos if you’re interested in purchasing any of the work you see, we’ll put the artists in touch with you if the work is available for purchase.</p>
              <p>Congratulations Grads, please do stay in touch!</p>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.facultyListSection}`}>
          <div className={styles.wrapper}>
            <p>Langara Fine Arts is comprised of the following faculty and staff:</p>
            <ul className={styles.facultyList}>
              <li>
                <strong>Charlotte Falk</strong>
                <span>- design</span>
              </li>
              <li>
                <strong>Aaron Nelson Moody</strong>
                <span>- indigenous carving, tool making, public art, foundry and replication</span>
              </li>
              <li>
                <strong>Devon Knowles</strong>
                <span>- sculpture, public art and foundry and replication</span>
              </li>
              <li>
                <strong>Steve Hubert</strong>
                <span>-sculpture, painting, media and drawing</span>
              </li>
              <li>
                <strong>Aurora Landin</strong>
                <span>- printmaking, drawing and professional practice</span>
              </li>
              <li>
                <strong>Helena Wadsley</strong>
                <span>- painting, drawing, textile studio</span>
              </li>
              <li> 
                <strong>Alwyn O’Brien</strong>
                <span>- ceramics</span>
              </li>
              <li>
                <strong>Philip Robbins</strong>
                <span>- design</span>
              </li>
              <li>
                <strong>Elizabeth Milton</strong>
                <span>- performance, media studio, drawing and professional practice</span>
              </li>
              <li>
                <strong>Suzi Webster</strong>
                <span>- media studio and drawing</span>
              </li>
              <li>
                <strong>Janet Wang</strong>
                <span>- term faculty, drawing</span>
              </li>
              <li>
                <strong>Will Morrison</strong>
                <span>- Workshop Coordinator</span>
              </li>
              <li>
                <strong>Rita Yip</strong>
                <span>- Studio Coordinator</span>
              </li>
              <li>
                <strong>Milos Campbell</strong>
                <span>- Assistant Department Chair, printmaking, drawing</span>
              </li>
              <li>
                <strong>Stephanie Aitken</strong>
                <span>- Department Chair, painting</span>
              </li>
            </ul>
          </div>
        </section>

        <section className={`${styles.section} ${styles.bgGray} ${styles.portraitDarren}`}>
          <div className={styles.wrapper}>
            <div className={styles.personPortrait}>
              <h2>Darren Bernaerdt</h2>
              <span>- acting dean of arts</span>
              <Image
                src={`${imageBasePath}/images/about/darren-bernaerdt.jpg`}
                alt="darren bernaerdt"
                width={361}
                height={361}
                priority={true}
              />
            </div>
            <div>
              <p>Your Grad Show marks an important chapter in your evolution as an artist. It is the beginning of the next step in your path as some of you transition to pursuing your degree, while others may decide to take advantage of the opportunity to develop their practice further. No matter what you’re looking ahead to, take a moment to recognize all that you have accomplished here at Langara.</p>
              <p>You are part of a vibrant, supportive community that began as a group of strangers. Your instructors and studio technicians have shared their knowledge and passion for their discipline. Guest speakers have brought additional perspectives to consider. Your fellow students have been there to support you as well.</p>
            </div>
            <div>
              <p>Your hard work, focus, and dedication have brought you to this point. Roommates, family members, partners and spouses have undoubtedly been a part of this journey, too.</p>
              <p>I look forward to seeing the Fine Arts Grad Show and the diverse range of work that will be generously shared with us, your audience. It is truly inspiring and I am proud of this amazing group of artists that are part of the Faculty of Arts. Congratulations and I wish you well in the next phase of your journey as an artist.</p>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.thankYouSection}`}>
          <div className={styles.wrapper}>
            <div className={styles.thankYouTitle}>
              <h2>Thank you message</h2>
            </div>
            <div>
              <p>On behalf of our graduating students, the Fine Arts Department would like to thank Langara College for funding our virtual grad show Here:There.</p>
              <p>Thank you! Fine Arts Graduates for providing such strong work to fill this virtual space and congratulations on your accomplishments!</p>
              <p>Special thanks to our amazing Chair, Stephanie Aitken for her hard work and dedication to running our program and for all of the tireless behind the scenes work of our Department Coordinator, Rita Yip. Deep gratitude to our donors: David Lambert Foundation, Shadbolt Centre for the Arts - Ceramics Programs, Craft Council of BC, Anne and Jeff Powell, and Tenline Sales for their generous contribution to our Fine Arts Awards program.</p>
            </div>
            <div>
              <p>HUGE thanks from all of us to the following folks who support our program:</p>
              <ul className={styles.thankYouList}>
                <li>
                  <strong>Lynn Ruscheinsky and Yani Kong</strong>
                  <span>- Cultural Theory instructors, Art History</span>
                </li>
                <li>
                  <strong>Joyce Wong</strong>
                  <span>- Fine Arts librarian</span>
                </li>
                <li>
                  <strong>Alena Buis</strong>
                  <span>-  Creative Arts and Industries Division Chair</span>
                </li>
                <li>
                  <strong>Darren Bernaerdt</strong>
                  <span>- Our super supportive Dean of Arts</span>
                </li>
                <li>
                  <span>Our amazing life models:</span>
                  <strong>- Guy, Steve, Hélène, Jessica, Michael, Amanda, Ann, Tiffany, Mark and Fran</strong>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.bgGray} ${styles.langaraApplySection}`}>
          <div className={styles.wrapper}>
            <div className={`${styles.personPortrait} ${styles.textAlignRight}`}>
              <h2>Langara fine arts</h2>
              <Image
                src={`${imageBasePath}/images/about/langara-fine-arts.jpg`}
                alt="langara fine arts"
                width={361}
                height={361}
                priority={true}
                className={styles.langaraFineArtsImage}
              />
            </div>
            <div>
              <p>The Langara Fine Arts diploma program is a two-year studio art foundation that emphasizes hands-on material-based skills within a supportive community of makers, learners, and thinkers.Langara Fine Arts is committed to a culture of humility and respect.</p>
            </div>
            <div>
              <p>Students have the opportunity to study drawing, design, painting, sculpture, foundry, printmaking, Indigenous carving, ceramics, textile art, media, performance and public art. Our tuition is affordable, and our courses are university transferable. Langara Fine Arts alumni go on to study at respected universities throughout Canada and beyond.</p>
            </div>
            <div className={styles.applyOnlineContainer}>
              <p>For information on admissions to the Langara Fine Arts program contact<br /><a href="mailto:admissions@langara.ca"><strong>admissions@langara.ca</strong></a></p>
              <p>
                <a href="https://langara.ca/programs-and-courses/programs/fine-arts/application-info.html" className={styles.applyOnlineBtn}>Apply online today!</a>
              </p>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}

export default About

export async function getStaticProps(context) {

  try {

      const { data: artistList } = await client.query({
          query: GET_ARTIST_LIST
      })

      const { data: artists } = await client.query({
          query: GET_ARTISTS
      })
      

      return {
          props: {
              artistList: artistList?.artists2022?.nodes,
              artists: artists?.artworks2022?.nodes  
          },
          // revalidate: 30,
      }

  } catch (error) {
      console.log('error', error)

      return {
          props: {
              artistList: [],
              artists: [], 
          },
          // revalidate: 30,
      }
  }
}