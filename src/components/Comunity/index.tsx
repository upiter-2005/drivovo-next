'use client'
import Slider, { Settings } from "react-slick";
import Image from "next/image"
import slb_rightBig from "@/assets/img/slb-rightBig.png"
import slb_leftBig from "@/assets/img/slb-leftBig.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/assets/css/comunity.scss"
import styles from "./Comunity.module.scss"



import { useRef, useState } from "react"

import sl1 from "@/assets/img/sl1.jpg"
import sl2 from "@/assets/img/sl2.jpeg"
import sl3 from "@/assets/img/sl3.jpeg"
import sl4 from "@/assets/img/sl4.jpeg"
import sl5 from "@/assets/img/sl5.jpeg"
import sl6 from "@/assets/img/sl6.jpeg"
import sl7 from "@/assets/img/sl7.jpeg"
import sl8 from "@/assets/img/sl8.jpeg"

function SampleNextArrow(props: any) {  
  const {  onClick } = props;
  return (
    <div
      className="nextArrow"
      onClick={onClick}
    >
      <Image src={slb_rightBig} width={30} height={30} alt="" className="shadowArr"/>
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div
    className="prevArrow"
      onClick={onClick}
    > <Image src={slb_leftBig} width={30} height={30} alt="" className="shadowArr" /></div>
  );
}



const slidersImg = [
  sl1, sl2, sl3, sl4, sl5, sl6, sl7, sl8
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
              <Image src={img} alt='drivovo' fill={true} />
            </div>
          ))}

        </Slider>
      </div> 
    </>
  )
}