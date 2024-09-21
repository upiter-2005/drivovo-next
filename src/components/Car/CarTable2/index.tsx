'use client'
import Image from 'next/image'
import styles from "./CarTable2.module.scss"
import check from "@/assets/img/table-check.svg"
import {formatCommas} from "@/helpers/formatCommas"
interface ICarTable2 {
  name: string
  carpet: number
  car_price_ex_showroom: number
  tires: number
  startFund: number
  pension_fund: number
  kasko: number
  osago: number
  registration: number
  luxury_tax: number
  armored_film: number
  insurance_2_year: number
  osago_2_year: number
  luxury_tax_2_years: number
  tire_service: number
  maintenance: number
  ownerThreeYearsCost: any
  pricePerMonthStandart: any
  garanty: any
  lastPayment: any
  drivovoPrice: any
}

export const CarTable2:React.FC<ICarTable2> = ({
  name,
  carpet, 
  car_price_ex_showroom,
  tires,
  startFund,
  pension_fund,
  kasko,
  osago,
  registration,
  luxury_tax,
  armored_film,
  insurance_2_year,
  maintenance,
  osago_2_year,
  luxury_tax_2_years,
  tire_service,
  ownerThreeYearsCost,
  pricePerMonthStandart,
  garanty,
  lastPayment,
  drivovoPrice
}) => {


  return(
  <div className={styles.box}>
   
      <h2 className={styles.customH2}>ВСЯ ПРАВДА про вартість володіння автомобілем при купівлі самостійно за кеш, про яку не скаже автодилер</h2>
    
     
      <div className={styles.table}>
        <div className={styles.tableRow}>
          <span className={styles.tableTitle}>
            {name}
          </span>
          <span className={styles.tableTitle}>Кеш</span>
        </div>
        <div className={styles.tableRow}>
          <span className={styles.tableItem}>Вартість авто в салоні</span>
          <span className={`${styles.tableItem} spacing`}>
            $ {formatCommas(car_price_ex_showroom)}
          </span>
        </div>
         <div className={styles.tableRow}>
          <span className={styles.tableItem}>Пенсійний фонд</span>
          <span className={`${styles.tableItem} spacing`}>
            $ {(pension_fund).toFixed(2)}
          </span>
        </div>
        <div className={styles.tableRow}>
          <span className={styles.tableItem}>КАСКО перший рік</span>
          <span className={`${styles.tableItem} spacing`}>
            $ {(kasko).toFixed(0)}.00
          </span>
        </div>
    <div className={styles.tableRow}>
          <span className={styles.tableItem}>Автоцивілка перший рік</span>
          <span className={`${styles.tableItem} spacing`}>
         
            $ {osago}.00
          </span>
        </div>
         <div className={styles.tableRow}>
          <span className={styles.tableItem}>Реєстрація авто</span>
          <span className={`${styles.tableItem} spacing`}>
            $ {formatCommas(registration)}.00
          </span>
        </div>
          {luxury_tax > 0 && (
          <div className={styles.tableRow}>
          <span className={styles.tableItem}>Податок на розкіш</span>
          <span className={`${styles.tableItem} spacing`}>
            $ {formatCommas(luxury_tax)}
          </span>
        </div>
        )}
       
        <div className={styles.tableRow}>
          <span className={styles.tableItem}>Комплект гуми</span>
          <span className={`${styles.tableItem} spacing`}>
            $ {formatCommas(tires)}.00
          </span>
        </div>
        <div className={styles.tableRow}>
          <span className={styles.tableItem}>Килимки</span>
          <span className={`${styles.tableItem} spacing`}>
            $ {carpet}.00
          </span>
        </div>
        <div className={styles.tableRow}>
          <span className={styles.tableItem}>Бронеплівка</span>
          <span className={`${styles.tableItem} spacing`}>
            $ {formatCommas(armored_film)}
          </span>
        </div>
        <div className={styles.tableRowSubTitle}>
          <span className={styles.tableItem}>Початкові вкладення в автомобіль</span>
          <span className={styles.tableItem}>${(startFund).toFixed(0)}.00</span>
        </div> 
      

        <div className={styles.tableRow}>
          <span className={styles.tableItem}>КАСКО другий та третій рік</span>
          <span className={`${styles.tableItem} spacing`}>
            $ {(insurance_2_year).toFixed(2)}
          </span>
        </div>
        <div className={styles.tableRow}>
          <span className={styles.tableItem}>ТО за три роки</span>
          <span className={`${styles.tableItem} spacing`}>
            $ {(maintenance).toFixed(0)}.00
          </span>
        </div>
         <div className={styles.tableRow}>
          <span className={styles.tableItem}>Автоцивілка другий та третій рік </span>
          <span className={`${styles.tableItem} spacing`}>
            $ {formatCommas(osago_2_year)}.00
          </span>
        </div>
        {luxury_tax_2_years > 0 && (
          <div className={styles.tableRow}>
          <span className={styles.tableItem}>Податок на розкіш другий та третій рік</span>
          <span className={`${styles.tableItem} spacing`}>
            $ {formatCommas(luxury_tax_2_years)}.00
          </span>
        </div>
        )}
        
        <div className={styles.tableRow}>
          <span className={styles.tableItem}>Шиномонтаж та зберігання за 3 роки</span>
          <span className={`${styles.tableItem} spacing`}>
            $ {formatCommas(tire_service)}.00
          </span>
        </div>
       <div className={styles.tableRow}>
          <span className={styles.tableItem}>Вартість власного капіталу за 3 роки (7%)</span>
          <span className={`${styles.tableItem} spacing`}>
            $ {(((startFund / 100) * 21).toFixed(0))}.00
          </span>
        </div>
       <div className={styles.tableRowSubTitle}>
          <span className={styles.tableItem}>Вартість володіння автомобілем за 3 роки</span>
          <span className={styles.tableItem}>${(ownerThreeYearsCost).toFixed(0)}.00</span>
        </div>

         <div className={styles.tableRow}>
          <span className={styles.tableItem}>Вартість володіння автомобілем на місяць </span>
          <span className={`${styles.tableItem} spacing`}>
            $ {formatCommas((ownerThreeYearsCost / 36).toFixed(2))}
          </span>
        </div>
      </div>
      
     
      <h2 className={styles.customH2}>Порівняння купівлі авто за кеш VS підписка Drivovo</h2>
      
  
      <div className={` ${styles.tableTrio}`}>
        <div className={styles.tableRow}>
          <span></span>
          <span className={styles.tableTitle}>Кеш</span>
          <span className={styles.tableTitle}>Drivovo</span>
        </div>
        <div className={styles.tableRow}>
          <span className={styles.tableItem}>Початкові вкладення</span>
          <span className={`${styles.tableItem} spacing`}>$ {formatCommas(startFund)}</span>
          <span className={`${styles.tableItem} ${styles.accentCell} spacing`}>
            $ {formatCommas((parseFloat(pricePerMonthStandart) + parseFloat(garanty)).toFixed(0))}
          </span>
        </div>
         <div className={styles.tableRow}>
          <span className={styles.tableItem}>Експлуатаційні витрати за 3 роки</span>
          <span className={`${styles.tableItem} spacing`}>
            $ {formatCommas((ownerThreeYearsCost - startFund).toFixed(0))}
          </span>
          <span className={styles.tableItem}>Враховані в підписку</span>
        </div>

       <div className={styles.tableRow}>
          <span className={styles.tableItem}>Вартість викупу через 3 роки</span>
          <span className={`${styles.tableItem} spacing`}>$ 0,0</span>
          <span className={`${styles.tableItem} spacing`}>$ {(lastPayment.toFixed(0))}</span>
        </div>
       <div className={styles.tableRow}>
          <span className={styles.tableItem}>Вартість володіння через 3 роки</span>
          <span className={`${styles.tableItem} spacing`}>$ {(ownerThreeYearsCost).toFixed(0)}.00</span>
          <span className={styles.tableItem}>
            ${(parseInt(drivovoPrice).toFixed(0))}.00
          </span>
        </div>

        
         <div className={styles.tableRowSubTitle}>
          <span className={styles.tableItem}>Вартість володіння в місяць </span>
          <span className={`${styles.tableItem} spacing`}>
            $ {formatCommas((parseFloat(ownerThreeYearsCost) / 36).toFixed(2))}
          </span>
          <span className={`${styles.tableItem} spacing`}>
            $ {formatCommas((parseFloat(drivovoPrice) / 36).toFixed(0))}
          </span>
        </div>
      </div>

  </div>)
}