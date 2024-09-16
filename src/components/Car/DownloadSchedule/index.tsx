import Image from 'next/image'
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
        <Image src={cover} fill={true} className={styles.coverImg} alt="drivovo" />
      </div>
    
     {sendPulse && <HubspotContactForm id={sendPulse} />}
        
  </div>
  )
}