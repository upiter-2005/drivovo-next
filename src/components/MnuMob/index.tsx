'use client'
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import styles from "./MnuMob.module.scss";
import Link from "next/link";
import Image from 'next/image'
import mnuBtn from '@/assets/img/bar.svg'

interface IMnuMob {
 
}

export const MnuMob:React.FC<IMnuMob> = ({}) => {
  const [openMnu, setOpenMnu] = useState<boolean>(false)
  return (
    <>
      <a href="#"><Image src={mnuBtn} className={styles.bar} width={33} height={33} alt="Drivovo" 
          onClick={()=>setOpenMnu(true)} 
        /></a>

    <nav className={openMnu ? `${styles.MnuMobile} ${styles.activeMobMnu}` : `${styles.MnuMobile}`}>
      <img src="/img/close.svg" className={styles.close} width={36} height={36} alt="" onClick={()=>setOpenMnu(false)} />

      <Link href="/" className={styles.logo} onClick={()=> {}}>
        <img src="/img/logo-mob.svg" alt="" />
      </Link >
      <ul className={styles.list}>
        <li>
          <Link href="/"  className={styles.navLink} onClick={()=>setOpenMnu(false)}>
            Автопарк
          </Link>
        </li>
        <li><a href="https://drivovo.com/flex/" className={styles.navLink}>Flex</a></li>
        <li><a href="https://drivovo.com/outlet/" className={styles.navLink}>Outlet</a></li>
        <li><a href="https://drivovo.com/beta-test/" className={styles.navLink}>Beta-test</a></li>
        <li>
          <a href="https://drivovo.com/blog/"  className={styles.navLink} onClick={()=> {}}>
            Блог
          </a>
        </li>
        <li>
          <a href="https://drivovo.com/questions/"  className={styles.navLink} onClick={()=> {}}>
            FAQ
          </a>
        </li>
        <li>
          <a href="https://drivovo.com/kontakty/"  className={styles.navLink} onClick={()=> {}}>
            Контакти
          </a>
        </li>
      </ul>
      <p className={styles.copyright}>©2023 - 2024 Drіvovo. All rights reserved.</p>
    </nav>
  </>
   
  );
}
