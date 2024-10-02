'use client'
import { formatCommas } from "@/helpers/formatCommas"
import styles from "./Schedule.module.scss"
import { useEffect, useRef, useState } from "react"

interface ISchedule {
  pricePerMonthStandart: number
  pricePerMonth40: number
  garanty: number
  car_price_ex_showroom: number
  garantyStandart: number
  drivovoPrice: number
  costDop40: number
  persent: number
}
export const Schedule:React.FC<ISchedule> = ({pricePerMonthStandart, pricePerMonth40, garanty,car_price_ex_showroom, garantyStandart, drivovoPrice, costDop40, persent}) => {
  const formatedPricePerMonth40 = formatCommas((pricePerMonth40).toFixed(0))
  const formatedPricePerMonthStandart = formatCommas(Number(pricePerMonthStandart).toFixed(0))

  const [width, setWidth] = useState<number>(0)
  
  const table1 = useRef<HTMLDivElement>(null)
  const table2 = useRef<HTMLDivElement>(null)

  const btn1 = useRef<HTMLButtonElement>(null)
  const btn2 = useRef<HTMLButtonElement>(null)

  const widthDetect = (): void => {

    if (width && width < 1024) {
      table1.current!.classList.add("showTable")
      table2.current!.classList.add("hideTable")
      btn1.current!.classList.add("activeTab")
    }
  };

  const handleTabs = (type: string) => {
    if (type === "t1") {
      table1.current!.classList.remove("hideTable")
      table1.current!.classList.add("showTable")
      table2.current!.classList.add("hideTable")
      table2.current!.classList.remove("showTable")
      btn1.current!.classList.add("activeTab")
      btn2.current!.classList.remove("activeTab")
    }
    if (type === "t2") {
      table2.current!.classList.remove("hideTable")
      table2.current!.classList.add("showTable")
      table1.current!.classList.remove("showTable")
      table1.current!.classList.add("hideTable")
      btn1.current!.classList.remove("activeTab")
      btn2.current!.classList.add("activeTab")
    }
   
  }

  useEffect(()=>{
    setWidth(window.innerWidth)
  }, [])

  useEffect(()=>{
    widthDetect()
  }, [width])

  return(
  <>
    <h2 className={styles.customH2}>Графік платежів</h2>
    <div className={styles.mobileTabs}>
        <button className={styles.tab} onClick={() => handleTabs("t1")} ref={btn1}>
          Стандартний графік
        </button>
        <button className={styles.tab} onClick={() => handleTabs("t2")} ref={btn2}>
          Персональний 1
        </button>
      </div>
    <div className={`${styles.table} ${styles.tableSchedule}`}>
    <div className={styles.tableSchedule_title}>Підписка Drivovo</div>
    <div className={`${styles.table_column} ${styles.table_column_first}`}>
      <div>Платежі</div>
      <div></div>
      <div></div>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
      <div>10</div>
      <div>11</div>
      <div>12</div>
      <div>13</div>
      <div>14</div>
      <div>15</div>
      <div>16</div>
      <div>17</div>
      <div>18</div>
      <div>19</div>
      <div>20</div>
      <div>21</div>
      <div>22</div>
      <div>23</div>
      <div>24</div>
      <div>25</div>
      <div>26</div>
      <div>27</div>
      <div>28</div>
      <div>29</div>
      <div>30</div>
      <div>31</div>
      <div>32</div>
      <div>33</div>
      <div>34</div>
      <div>35</div>
      <div>36</div>
      <div>37</div>
      <div></div>
    </div>
    <div className={`${styles.table_column} ${styles.table_column_second}`}>
      <div>{width > 1024 ? "Платежі" : ""}</div>

      <div>Оплата першого місяця</div>
      <div>Гарантійний депозит</div>
      <div>Разом, перший платіж</div>
      <div>Оплата другого місяця</div>

      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div>Останній платіж, переоформлення</div>
      <div>Вартість володіння з урахуванням викупу</div>
    </div>
    <div className={`${styles.table_column} ${styles.table_column_40}`} ref={table1}>
      <div>{width > 1024 ? "Стандартний графік" : ""}</div>
      <div>${formatCommas(formatedPricePerMonthStandart)}</div>
      <div>${formatCommas(Number(garanty).toFixed(0))}</div>
      <div>${(Number(pricePerMonthStandart) + Number(garanty)).toFixed(0)}</div>
      <div>${formatedPricePerMonthStandart}</div>
      <div>${formatedPricePerMonthStandart}</div>
      <div>${formatedPricePerMonthStandart}</div>
      <div>${formatedPricePerMonthStandart}</div>
      <div>${formatedPricePerMonthStandart}</div>
      <div>${formatedPricePerMonthStandart}</div>
      <div>${formatedPricePerMonthStandart}</div>
      <div>${formatedPricePerMonthStandart}</div>
      <div>${formatedPricePerMonthStandart}</div>
      <div>${formatedPricePerMonthStandart}</div>
      <div>${formatedPricePerMonthStandart}</div>
      <div>${formatedPricePerMonthStandart}</div>
      <div>${formatedPricePerMonthStandart}</div>
      <div>${formatedPricePerMonthStandart}</div>
      <div>${formatedPricePerMonthStandart}</div>
      <div>${formatedPricePerMonthStandart}</div>
      <div>${formatedPricePerMonthStandart}</div>
      <div>${formatedPricePerMonthStandart}</div>
      <div>${formatedPricePerMonthStandart}</div>
      <div>${formatedPricePerMonthStandart}</div>
      <div>${formatedPricePerMonthStandart}</div>
      <div>${formatedPricePerMonthStandart}</div>
      <div>${formatedPricePerMonthStandart}</div>
      <div>${formatedPricePerMonthStandart}</div>
      <div>${formatedPricePerMonthStandart}</div>
      <div>${formatedPricePerMonthStandart}</div>
      <div>${formatedPricePerMonthStandart}</div>
      <div>${formatedPricePerMonthStandart}</div>
      <div>${formatedPricePerMonthStandart}</div>
      <div>
        {car_price_ex_showroom > 50000
          ? "0"
          : `$${(formatedPricePerMonthStandart)}`}
      </div>
      <div>0</div>
      <div>0</div>
      <div>0</div>
      <div>0</div>
      <div>0</div>
      <div>${formatCommas(costDop40.toFixed(0))}</div>
      <div>${formatCommas((drivovoPrice).toFixed(0))}</div>
    </div>
    <div className={`${styles.table_column} ${styles.table_column_50}`} ref={table2}>
      <div>{width > 1024 ? "Персональний " : ""}</div>
      <div>${formatedPricePerMonth40}</div>
      <div>${formatCommas(garantyStandart.toFixed(0))}</div>
      <div>${formatCommas((Number(pricePerMonth40) + Number(garantyStandart)).toFixed(0)) }</div>
      <div>${(formatedPricePerMonth40)}</div>
      <div>${formatedPricePerMonth40}</div>
      <div>${formatedPricePerMonth40}</div>
      <div>${formatedPricePerMonth40}</div>
      <div>${formatedPricePerMonth40}</div>
      <div>${formatedPricePerMonth40}</div>
      <div>${formatedPricePerMonth40}</div>
      <div>${formatedPricePerMonth40}</div>
      <div>${formatedPricePerMonth40}</div>
      <div>${formatedPricePerMonth40}</div>
      <div>${formatedPricePerMonth40}</div>
      <div>${formatedPricePerMonth40}</div>
      <div>${formatedPricePerMonth40}</div>
      <div>${formatedPricePerMonth40}</div>
      <div>${formatedPricePerMonth40}</div>
      <div>${formatedPricePerMonth40}</div>
      <div>${formatedPricePerMonth40}</div>
      <div>${formatedPricePerMonth40}</div>
      <div>${formatedPricePerMonth40}</div>
      <div>${formatedPricePerMonth40}</div>
      <div>${formatedPricePerMonth40}</div>
      <div>${formatedPricePerMonth40}</div>
      <div>${formatedPricePerMonth40}</div>
      <div>${formatedPricePerMonth40}</div>
      <div>${formatedPricePerMonth40}</div>
      <div>${formatedPricePerMonth40}</div>
      <div>${formatedPricePerMonth40}</div>
      <div>${formatedPricePerMonth40}</div>
      <div>${formatedPricePerMonth40}</div>
      <div>${formatedPricePerMonth40}</div>
      <div>${formatedPricePerMonth40}</div>
      <div>${formatedPricePerMonth40}</div>
      <div>${formatedPricePerMonth40}</div>
      <div>${formatedPricePerMonth40}</div>
      <div>${formatedPricePerMonth40}</div>
      <div>${formatCommas(costDop40.toFixed(0))}</div>
      <div>${formatCommas((drivovoPrice).toFixed(0))}</div>
    </div>
  </div>

  </>
   
  )
}