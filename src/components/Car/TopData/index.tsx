/* eslint-disable @next/next/no-img-element */
'use client'
import Image from 'next/image'
import styles from "./TopData.module.scss"
import clock from "@/assets/img/clock-ico.svg"
import red_check from "@/assets/img/red-check.svg"

interface ICarObj {
  cover: string
  carName: string
  editedTime: string
  sandpulseForm: string
  photo: any[]
}

export const TopData:React.FC<ICarObj> = ({cover, carName, editedTime, sandpulseForm, photo}) => {
console.log(carName);

  return(
    <div className={styles.appContainer}>
      <div className={styles.box}>
        <div className={styles.offer_1}>
          <div className={`${styles.left} offerSlider`} 
            //onClick={openModalArea}
           >
              {/* <img src="/img/zoom.png" className={styles.zoom} alt="drivovo zoom" /> */}
              {/* <Slider {...topSlider} className={`${styles.topCarousel} mainSlider` }>
                  <div key="mnphImg1" style={{ width: "100%" }} className={styles.sliderItem} >
                      <img src={car?.properties.Cover.files[0].file?.url} 
                      className={styles.sliderTopImg} 
                      alt="" />
                  </div>
                {images?.map((img, idx) => (
                  <div  key={idx} style={{ width: "100%" }} className={styles.sliderItem} >
                    <img src={img.file?.url} alt={img} className={styles.sliderTopImg}  />
                  </div>
                ))}
            </Slider> */}
          
            {/* <div className={styles.slideNumWrapper}>
               <div className={styles.digits}> {activeNumSlide }/{images?.length + 1}</div>
             
            </div> */}
           
            {/* {isModal && <Modal currentIndex={activeNumSlide} images={images} />} */}
            
            <div className={styles.foto_squre}>
            {photo?.map((img, idx) => (
                  <div  key={idx}  className={styles.foto_squreItem} >
                    <img src={img.file?.url}
                     alt={`Drivovo - ${carName}`}
                    // idx={idx}
                     //onClick={e => dispatch(openModal())}
                      />
                  </div>
                ))}
            </div>

          </div>
          {/* {(isModalSlider && !isMobile) ?  (<ModalSlider images={images} />) : ('')} */}
          <div className={styles.right}>
            <div className={styles.right_sticky}>
              <div className={styles.date}>Оновлено {editedTime.substr(11,8)} {editedTime.substr(0,10)} </div>
              <h1 className={styles.title}>{carName}</h1>
              <div className={styles.descr}>Авто в наявності, сів та поїхав за 30 хвилин</div>
              <div className={styles.price}>  
            {/* ${pricePerMonthStandart}     */}
           123123
              <p className={styles.perMonth}>щомісячний платіж</p>
            </div>
            {/* <a href="#" className={`${styles.offerBtn} ${car.properties.sandpulse_form.rich_text[0]?.plain_text} `} >Замовити авто</a> */}

          
            
            <div className={styles.garanty}>
              <Image src={clock} width={36} height={36} alt="Drivovo icon" />
              Гарантія на повернення депозиту 6 місяців
            </div>
            <p className={styles.titleBullet}>Авто комплектується:</p>
            
            <div className={styles.bullets}>

              <div className={styles.item}>
                <Image src={red_check} alt="Drivovo icon" />
                Повний бак, парасолька, вода, вино
              </div>
              <div className={styles.item}>
                <Image src={red_check} alt="Drivovo icon" />
                Органайзер для хімії та інструментів
              </div>
              <div className={styles.item}>
                <Image src={red_check} alt="Drivovo icon" />
                Комплект тех. допомоги
              </div>
              
            </div>
          </div>
          </div>
            
        </div>
      </div>
    </div>
    
  )
}