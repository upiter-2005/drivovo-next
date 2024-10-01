/* eslint-disable @next/next/no-img-element */
import { ImageObj } from "../Car/TopData"
import styles from "./OfferImage.module.scss"

interface IOfferImage {
  media: ImageObj[]
}

export const OfferImage:React.FC<IOfferImage> = ({media}) => {
  return(
    <div className={styles.offerImage} style={{"backgroundImage": `url(${media[0].full_image_url})`}}>
       <h1 className={styles.title}>Прозора економіка в деталях</h1>
    </div>
     
    
  )
}