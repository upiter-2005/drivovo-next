'use client'

import styles from "./Header.module.scss"
import Link from  'next/link'
import Image from 'next/image'
import logo from '@/assets/img/main-logo.svg'
import mnuBtn from '@/assets/img/bar.svg'

 const Header = function Header() {
  
  return (
  
      <header className={styles.headerWrapper}>
      
        <div className={styles.header}>
          <Link href="https://drivovo.com" className={styles.logo}><Image src={logo} width={150} height={56} alt="" /></Link>
          <a href="#"><Image src={mnuBtn} className={styles.bar} width={33} height={33} alt="Drivovo" onClick={()=>console.log('open mnu')} /></a>
          <div className={styles.rightHeader}>
              <ul className={styles.topMnuList}>
              
                  <li className={styles.parentLi} key="hItem1">
                    <a href="/" className={styles.mnuLink}>Автопарк 
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                      <path d="M5.33215 9.24441L0.996666 4.90891C0.78757 4.69981 0.78757 4.36081 0.996666 4.15174L1.50233 3.64608C1.71107 3.43734 2.04938 3.43693 2.25861 3.64518L5.71074 7.08114L9.16286 3.64518C9.37209 3.43693 9.71039 3.43734 9.91913 3.64608L10.4248 4.15174C10.6339 4.36084 10.6339 4.69983 10.4248 4.90891L6.08934 9.24441C5.88024 9.45349 5.54124 9.45349 5.33215 9.24441Z" fill="#23262A"/>
                    </svg>
                      </a>
                      <ul className={styles.childMnu}>
                      {/* {cars?.filter(obj => obj.properties?.Footer?.select?.name === "+").map((obj, i) =>
                        <li key={i}><Link to={`/offer/${obj.properties.URL.rich_text[0]?.plain_text}`} key={obj.url}>{obj.properties.car_name.rich_text[0].plain_text}</Link></li>)} */}
                          
                      </ul>
                  </li>
                  <li key="hItem23" className={styles.topMnuListLi}><a href="https://drivovo.com/outlet/" className={styles.mnuLink}>Outlet</a></li>
              <li key="hItem246" className={styles.topMnuListLi}><a href="https://drivovo.com/flex/" className={styles.mnuLink}>Flex</a></li>
              <li key="hItem24" className={styles.topMnuListLi}><a href="https://drivovo.com/beta-test/" className={styles.mnuLink}>Beta-test</a></li>
                  <li key="hItem2" className={styles.topMnuListLi}><a href="https://drivovo.com/blog/" className={styles.mnuLink}>Блог</a></li>
                  <li key="hItem3" className={styles.topMnuListLi}><a href="https://drivovo.com/questions/" className={styles.mnuLink}>FAQ</a></li>
                  <li key="hItem4" className={styles.topMnuListLi}><a href="https://drivovo.com/kontakty/" className={styles.mnuLink}>Контакти</a></li>
              </ul>
              <button className={`${styles.headerBtn} sp_popup_47e55cb9-bd9e-42b5-84c4-eb25602b9154`} >Хочу тест-драйв</button>
          </div>
        </div>
    </header>
  
  )
}

export default Header;