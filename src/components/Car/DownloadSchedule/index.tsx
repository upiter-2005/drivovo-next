/* eslint-disable @next/next/no-img-element */
import styles from "./DownloadSchedule.module.scss"
import {HubspotContactForm} from "@/components/Car/HubspotContactForm"

interface IDowloadSchedule {
  cover: string,
  sendPulse: string
}

export const DownloadSchedule:React.FC<IDowloadSchedule> = ({cover, sendPulse}) =>{
  return(
    <div className={styles.hbsp_box}>
       <div className={styles.hbsp_box_img}>
        <img src={cover}  className={styles.coverImg} alt="drivovo" />
      </div>
    
     {sendPulse && <HubspotContactForm id={sendPulse} />}
        
  </div>
  )
}