import styles from "./AvtoparkTop.module.scss"

export const AvtoparkTop:React.FC = () => {
  return(
    <div className={styles.avtoparkTop}>
       <h1>Aвтопарк <span>Drivovo</span> </h1>
        <p>Автохаб для справжніх поціновувачів — спешл фор ю! Пристебни паски безпеки, бо з нашим автопарком захочеться ще більше драйву! А якщо не знайшов бажану тачку — залишай запит, ми зробимо все можливе, щоб задовольнити твою автомобільну мрію!</p>
    </div>
     
    
  )
}