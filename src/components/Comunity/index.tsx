/* eslint-disable @next/next/no-img-element */
'use client'
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/assets/css/comunity.scss"
import styles from "./Comunity.module.scss"



import { useRef, useState } from "react"

function SampleNextArrow(props: any) {  
  const {  onClick } = props;
  return (
    <div
      className="nextArrow"
      onClick={onClick}
    >
      <img src="/img/slb-rightBig.png" width={30} height={30} alt="" className="shadowArr"/>
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div
    className="prevArrow"
      onClick={onClick}
    > <img src="/img/slb-leftBig.png" width={30} height={30} alt="" className="shadowArr" /></div>
  );
}



const slidersImg = [
  '/img/sl1.jpg', 
  '/img/sl2.jpeg', 
  '/img/sl3.jpeg', 
  '/img/sl4.jpeg', 
  '/img/sl5.jpeg', 
  '/img/sl6.jpeg', 
  '/img/sl7.jpeg', 
  '/img/sl8.jpeg', 
]

export const Comunity:React.FC = () => {
  const comunityRef = useRef()
  const [imageIndex, setImageIndex] = useState<number>(0)


  const comunitySlider: Settings = {
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    centerMode: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (current: number, next: number) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 992,
        settings: {
         // className: "center",
          slidesToShow: 1,
          centerPadding: "24px",
          centerMode: true,
        },
      },
    ],
  };

  return (
    
    <>
     <section className={`${styles.titleSection} ${styles.noMobPadding}`}>
        <h2 className={styles.customH2}>
          Приєднуйся до ком&lsquo;юніті Drivovo <span>Pride</span>
        </h2>
        <p>Це як потужний двигун та комфортний салон життя.</p>
      </section>
    

     <div>
        
        <Slider {...comunitySlider} className="carComunitySlider" >
          
          {slidersImg?.map((img, idx) => (
            <div className={idx === imageIndex ? "slide activeSlide" : "slide"} key={idx}>
              <img src={img} alt='drivovo' />
            </div>
          ))}

        </Slider>
      </div> 
    </>
  )
}