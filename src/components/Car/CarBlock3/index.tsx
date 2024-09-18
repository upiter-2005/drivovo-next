/* eslint-disable @next/next/no-img-element */
import styles from "./CarBloc3.module.scss"

interface ICarBlock3 {
  bottom_cover: string
}

export const CarBlock3:React.FC<ICarBlock3> = ({bottom_cover }) => {

  return(
  <>
    <section className={styles.titleSection}>
      <h2 className={styles.customH2}>
        Будуємо стосунки довжиною в <span>Життя</span>
      </h2>
      <p>Та надаємо потужний бустер для розвитку. </p>
    </section>

  <section className={styles.notice2}>
    <div className={styles.imgPart}>
      <img src="/img/seo.jpeg" alt="" />
    </div>
    <div className={styles.leftPart}>
      <h2 className={styles.customH2}>
        Наша ціль — звільнити час та думки людей, які розвивають бізнес та технології, надати їм
        швидкості та комфорту в житті.
      </h2>

      <div>
        <p className={styles.notice2_name}>Макс Соловйов</p>
        <p className={styles.notice2_descr}>CEO & Co-Founder DRIVOVO</p>
      </div>
    </div>
  </section>
  {/* <div className={styles.driveEasy}>Drive IT easy!</div> */}
  
  <section className={styles.titleSection}>
    <h2 className={styles.customH2}>
      Drivovo - ікігай твого автомобіля
    </h2>
  </section>

  <div className={styles.hbsp_box}>

    <div className={styles.hbfContainer}>
            <p className={styles.title}>Замовити тест-драйв</p>
            {/* <div id="hubspotFormBottom" className={styles.hubspotForm}></div> */}
            <button className={`${styles.hubspotForm} ${styles.redBtn} sp_popup_47e55cb9-bd9e-42b5-84c4-eb25602b9154 `}>go drivovo</button>
        </div>
    <div className={styles.hbsp_box_img}>
      <img src={bottom_cover} alt="" />
    </div> 
  </div>
  </>
    
  )
}