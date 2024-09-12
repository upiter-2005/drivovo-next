
import styles from "./Footer.module.scss";
import Image from 'next/image'
import mainlogo from "@/assets/img/main-logo.svg"
import insta from "@/assets/img/insta.svg"
import youtube from "@/assets/img/youtube.svg"
import fb from "@/assets/img/fb.svg"
import linkedIn from "@/assets/img/in.svg"
import tiktok from "@/assets/img/tiktok.svg"
// import  Link  from "next/link";
// import ModalForm from "../ModalForm"

export default function Footer() {

  return (
    <>
    {/* {modalForm &&  <ModalForm />} */}
    
   
    <footer className={styles.footer_box}>
      <div className={styles.footer_wrap}>
        <div className={styles.block_1}>
          <a href="https://drivovo.com" className={styles.footerLogo}>
            <Image src={mainlogo} alt="drivovo" />
          </a>
          <div>
            <a
              href="https://www.instagram.com/drivovoofficial/"
              target="blank"
              className={styles.soc_ico}>
              <Image src={insta} alt="drivovo instagramm" />
            </a>
            <a href="https://www.youtube.com/@drivovo" target="blank" className={styles.soc_ico}>
              <Image src={youtube} alt="drivovo youtube" />
            </a>
            <a
              href="https://www.facebook.com/DrivovoClub"
              target="blank"
              className={styles.soc_ico}>
              <Image src={fb} alt="drivovo facebook" />
            </a>
            <a
              href="https://www.linkedin.com/company/drivovo/"
              target="blank"
              className={styles.soc_ico}>
              <Image src={linkedIn} alt="drivovo linkedIn" />
            </a>
            <a
              href="https://www.tiktok.com/@drivovoofficial"
              target="blank"
              className={styles.soc_ico}>
              <Image src={tiktok} alt="drivovo TikTok" />
            </a>
          </div>
          <a href="tel:+380634128840" className={styles.tel}>
            +380 63 412 8840
          </a>
        </div>

        <div className={styles.mnu_Items}>

          <div className={styles.block_2}>
            <p>Меню</p>
            
            <div>
              {/* <a href="#">Для бізнесу</a>
              <a href="#">Події</a>
              <a href="#">Партнерам</a> */}
              {/* <a href="#">Сервіси</a> */}
             <a href="https://drivovo.com/flex/">Flex</a>
              <a href="https://drivovo.com/outlet/">Outlet</a>
              <a href="https://drivovo.com/beta-test/">Beta-test</a>
              <a href="https://drivovo.com/blog/">Блог</a>
              <a href="https://drivovo.com/questions/">FAQ</a>
              <a href="https://drivovo.com/kontakty/">Контакти</a>
              
            </div>
          </div>
          <div className={styles.block_3}>
            <p>Автопарк</p>
            <div className={styles.modelsLinks}>
            
              {/* {cars?.filter(obj => obj.properties?.Footer?.select?.name === "+")
              .map((obj, i) => <a href={`/offer/${obj.properties.URL.rich_text[0]?.plain_text}`} key={obj.url}>{obj.properties.car_name.rich_text[0].plain_text}</a>)
              } */}
            
            </div>
          
          </div>
        </div>
        
      </div>
      <div className={styles.copy}>©2020 - 2024 Drіvovo. All rights reserved.</div>
    </footer>
    </>

  );
}
