
import {ownThreeYearsCount} from "@/helpers/ownThreeYearsCount"
import { ICarTable1 } from "@/components/Car//CarTable1"
import { CarTable2 } from "@/components/Car//CarTable2"
import { InfoBlock } from "@/components/Car//InfoBlock"
import { Notice1 } from "@/components/Car//Notice1"
import { FrameHubspot } from "@/components/Car//FrameHubspot"
import { Comunity } from "@/components/Comunity"
import { CarResponse } from "@/global"
import { ImageObj } from "../../TopData"
import { OfferTop } from "../OfferTop"
import { Schedule } from "../Schedule"
import { Notice2 } from "../../Notice2"


interface IOfferWrapper {
  id: string
  car: CarResponse
  media: ImageObj[]
}

export const OfferWrapper:React.FC<IOfferWrapper> = ({id, car, media}) => {
  
  const calcInstance = ownThreeYearsCount(car);

  const data = {
    maintenance_for_calculation : car.maintenance.formula.number,
    carName: car.car_name.rich_text[0].plain_text,
    hubspot_cover: car.hubspot_cover.files[0].file.url,
    photo: car.Photo.files,
    edited_time: car.edited_time.formula.date.start,
    residual_value: car.residual_value.number,
    title: car.Title.rich_text[0].plain_text,
    text: car.Text.rich_text[0].text.content,
    fuel_consumption: car.fuel_consumption.number,
    car_price_ex_showroom: car.car_price_ex_showroom.number,
    pension_fund: car.pension_fund.formula.number,
    osago: car.osago.formula.number,
    insurance_1_year: car.insurance_1_year.formula.number,
    registration: car.registration.formula.number,
    luxury_tax: car.luxury_tax.number,
    tinted_glass: car.tinted_glass.formula.number,
    tires: car.tires.number,
    carpets: car.carpets.number,
    safety_net: car.safety_net.formula.number,
    radiator_protection: car.radiator_protection.number,
    armored_film: car.armored_film.number,
    tire_service: car.tire_service.formula.number,
    luxury_tax_2_years: car.luxury_tax_2_years.number,
    osago_2_year: car.osago_2_year.formula.number,
    maintenance: car.maintenance.formula.number,
    insurance_2_year: car.insurance_2_year.formula.number
  }

  return(
    <>
      <OfferTop media={media} title={data.title} text={data.text} />
      <Schedule 
        pricePerMonthStandart={calcInstance.pricePerMonthStandart}
        pricePerMonth40={calcInstance.pricePerMonth40}
        garanty={calcInstance.garanty}
        car_price_ex_showroom={data.car_price_ex_showroom}
        garantyStandart={calcInstance.garantyStandart}
        drivovoPrice={calcInstance.drivovoPrice}
        costDop40={calcInstance.costDop40}
        persent={calcInstance.persent}
       />
       <CarTable2
        name={data.carName}
        carpet={data.carpets}
        car_price_ex_showroom={data.car_price_ex_showroom}
        tires={data.tires}
        startFund={calcInstance.startFund}
        ownerThreeYearsCost={calcInstance.ownerThreeYearsCost}
        pension_fund={data.pension_fund}
        kasko={data.insurance_1_year}
        osago={data.osago}
        registration={data.registration}
        luxury_tax={data.luxury_tax}
        armored_film={data.armored_film}
        insurance_2_year={data.insurance_2_year}
        maintenance={data.maintenance}
        osago_2_year={data.osago_2_year}
        luxury_tax_2_years={data.luxury_tax_2_years}
        tire_service={data.tire_service}
        pricePerMonthStandart={calcInstance.pricePerMonthStandart}
        garanty={calcInstance.garanty}
        lastPayment={calcInstance.lastPayment}
        drivovoPrice={calcInstance.drivovoPrice}
      />  
      <ICarTable1
        name={data.carName}
        price={calcInstance.pricePerMonthStandart}
        subscribeAvto={calcInstance.subscriptionAvto}
        taxes={calcInstance.taxes}
        osago={calcInstance.osago}
        maintenance={calcInstance.maintenance}
        tires={calcInstance.tires}
        aditionals={calcInstance.aditionals}
        service={calcInstance.service}
       />  
      
      
      <InfoBlock />
      <FrameHubspot />
      <Notice1 />
      <Comunity />
      <Notice2 />
    </>
    
  )
}