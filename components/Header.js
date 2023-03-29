import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from '@/styles/Header.module.css'

const Header = ({ artistList, studioList, originPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMenuLinksOpen, setIsMenuLinksOpen] = useState(false)
  const [isArtistsListOpen, setIsArtistsListOpen] = useState(false)
  const [isStudiosListOpen, setIsStudiosListOpen] = useState(false)

  // whem main menu closed, reset states
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    setIsArtistsListOpen(false)
    setIsStudiosListOpen(false)

    // close menu links container when burger menu is closed
    if (setIsMenuOpen) {
      setIsMenuLinksOpen(false)
    }
  }

  // toggle menu links container
  const toggleMenuLinks = (linksToShow) => {
    if (linksToShow == 'artists') {
      setIsArtistsListOpen(!isArtistsListOpen)
    } else if (linksToShow == 'studios') {
      setIsStudiosListOpen(!isStudiosListOpen)
    }
    setIsMenuLinksOpen(!isMenuLinksOpen)
  }
  
  //Sort alphabetically
  let newArtistList = artistList.sort((a, b) => {
    if (a.artistFields.artistName < b.artistFields.artistName) return -1;
    if (a.artistFields.artistName > b.artistFields.artistName) return 1;
    return 0;
  })

  //To put (a) before artist name
  let prev = ""
  newArtistList.forEach(artist => {
    if(artist.artistFields.artistName[0] == prev) {
        artist.artistFields.isNewInitial = false
    } else {
        artist.artistFields.isNewInitial = true
        prev = artist.artistFields.artistName[0]
    }
  });

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer} style={{ backgroundColor: originPage == 'home' ? 'transparent' : '#FFFFFF', borderBottom: originPage == 'home' ? 'none' : '1px solid #181818' }}>
        <div className={styles.headerWrapper} style={{ justifyContent: originPage == 'home' && 'flex-end', maxWidth: originPage == 'home' && '100%' }}>
          {originPage != 'home' && (
            <div className={styles.headerTitle}>
              <span>Langara Fine Arts</span>
              <span>Graduation Exhibition 2023</span>
            </div>
          )}

          <div className={`${styles.burgerMenu} ${isMenuOpen && styles.burgerMenuOpen} ${isMenuLinksOpen && styles.burgerMenuLinksOpen}`} onClick={toggleMenu}>
            <div />
            <div />
            <div />
          </div>
        </div>
      </div>

      <div className={`${styles.menuContainer} ${isMenuOpen && styles.menuContainerOpen} ${isMenuLinksOpen && styles.menuLinksVisible}`}>
        <div className={styles.nav}>
          <div className={`${styles.navColumn} ${isStudiosListOpen && styles.hideArtistsMenu}`}>
            <h3 onClick={() => toggleMenuLinks('artists')}>Artists</h3>
            <span>1</span>
          </div>
          <div className={`${styles.navColumn} ${isArtistsListOpen && styles.hideStudiosMenu} ${isStudiosListOpen && styles.slideStudiosMenu}`}>
            <h3 onClick={() => toggleMenuLinks('studios')}>Studios</h3>
            <span>2</span>
          </div>
          <div className={`${styles.navColumn} ${isMenuLinksOpen && styles.hideAboutMenu}`}>
            <h3>
              <Link href="/about">About</Link>
            </h3>
            <span>3</span>
          </div>
        </div>

        <div className={`${styles.menuLinks} ${isMenuLinksOpen && styles.menuLinksOpen}`}>
          {isArtistsListOpen && (
            <div className={styles.artistList}>
              {newArtistList.map((artist, i) => (
                <div key={i} className={styles.artistName}>
                  {artist.artistFields.isNewInitial 
                  ?
                  <p className={styles.initial}> 
                      {artist.artistFields.artistName[0]}
                  </p> 
                  : 
                  <p className={styles.initial}></p> 
                  }
                  <Link href={`/artist/${artist.author.node.userId}`} >
                      {artist.artistFields.artistName}
                  </Link>
                </div>
              ))}
            </div>
          )}
          {isStudiosListOpen && (
            <div className={styles.StudiosLinks}>studios</div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header