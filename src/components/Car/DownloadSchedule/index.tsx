/* eslint-disable @next/next/no-img-element */
import { ImageObj } from "../TopData"
import styles from "./DownloadSchedule.module.scss"
import {HubspotContactForm} from "@/components/Car/HubspotContactForm"

interface IDowloadSchedule {
  cover: string,
  sendPulse: string,
  media: ImageObj[],
  price: number
}

export const DownloadSchedule:React.FC<IDowloadSchedule> = ({cover, sendPulse, media, price}) =>{
  return(
    <div className={styles.hbsp_box}>
       <div className={styles.hbsp_box_img}>
        <img src={media[1].full_image_url}  className={styles.coverImg} alt="drivovo" />
      </div>
    
     {sendPulse && <HubspotContactForm id={sendPulse} price={price} />}
        
  </div>
  )
}