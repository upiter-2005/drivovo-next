'use client'
import React, {useEffect} from "react";
import styles from "./HubspotContactForm.module.scss"
import { trackFbPurchase } from "@/helpers/fb";
 
interface IHubspotContactForm  {
    id: string,
    price: number
}
export const HubspotContactForm:React.FC<IHubspotContactForm> = ({id, price}) => {

    return (
        <div className={styles.hbfContainer}>
            <p className={styles.title}>Завантажити графік платежів</p>
             <button className={`${id} ${styles.redBtn}`} onClick={()=>trackFbPurchase(id, price)} >Завантажити</button> 
           
        </div>
    );

}

