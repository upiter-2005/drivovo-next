/* eslint-disable @next/next/no-img-element */
import styles from './Notice2.module.scss'

export const Notice2:React.FC = () => {
  return (
    <>
      <section className={styles.titleSection}>
        <h2>
          Будуємо стосунки довжиною в <span>Життя</span>
        </h2>
        <p>Та надаємо потужний бустер для для розвитку. </p>
      </section>

      <section className={styles.notice2}>
        <div className={styles.imgPart}>
          <img src="../img/seo.jpeg" alt="" />
        </div>
        <div className={styles.leftPart}>
          <h2>
            Наша ціль — звільнити час та думки людей, які розвивають бізнес та технології, надати їм
            швидкості та комфорту в житті.
          </h2>

          <div>
            <p className={styles.notice2_name}>Макс Соловйов</p>
            <p className={styles.notice2_descr}>CEO & Co-Founder DRIVOVO</p>
          </div>
        </div>
      </section>
    </>
    
  )
}