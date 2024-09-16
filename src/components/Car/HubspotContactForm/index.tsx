import React, {useEffect} from "react";
import styles from "./HubspotContactForm.module.scss"
 
interface IHubspotContactForm  {
    id: string
}
export const HubspotContactForm:React.FC<IHubspotContactForm> = ({id}) => {

  
    //useEffect(() => {
    //     let formId = id;
    //     const script = document.createElement('script');
    //    script.src='https://js.hsforms.net/forms/v2.js';
    //     document.body.appendChild(script);

    //     script.addEventListener('load', () => {
    //         // @TS-ignore
    //         if (window.hbspt) {
    //             // @TS-ignore
    //             window.hbspt.forms.create({
    //                 portalId: '20308897',
    //                 formId ,
    //                 target: '#hubspotForm'
    //             })
    //         }
    //     });


        // if(window.fbq){
        //     window.fbq('track', 'ViewContent', { 
        //         content_type: 'Product',
        //         content_ids: [id]
               
        //       })
        // }


    //}, []);

    return (
        <div className={styles.hbfContainer}>
            <p className={styles.title}>Завантажити графік платежів</p>
             <button className={`${id} ${styles.redBtn}`}  >Завантажити</button> 
           
        </div>
    );

}

