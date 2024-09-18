/* eslint-disable @next/next/no-img-element */

import { Client } from "@notionhq/client"
const notion = new Client({ auth: process.env.NOTION_AUTH })
const databaswId = process.env.NOTION_DB_ID
import styles from "./Footer.module.scss";

import Link from "next/link";


export default async function Footer() {
  const cars: any = await notion.databases.query({
    database_id: databaswId || '',
    sorts: [
      {
        property: "Name", 
        direction: "ascending",
      },
    ],
    filter: {
      property: "Status",
      status: {
        equals: 'Done'
      }
    },
  });

  if(!cars.results) return(<p>Error</p>)
  return (
    <footer className={styles.footer_box}>
      <div className={styles.footer_wrap}>
        <div className={styles.block_1}>
          <a href="https://drivovo.com" className={styles.footerLogo}>
            <img src="/img/main-logo.svg" alt="drivovo" />
          </a>
          <div>
            <a
              href="https://www.instagram.com/drivovoofficial/"
              target="blank"
              className={styles.soc_ico}>
              <img src="/img/insta.svg" alt="drivovo instagramm" />
            </a>
            <a href="https://www.youtube.com/@drivovo" target="blank" className={styles.soc_ico}>
              <img src="/img/youtube.svg" alt="drivovo youtube" />
            </a>
            <a
              href="https://www.facebook.com/DrivovoClub"
              target="blank"
              className={styles.soc_ico}>
              <img src="/img/fb.svg" alt="drivovo facebook" />
            </a>
            <a
              href="https://www.linkedin.com/company/drivovo/"
              target="blank"
              className={styles.soc_ico}>
              <img src="/img/in.svg" alt="drivovo linkedIn" />
            </a>
            <a
              href="https://www.tiktok.com/@drivovoofficial"
              target="blank"
              className={styles.soc_ico}>
              <img src="/img/tiktok.svg" alt="drivovo TikTok" />
            </a>
          </div>
          <a href="tel:+380634128840" className={styles.tel}>
            +380 63 412 8840
          </a>
        </div>

        <div className={styles.mnu_Items}>

          <div className={styles.block_2}>
            <p className={styles.block_2_title}>Меню</p>
            
            <div>
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
            
              {cars.results.map((obj: any, i: number) => <Link href={`/car/${obj.properties.URL.rich_text[0]?.plain_text}`} key={obj.url}>{obj.properties.car_name.rich_text[0].plain_text}</Link>)
              }
            
            </div>
          
          </div>
        </div>
        
      </div>
      <div className={styles.copy}>©2020 - 2024 Drіvovo. All rights reserved.</div>
    </footer>
    

  );
}
