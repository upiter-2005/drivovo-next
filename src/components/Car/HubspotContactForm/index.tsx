import React, {useEffect} from "react";
import styles from "./HubspotContactForm.module.scss"
 
interface IHubspotContactForm  {
    id: string
}
export const HubspotContactForm:React.FC<IHubspotContactForm> = ({id}) => {

    return (
        <div className={styles.hbfContainer}>
            <p className={styles.title}>Завантажити графік платежів</p>
             <button className={`${id} ${styles.redBtn}`}  >Завантажити</button> 
           
        </div>
    );

}

