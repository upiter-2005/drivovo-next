/* eslint-disable @next/next/no-img-element */
'use client'
import Image from 'next/image'
import styles from "./TopData.module.scss"
import clock from "@/assets/img/clock-ico.svg"
import red_check from "@/assets/img/red-check.svg"
import Slider from 'react-slick'
import { useState } from 'react'
import { Modal } from '../Modal'
import { trackFbPurchase } from '@/helpers/fb'

export type ImageObj = {
  id: number
  title: string
  caption: string
  full_image_url: string
  thumbnail_image_url: string
  large_srcset: string
  medium_srcset: string
  url: string
  target: string
}

interface ICarObj {
  id: string
  carName?: string
  editedTime?: string
  sandpulseForm?: string
  photo: any[],
  price?: number,
  calc?: any,
  media: ImageObj[]
}

function SampleNextArrow(props: any) {
  const {  onClick } = props
  return (
      <img src="/img/sl-right.png" alt="drivovo" className='sliderArrow arrowRight' onClick={onClick} />
  )
}

function SamplePrevArrow(props: any) {
  const { onClick } = props
  return (
    <img src="/img/sl-left.png" alt="drivovo" className='sliderArrow arrowLeft' onClick={onClick} />
  )
}

export const TopData:React.FC<ICarObj> = ({id, calc,  carName, editedTime, sandpulseForm, photo, price, media}) => {

console.log(media);

  const [activeNumSlide, setActiveNumSlide] = useState<number>(1)
  const [isModal, setIsModal] = useState<boolean>(false)

  const topSlider = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (current: number, next: number) => {
      setActiveNumSlide(state=> next + 1 )
    }
  };

  return(
    <div className={styles.appContainer}>
      <div className={styles.box}>
        <div className={styles.offer_1}>
          <div className={`${styles.left} offerSlider`} >
              <img src="/img/zoom.png" className={styles.zoom} alt="drivovo zoom" onClick={()=>setIsModal(true)} /> 
              <Slider {...topSlider} className={`${styles.topCarousel} mainSlider` }>
                  <div key="mnphImg1" style={{ width: "100%" }} className={styles.sliderItem} >
                      <img src={media[0].full_image_url} 
                      className={styles.sliderTopImg} 
                      alt="" />
                  </div>
                {media.map((img, idx) => (
                  idx !== 0 && ( <div  key={idx} style={{ width: "100%" }} className={styles.sliderItem} >
                    <img src={img.full_image_url} alt='drivovo' className={styles.sliderTopImg}  />
                </div>)
                ))}
            </Slider>
          
            <div className={styles.slideNumWrapper}>
               <div className={styles.digits}> {activeNumSlide }/{photo?.length + 1}</div>
             
            </div>
           
            {isModal && <Modal currentIndex={activeNumSlide} images={media} onClick={()=>setIsModal(false)} />}
            
            <div className={styles.foto_squre}>
            {media.map((img: any, idx: number) => (
              idx !== 0 && (
                <div  key={idx}  className={styles.foto_squreItem} >
                <img src={img.full_image_url}
                 alt={`Drivovo - ${carName}`}
                // idx={idx}
                  onClick={()=>setIsModal(true)} 
                  />
              </div>
              )
                
                ))}
            </div>

          </div>
      
          <div className={styles.right}>
            <div className={styles.right_sticky}>
              <div className={styles.date}>Оновлено {editedTime?.substr(11,8)} {editedTime?.substr(0,10)} </div>
              <h1 className={styles.title}>{carName}</h1>
              <div className={styles.descr}>Авто в наявності, сів та поїхав за 30 хвилин</div>
              <div className={styles.price}>  
            ${price}    
           
              <p className={styles.perMonth}>щомісячний платіж</p>
            </div>
            <a href="#" className={`${styles.offerBtn} ${sandpulseForm} `} onClick={()=>trackFbPurchase(id, price)}>Замовити авто</a>

          
            
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