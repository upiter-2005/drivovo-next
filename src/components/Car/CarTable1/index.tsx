import Image from 'next/image'
import styles from "./CarTable1.module.scss"
import check from "@/assets/img/table-check.svg"
interface ICarTable1 {
  name: string
  price: number
  subscribeAvto: number
  taxes: number
  osago: number
  maintenance: number
  tires: number
  aditionals: number
  service: number
}

export const ICarTable1:React.FC<ICarTable1> = ({name, price, subscribeAvto, taxes, osago, maintenance, tires, aditionals, service}) => {


  return(<div className={styles.box}>
    <h3 className={styles.customH2}>Ти цього вартий👌 <br/> Що під капотом підписки?</h3>
      
      <div className={`${styles.table} ${styles.stripeNewTable} ${styles.pk_table}`}>
   
        <div className={styles.tableRowSubTitle}>
          <div className={`${styles.centerTitileRow} ${styles.leftAlign}`}>Підписка</div> 
          <div className={`${styles.centerTitileRow} ${styles.leftAlign}`}>Сервіс</div> 
         
        </div>
        <div className={styles.tableRow}>
          <span className={`${styles.tableItem} ${styles.tableItemNew}`}>Реєстрація авто + оплата податків (ПФ, податок на розкіш) 
          <Image src={check} alt="" /> </span>
          <span className={`${styles.tableItem} ${styles.tableItemNew}`}>
          Супровід страхових випадків, підмінне авто 
          <Image src={check} alt="" />
          </span>
        </div>
        <div className={styles.tableRow}>
          <span className={`${styles.tableItem} ${styles.tableItemNew}`}>Бронеплівка, тонування, килимки 
          <Image src={check}  alt="" />
          </span>
          <span className={`${styles.tableItem} ${styles.tableItemNew}`}>
          Драйвер ТО, СТО
          <Image src={check} alt="" />
          </span>
        </div>
        <div className={styles.tableRow}>
          <span className={`${styles.tableItem} ${styles.tableItemNew}`}>КАСКО+ОСАГО за 3 роки
          <Image src={check} alt="" /></span>

          <span className={`${styles.tableItem} ${styles.tableItemNew}`}>
          Доступ в комʼюніті Drivovo Pride
          <Image src={check} alt="" />
          </span>
        </div>
        <div className={styles.tableRow}>
          <span className={`${styles.tableItem} ${styles.tableItemNew}`}>Зимова гума, зберігання, шиномонтаж
          <Image src={check} alt="" /></span>
          <span className={`${styles.tableItem} ${styles.tableItemNew}`}>
          Дисконтний клуб Drivovo Loyalty
          <Image src={check} alt="" />
          </span>
        </div>
        <div className={styles.tableRow}>
          <span className={`${styles.tableItem} ${styles.tableItemNew}`}>Технічне обслуговування
          <Image src={check} alt="" /></span>
          <span className={`${styles.tableItem} ${styles.tableItemNew}`}>
          Інвестиції в Drivovo 10-12% річних в валюті
          <Image src={check} alt="" />
          </span>
        </div>
        <div className={styles.tableRow}>
          <span className={`${styles.tableItem} ${styles.tableItemNew}`}>Trade IN старого авто
          <Image src={check} alt="" /></span>
          <span className={`${styles.tableItem} ${styles.tableItemNew}`}>
          Тестування різних авто з Drivovo Hub
          <Image src={check} alt="" />
          </span>
        </div>
        <div className={styles.tableRow}>
          <span className={`${styles.tableItem} ${styles.tableItemNew}`}>Upgrade | Downgrade авто за підпискою 
          <Image src={check} alt="" /></span>
          <span className={`${styles.tableItem} ${styles.tableItemNew}`}>
          Захист кредитної історії
          <Image src={check} alt="" />
          </span>
        </div>
       
      </div>


      <div className={`${styles.table} ${styles.stripeNewTable} ${styles.mob_table}`}>
       
        <div className={styles.tableRowSubTitle}>
          <div className={`${styles.centerTitileRow} `}>Підписка</div> 
          
        </div>
        <div className={styles.tableRow}>
          <span className={`${styles.tableItem} ${styles.tableItemNew}`}>Реєстрація авто + оплата податків (ПФ, податок на розкіш) 
          <Image src={check} alt="" /> </span>
          <span className={`${styles.tableItem} ${styles.tableItemNew}`}>
          Бронеплівка, тонування, килимки  
          <Image src={check} alt="" />
          </span>
          <span className={`${styles.tableItem} ${styles.tableItemNew}`}>КАСКО+ОСАГО за 3 роки <Image src={check} alt="" />
          </span>
          <span className={`${styles.tableItem} ${styles.tableItemNew}`}>
            Зимова гума, зберігання, шиномонтаж
          <Image src={check} alt="" />
          </span>
          <span className={`${styles.tableItem} ${styles.tableItemNew}`}>
          Технічне обслуговування
          <Image src={check} alt="" />
          </span>
          <span className={`${styles.tableItem} ${styles.tableItemNew}`}>
          Trade IN твого старого авто
          <Image src={check} alt="" />
          </span>
          <span className={`${styles.tableItem} ${styles.tableItemNew}`}>
          Upgrade | Downgrade авто за підпискою 
          <Image src={check} alt="" />
          </span>
        </div>

        <div className={styles.tableRowSubTitle}>
          <div className={`${styles.centerTitileRow} ${styles.topPadding} `}>Сервіс</div> 
          
         
        </div>
         <div className={styles.tableRow}>
          <span className={`${styles.tableItem} ${styles.tableItemNew}`}>Супровід страхових випадків, підмінне авто
          <Image src={check} alt="" /> </span>
          <span className={`${styles.tableItem} ${styles.tableItemNew}`}>
            Драйвер ТО, СТО  
          <Image src={check} alt="" />
          </span>
          <span className={`${styles.tableItem} ${styles.tableItemNew}`}>
          Доступ в комʼюніті Drivovo Pride
          <Image src={check} alt="" />
          </span>
          <span className={`${styles.tableItem} ${styles.tableItemNew}`}>
          Дисконтний клуб Drivovo Loyalty
          <Image src={check} alt="" />
          </span>
          <span className={`${styles.tableItem} ${styles.tableItemNew}`}>
          Інвестиції в Drivovo 10-12% річних в валюті
          <Image src={check} alt="" />
          </span>
          <span className={`${styles.tableItem} ${styles.tableItemNew}`}>
          Тестування різних авто з Drivovo Hub
          <Image src={check} alt="" />
          </span>
          <span className={`${styles.tableItem} ${styles.tableItemNew}`}>
          Захист кредитної історії
          <Image src={check} alt="" />
          </span>
          
        </div>
       
       
      </div>



      <h3 className={styles.customH2}>Дозволь собі це 😎 <br/>
                      З чого складається підписка?</h3>
      <div className={styles.table}>
        <div className={styles.tableRow}>
          <span className={styles.tableTitle}>
            {name}
          </span>
          <span className={styles.tableTitle}>Підписка Drivovo</span>
        </div>
      
        <div className={styles.tableRow}>
          <span className={styles.tableItem}>Авто</span>
          <span className={`${styles.tableItem} spacing`}>
          $ {subscribeAvto}
            
          </span>
        </div>
         <div className={styles.tableRow}>
          <span className={styles.tableItem}>Податки / оформлення</span>
          <span className={`${styles.tableItem} spacing`}>
            $ {taxes}
          </span>
        </div>
        <div className={styles.tableRow}>
          <span className={styles.tableItem}>КАСКО + ОСАГО</span>
          <span className={`${styles.tableItem} spacing`}>
          $ {osago}
          </span>
        </div>
        <div className={styles.tableRow}>
          <span className={styles.tableItem}>ТО</span>
          <span className={`${styles.tableItem} spacing`}>
          $ {maintenance}
          </span>
        </div>
       <div className={styles.tableRow}>
          <span className={styles.tableItem}>Зимова гума, зберігання, шиномонтаж</span>
          <span className={`${styles.tableItem} spacing`}>
          $ {tires}
          </span>
        </div>
         <div className={styles.tableRow}>
          <span className={styles.tableItem}>Додаткове обладнання</span>
          <span className={`${styles.tableItem} spacing`}>
            $ {aditionals}
          </span>
        </div>
        <div className={styles.tableRow}>
          <span className={styles.tableItem}>Сервіс Drivovo (Супровід страхових випадків, підмінне авто, Драйвер ТО, СТО, Доступ в комʼюніті Drivovo Pride, Дисконтний клуб Drivovo Loyalty, Trade IN твого старого авто) </span>
          <span className={`${styles.tableItem} spacing`}>
          $ {service}
          </span> 
        </div>
       
        <div className={styles.tableRowSubTitle}>
          <span className={styles.tableItem}>Вартість підписки на місяць</span>
          <span className={`${styles.tableItem} spacing`}>
            
            ${price}* 
         
          </span>
        </div>

      </div>

      
      <div className={styles.bloquote}>*Вартість підписки, наведена вище — це лише початок розмови. Ми готові працювати над оптимальним рішенням в рамках твого бюджету.</div>


    

    <div className={styles.divider}></div>
    <div className={styles.divider}></div>
    <div className={styles.divider}></div>

  </div>)
}