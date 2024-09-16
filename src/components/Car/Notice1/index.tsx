import Image from "next/image"
import styles from './Notice1.module.scss'
import notice1 from "@/assets/img/notice1.jpeg"


export const Notice1:React.FC = () => {
  return (
    <section className={styles.notice1}>
        <div className={styles.imgPart}>
          <Image src={notice1}  alt="" />
        </div>
        <div className={styles.rightPart}>
          <h2 >Drivovo - ви фабрика автомобільного щастя!</h2>
          <div className={styles.textBlock}>
            Перший в моїй практиці клієнт-орієнтований сервіс в Україні. Хто не знає — все просто —
            це коли ти маєш авто та емоції, про які завжди мріяв, але без потреби купувати.
            Насправді це більше ніж просто послуга — ти частина драйвового ком‘юніті, спілкуєшся з
            прогресивними людьми, обмінюєшся авто, отримуєш нові і нові враження.
          </div>
          <div className={styles.notice1_flex}>
            <div>
              <p className={styles.notice1_name}>Alexandr Shevchenko</p>
              <p className={styles.notice1_descr}>
                Board Member/Chief Operating Officer у
                <a href="https://www.facebook.com/devoxsoftware" target="blank"> Devox Software</a>
              </p>
            </div>

            <a href="https://www.facebook.com/DrivovoClub/reviews" target="blank">
              читати усі відгуки
            </a>
          </div>
        </div>
      </section>
  )
}