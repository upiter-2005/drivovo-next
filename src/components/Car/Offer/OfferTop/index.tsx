'use client'
/* eslint-disable @next/next/no-img-element */
import { useRef, useState } from "react"
import Slider, { Settings } from "react-slick"
import styles from "./OfferTop.module.scss"

interface ITopData {
  media: any[]
  title: string
  text: string
}

function SampleNextArrow(props: any) {
  const {  onClick } = props
  return (
      <img src="/img/redArr.svg" alt="drivovo" className='offerArr offerArr-right' onClick={onClick} />
  )
}

function SamplePrevArrow(props: any) {
  const { onClick } = props
  return (
    <img src="/img/redArr.svg" alt="" className='offerArr offerArr-left' onClick={onClick} />
  )
}

export const OfferTop:React.FC<ITopData> = ({media, title, text}) => {
  const [imageIndex, setImageIndex] = useState<number>(0);
  const sliderRef = useRef<Slider>(null)

  const settings: Settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: '0',
    centerMode: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    className: "offerCarSlider",
    beforeChange: (current: number, next: number) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          centerPadding: "24px",
          centerMode: true,
        },
      },
    ],
  };


  return (
    <>
    <div className={styles.offerDescr}>
        <h2>{title}</h2>
        <div className={styles.descrBlock}>
          {text}
        </div>
      </div>

      <div>
        <Slider 
        {...settings} ref={sliderRef} >
          {media.map((img, idx) => (
            <div className={idx === imageIndex ? "offer-slide offerActiveSlide" : "offer-slide"} key={idx}>
              <img src={img.full_image_url} alt={img} />
            </div>
          ))}
        </Slider>
      </div>
      </>
  )
}