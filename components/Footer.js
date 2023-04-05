import React from 'react'
import styles from '@/styles/Footer.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { imageBasePath } from '@/config/data_config'
import TopRightArrow from './svg/TopRightArrow'

const Footer = () => {
  return (
    <footer className={styles.siteFooter}>
      <div className={styles.wrapper}>
        <div>
          <h3>Fine Arts Grad Show 2023</h3>
          <ul>
            <li>
              <Link href="/artists">Artists</Link>
            </li>
            <li>
              <Link href="/studios">Studios</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>Previous showcase</h3>
          <ul>
            <li>
              <Link href="https://past.langarafinagradshow.com/2022">2022</Link>
            </li>
            <li>
              <Link href="https://past.langarafinagradshow.com/2021">2021</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>How to Apply</h3>
          <div className={styles.howToApply}>
            <div>
                <Image
                  src={`${imageBasePath}/images/about/Langara-Fine-Arts-New.jpg`}
                  alt="langara fine arts"
                  width={132}
                  height={132}
                  priority={true}
                  className={styles.footerFAImage}
                />
            </div>
            <div>
              <p>Learn all about our Fine Arts program, admissions, career paths, and more on our program&apos;s website.</p>
              <p>
                <Link href="https://langara.ca/programs-and-courses/programs/fine-arts/application-info.html" target="_blank" className={styles.footerApplyLink}>Department of Fine Arts <TopRightArrow /></Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer