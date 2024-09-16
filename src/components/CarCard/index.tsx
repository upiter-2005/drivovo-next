/* eslint-disable @next/next/no-img-element */
import styles from "./CarCard.module.scss";
import SkeletonImage from "@/components/Skeleton";
import Link from 'next/link'
// import ModalForm from "../ModalForm"

export default function CarCard({...obj}) {

  return (
    <div className={styles.carItem}>
    {obj.properties.label_status.select.name === "Доступно" &&    <div className={`${styles.label} ${styles.aval}`}>Доступно</div>}
    {obj.properties.label_status.select.name === "Під замовлення" &&    <div className={`${styles.label} ${styles.zakaz}`}>Під замовлення</div>}
    {obj.properties.label_status.select.name === "Очікуємо" &&    <div className={`${styles.label} ${styles.waiting}`}>Очікуємо</div>}
    {obj.properties.label_status.select.name === "Останнє авто" &&    <div className={`${styles.label} ${styles.lastAvto}`}>Останнє авто</div>}

    {!obj.properties.Cover.files[0].file.url
     ? 
    // (<SkeletonImage />)
     (<p>Loading</p>)
     : 
    (<img src={obj.properties.Cover.files[0].file.url}  style={{
      width: '100%',
      height: 'auto',
    }} alt={`Drivovo ${obj.properties.label_status.select.name}`} />)
    }
    
    <p className={styles.carName}>{obj?.properties.car_name.rich_text[0].plain_text}</p>

    <div className={styles.props}>
        <span>Потужність</span>
        <span>{obj.properties.power.rich_text[0].plain_text}</span>
    </div>
  <div className={styles.props}>
        <span>Динаміка:</span>
        <span>{obj.properties.acceleration.rich_text[0].plain_text}</span>
  </div>
    
    <div className={styles.props}>
        <span>Витрати палива:</span>
        <span>{obj.properties.fuel_consumption.number} л/100 км</span>
    </div>
 

    {obj.properties.URL?.rich_text[0]?.plain_text === undefined ?
     <Link href={`/car/${obj.properties.URL.rich_text[0].plain_text}`} className="deActiveBtn" > Coming soon</Link>
      :
       <a href={`/car/${obj.properties.URL.rich_text[0].plain_text}`} >Подивитись</a> }
  
 
</div>

  );
}
