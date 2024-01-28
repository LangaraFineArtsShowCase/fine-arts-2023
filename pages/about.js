import client from '../apollo/client'
import { GET_ARTISTS, GET_ARTIST_LIST } from '@/apollo/queries/queries'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import Header from '@/components/Header'
import { aboutImages, imageBasePath } from '../config/data_config'
import dynamic from 'next/dynamic'
import Carousel from 'better-react-carousel'
import styles from '@/styles/About.module.css'
import Footer from '@/components/Footer'

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const About = ({artistList}) => {
  return (
    <>
      <Head>
        <title>About - Langara Fine Arts Grad Show 2024</title>
      </Head>
      <Header artistList={artistList} originPage="about" />
      <main className={styles.main}>

        <section className={`${styles.section} ${styles.heroSection}`}>
          <div className={styles.wrapper}>
            <h1 className={styles.pageTitle}>Fine Arts</h1>
            <h2 className={styles.pageSubtitle}>Grad Show <small>2024</small></h2>
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
              <p>
                <strong>
                  Welcome to the Langara Fine Arts virtual graduation showcase
                  for 2024!
                </strong>
              </p>
              <p>
                We gratefully acknowledge that our learning takes place on
                traditional, ancestral and unceded{' '}
                <strong> xʷməθkʷəy̓əm, Musqeaum</strong> territory. We are deeply
                honoured to hold our given Musquem name,{' '}
                <strong>snəw̓eyəɬ leləm̓,</strong> house of teachings.
              </p>
              <p>
                This digital presentation of artworks complements our on-campus
                exhibition held at Langara College on West 49th Avenue in
                Vancouver from April 25<sup>th</sup> — May 5<sup>th</sup>, 2024.
                Celebrating the artistic development of our graduating students,
                this website features artwork made within diverse studio areas
                (including: ceramics, drawing, design, Indigenous carving & tool
                making, painting, performance, print media, public art, media,
                textiles and sculpture). We are extremely proud of our students’
                dedication, curiosity, and experimentation and congratulate them
                on their significant achievement. If you wish to inquire about
                purchasing any of these featured artworks, feel free to reach
                out to our Department Coordinator, Rita Yip (
                <a href="mailto:ritayip@langara.ca">ritayip@langara.ca</a>) .
              </p>
            </div>
          </div>
        </section>

        <section className={styles.carousel}>
          <Carousel
            cols={4}
            rows={1}
            gap={10}
            loop={true}
          >
            {aboutImages.map((image, i) => (
              <Carousel.Item key={i}>
                <div className={styles.carouselItemWrapper}>
                  <Image
                    src={image.thumbnailPath}
                    alt="image"
                    fill
                  />
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
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
              <p>
                Langara Fine Arts students have produced truly amazing work this
                year. The work in this exhibition represents the culmination of
                2 years of engagement with materials, processes, and ideas, of
                risk-taking and hard work. Committing to a fine arts program and
                to art making as a career is a leap of faith and not for the
                timid.
              </p>
              <p>
                Our faculty and staff commend the bravery of our graduating
                students. To family and friends of our grads, <br /> I want to
                specially acknowledge you as well. Your love and support of our
                students has helped to deliver them to the incredible
                achievement represented by this exhibition.
              </p>
            </div>
            <div>
              <p>
                Langara Fine Arts is famous for being a community. Our students
                contribute to each other’s achievements and the unfolding of
                each other’s work. It takes a village to make an artist and
                we’re very proud of your love and support of each other. We hope
                you will take this community with you wherever you are going.
              </p>
              <p>
                Please do stay in touch, we are and will remain your biggest
                fans.
              </p>
              <div className={styles.letterSignature}>
                <p>Stephanie Aitken Langara</p>
                <p>Fine Arts Department Chair</p>
              </div>
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
                <strong>Gloria Han</strong>
                <span>- ceramics</span>
              </li>
              <li>
                <strong>Suzi Webster</strong>
                <span>- media studio and drawing</span>
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
              <p>The 2023 Fine Arts Grad Show marks the culmination of years of hard work as a student and evolution as an artist. Congratulations on this significant achievement! For some of you, this marks the beginning of the next step in your academic journey while for others, you may decide to take advantage of the opportunity to develop your practice further. No matter what you’re looking ahead to, take a moment to recognize all that you have accomplished here at Langara.</p>
              <p>During your time here, you have been part of a vibrant community. Your instructors and studio technicians have shared their knowledge and passion for their discipline.</p>
            </div>
            <div>
              <p>Guest speakers brought additional perspectives for you to consider. Your fellow students have been there to support you as well.</p>
              <p>This is the time to celebrate the journey that you have been on - the journey that you have created with your commitment, perseverance, and vision. You are part of a community who have the power to inspire, inform, and effect change through their art.</p>
              <p>Congratulations and I wish you all the very best in the next phase of your journey as an artist.</p>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.thankYouSection}`}>
          <div className={styles.wrapper}>
            <div className={styles.thankYouTitle}>
              <h2>THANK YOUs:</h2>
            </div>
            <div>
              <p>Special thanks to our amazing Department Chair, <strong>Stephanie Aitken</strong> for her dedication, insight and hard work running our program, <strong>Milos Campbell</strong> for her incredible support as Assistant Chair and for the tireless behind the scenes work of our Department Coordinator, <strong>Rita Yip</strong>. Deep gratitude to our donors: <strong>David Lambert Foundation</strong>, <strong>Shadbolt Centre for the Arts - Ceramics Programs</strong>, <strong>xCraft Council of BC</strong>, <strong>Anne and Jeff Powell</strong>, and <strong>Tenline Sales</strong> for their generous contribution to our Fine Arts Awards program.</p>

              <p>On behalf of our graduating students, the Fine Arts Department would like to thank Langara College for funding our virtual grad show.</p>

              <p>The following people are responsible for creating this website: <strong>Milos Campbell</strong> (Assistant Dept Chair), <strong>Charlotte Falk</strong> and <strong>Elizabeth Milton</strong> (Fine Arts Faculty) and <strong>Tomoko Okochi</strong> (Web & Mobile App Instructor). Web & Mobile App students: <strong>Akhil Noone</strong> (site design), <strong>Elmer Jr. Balbin</strong> and <strong>Anson Su</strong> (developers). Fine Art Students: <strong>Lindsay Chow</strong> (image co-ordination and photography) and <strong>Sebastian Fuertes Pelayo</strong> (art direction). Thank you, team! Splash page image: Sculpture by <strong>Nicole Guillemin</strong>, Photo: <strong>Lindsay Chow</strong>.</p>
            </div>
            <div>
              <p>Huge thanks and congratulations to our Fine Arts Graduates for providing such strong work to fill this virtual space.</p>
              <p>Many thanks to the following folks who support our program:</p>
              <ul className={styles.thankYouList}>
                <li>
                  <strong>Yani Kong</strong>
                  <span>- Cultural Theory Instructor, Art History</span>
                </li>
                <li>
                  <strong>Rebecca Slaven</strong>
                  <span>- Fine Arts Librarian</span>
                </li>
                <li>
                  <strong>Spencer Dane</strong>
                  <span>-  Creative Arts and Industries Division Chair</span>
                </li>
                <li>
                  <strong>Darren Bernaerdt</strong>
                  <span>- Acting Dean of Arts</span>
                </li>
                <li>
                  <span>Our amazing life models:</span>
                  <strong>- Guy, Steve, Hélène, Jessica, Michael, Amanda, Ann, Tiffany, Mark and Fran</strong>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.bgGray} ${styles.portraitJoanne}`}>
          <div className={styles.wrapper}>
            <div className={styles.personPortrait}>
              <Image
                src={`${imageBasePath}/images/about/Joanne-Zabudsky.jpg`}
                alt="joanne zabudsky"
                width={361}
                height={361}
                priority={true}
              />
            </div>
            <div>
              <h2>In Loving Memory of Joanne Zabudsky,</h2>
              <p>Joanne was many things to many people, yet to us she was our beloved Fine Arts Studio Coordinator for over 30 years.  She was the glue that held the Fine Arts program together. And although Joanne never sought the limelight, it is important that she is gratefully and publicly acknowledged for all that she contributed to Langara’s culture, students’ lives, and her enduring legacy across Canada.</p>
              <p>Current faculty and staff - many of whom are alums of this program - and the many others she touched in her role at Langara, reflect on the goodness and strength that was Joanne. We all feel a great sense of loss. She lives on in our memories as someone who was always available to lend a hand, to speak words of wisdom, or be a shoulder to lean on. To both the history of Langara and to us as individuals, her contribution will never be forgotten.</p>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.bgGray} ${styles.langaraApplySection}`}>
          <div className={styles.wrapper}>
            <div className={`${styles.personPortrait} ${styles.textAlignRight}`}>
              <h2>Langara Fine Arts</h2>
              <Image
                src={`${imageBasePath}/images/about/Langara-Fine-Arts-New.jpg`}
                alt="langara fine arts"
                width={361}
                height={361}
                priority={true}
                className={styles.langaraFineArtsImage}
              />
            </div>
            <div>
              <p>The Langara Fine Arts diploma program is a two-year studio art foundation that emphasizes hands-on material-based skills within a supportive community of makers, learners, and thinkers. Langara Fine Arts is committed to a culture of humility and respect.</p>
            </div>
            <div>
              <p>Students have the opportunity to study drawing, design, painting, sculpture, foundry, printmaking, Indigenous carving, ceramics, textile art, media, performance and public art. Our tuition is affordable, and our courses are university transferable. Langara Fine Arts alumni go on to study at respected universities throughout Canada and beyond.</p>
            </div>
            <div className={styles.applyOnlineContainer}>
              <p>For information on admissions to the Langara Fine Arts program contact<br /><a href="mailto:admissions@langara.ca"><strong>admissions@langara.ca</strong></a></p>
              <p>
                <Link href="https://langara.ca/programs-and-courses/programs/fine-arts/application-info.html" className={styles.applyOnlineBtn} target="_blank">Apply online today!</Link>
              </p>
            </div>
          </div>
        </section>

      </main>

      <Footer />
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
              artistList: artistList?.artists2023?.nodes,
              artists: artists?.artworks2023?.nodes  
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