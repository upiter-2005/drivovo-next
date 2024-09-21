/* eslint-disable @next/next/no-img-element */
import styles from "./Modal.module.scss"
import "@/assets/css/comunity.scss"
import Slider from 'react-slick'
import { ImageObj } from "../TopData"

function SampleNextArrow(props: any) {
  const {  onClick } = props
  return (
      <img src="/img/sl-right.png" alt="drivovo" className='sliderArrowA arrowRightA' onClick={onClick} />
  )
}

function SamplePrevArrow(props: any) {
  const { onClick } = props
  return (
    <img src="/img/sl-left.png" alt="" className='sliderArrowA arrowLeftA' onClick={onClick} />
  )
}

interface IModal {
  currentIndex: number
  images: ImageObj[]
  onClick: () => void
}



export const Modal:React.FC<IModal> = ({currentIndex, images, onClick}) => {
 
  const modalSlider = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: currentIndex,
    accessibility: true,
    adaptiveHeight: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    
  };
  return (
    <div className={styles.modal} onClick={onClick}>
        <div className={styles.modalInner} onClick={e => e.stopPropagation()}>
          <div className={styles.close} onClick={onClick}><img src="/img/close.svg" alt="drivovo - close" /></div>
        <Slider {...modalSlider} className={` modalSlider` } >

             {images?.map((obj, i) => 
                <img src={obj.full_image_url} alt="drivovo" key={i} className={styles.activeImg}  />
            )} 
            </Slider>
        </div>
    </div>
  )
}
