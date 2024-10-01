/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_wrap}>
        <div className={styles.block_1}>
          <a href="https://drivovo.com">
            <img src="/img/logo.svg" alt="" />
          </a>
          <div>
            <a
              href="https://www.instagram.com/drivovoofficial/"
              target="blank"
              className={styles.soc_ico}>
              <img src="/img/insta.svg" alt="" />
            </a>
            <a href="https://www.youtube.com/@drivovo" target="blank" className={styles.soc_ico}>
              <img src="/img/youtube.svg" alt="" />
            </a>
            <a
              href="https://www.facebook.com/DrivovoClub"
              target="blank"
              className={styles.soc_ico}>
              <img src="/img/fb.svg" alt="" />
            </a>
            <a
              href="https://www.linkedin.com/company/drivovo/"
              target="blank"
              className={styles.soc_ico}>
              <img src="/img/in.svg" alt="" />
            </a>
            <a
              href="https://www.tiktok.com/@drivovoofficial"
              target="blank"
              className={styles.soc_ico}>
              <img src="/img/tiktok.svg" alt="" />
            </a>
          </div>
          <a href="tel:+380634128840" className={styles.tel}>
            +380 63 412 8840
          </a>
        </div>

        <div className={styles.block_2}>
          <p>Офіс Drivovo</p>
          <div>
            <span>Київ, Ярославська 58</span>
            <span>Прокласти маршрут:</span>
          </div>
          <div>
            <a
              href="https://www.google.com/maps/dir//%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%AF%D1%80%D0%BE%D1%81%D0%BB%D0%B0%D0%B2%D1%81%D1%8C%D0%BA%D0%B0,+58,+%D0%9A%D0%B8%D1%97%D0%B2,+02000/@50.4720015,30.436195,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x40d4cfb76339897f:0x84ce2d231f10a141!2m2!1d30.5185953!2d50.4720306?entry=ttu"
              target="blank">
              Google Maps
            </a>
            <a href="#" target="blank">
              Apple Maps
            </a>
            <a
              href="https://www.waze.com/live-map/directions?to=ll.50.472157%2C30.518711"
              target="blank">
              Waze
            </a>
          </div>
        </div>
        <div className={styles.block_3}>
          <p>Документи для ознайомлення</p>
          <a
            href="https://drive.google.com/file/d/1q6eGmfssxAF5XCCRGYWgmi5nohYLV8i8/view"
            target="blank">
            Договір на підписку
          </a>
          <a
            href="https://drive.google.com/file/d/1mIJzkhcrb2pVHw3T0WpQR4qNkyFHxvRs/view"
            target="blank">
            Додаток Графік ТО
          </a>
          <a
            href="https://drive.google.com/file/d/12KE_9QSwneM_rflg0xBHb4A-xs_0k7fu/view"
            target="blank">
            Акт приймання-передачі
          </a>
          <a
            href="https://drive.google.com/file/d/1HuVpFY6VNAn6SovEC85KqdD41FMy5KHM/view"
            target="blank">
            Визначення зносу
          </a>
          <a
            href="https://drive.google.com/file/d/1ionxONTbgwoRHypQ4drzLODiaon91q5p/view"
            target="blank">
            Договір викупу авто
          </a>
          <a
            href="https://drive.google.com/file/d/1ionxONTbgwoRHypQ4drzLODiaon91q5p/view?usp=drive_link"
            target="blank">
            Умови страхування
          </a>
        </div>
      </div>
      <div className={styles.copy}>©2020 - 2024 Drіvovo. All rights reserved.</div>
    </footer>
  );
}
