import { ImageObj, TopData } from "../TopData";
import {ownThreeYearsCount} from "@/helpers/ownThreeYearsCount"
import { CarBlock2 } from "../CarBlock2";
import { ICarTable1 } from "../CarTable1";
import { DownloadSchedule } from "../DownloadSchedule";
import { CarTable2 } from "../CarTable2";
import { InfoBlock } from "../InfoBlock";
import { Notice1 } from "../Notice1";
import { FrameHubspot } from "../FrameHubspot";
import { Comunity } from "@/components/Comunity";
import { Reviews } from "@/components/Reviews";
import { CarBlock3 } from "../CarBlock3";

interface ICarWrapper {
  id: string
  car: any
  media: ImageObj[]
}

export const CarWrapper:React.FC<ICarWrapper> = ({id, car, media}) => {

  const calcInstance = ownThreeYearsCount(car);

  const data = {
    maintenance_for_calculation : car.maintenance.formula.number,
    carName: car.car_name.rich_text[0].plain_text,
    hubspot_cover: car.hubspot_cover.files[0].file.url,
    photo: car.Photo.files,
    edited_time: car.edited_time.formula.date.start,
    sandpulse_form: car.sandpulse_form.rich_text[0].plain_text,
    residual_value: car.residual_value.number,
    title: car.Title.rich_text[0].plain_text,
    text: car.Text.rich_text[0].text.content,
    acceleration: car.acceleration.rich_text[0]?.plain_text,
    power: car.power.rich_text[0].plain_text,
    engine_capacity: car.engine_capacity.rich_text[0].plain_text,
    engine_type: car.engine_type.select.name,
    vehicle_interior: car.vehicle_interior.select.name,
    drive_type: car.drive_type.select.name,
    body_type: car.body_type.select.name,
    fuel_consumption: car.fuel_consumption.number,
    video: car.video.rich_text[0]?.plain_text,
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
    <TopData 
        id={id}
        carName={data.carName}
        editedTime={data.edited_time}
        sandpulseForm={data.sandpulse_form}
        photo={data.photo}
        price={calcInstance.pricePerMonthStandart}
        calc={calcInstance}
        media={media}
      />
   
   
      <CarBlock2
        title={data.title}
        text={data.text}
        acceleration={data.acceleration}
        power={data.power}
        engine_capacity={data.engine_capacity}
        engine_type={data.engine_type}
        vehicle_interior={data.vehicle_interior}
        drive_type={data.drive_type}
        body_type={data.body_type}
        fuel_consumption={data.fuel_consumption}
        video={data.video}
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
      <DownloadSchedule
        cover={data.hubspot_cover}
        sendPulse={data.sandpulse_form}
        media={media}
        price={calcInstance.pricePerMonthStandart}
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
      <InfoBlock />
      <Notice1 />
      <FrameHubspot />
      <Comunity />
      <Reviews />
      <CarBlock3
        id={id}
        bottom_cover={media}
      />
    </>
    
  )
}