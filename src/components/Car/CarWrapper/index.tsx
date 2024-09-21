import { ImageObj, TopData } from "../TopData";

import {ownThreeYearsCount} from "@/helpers/ownThreeYearsCount"
import {startFundCount} from "@/helpers/startFundCount"
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

const maintenance_for_calculation = car.maintenance.formula.number;
const carName = car.car_name.rich_text[0].plain_text;
const hubspot_cover = car.hubspot_cover.files[0].file.url;
const photo = car.Photo.files;
const edited_time = car.edited_time.formula.date.start;
const sandpulse_form = car.sandpulse_form.rich_text[0].plain_text;
const residual_value = car.residual_value.number;

const title = car.Title.rich_text[0].plain_text;
const text = car.Text.rich_text[0].text.content;
const acceleration = car.acceleration.rich_text[0]?.plain_text;
const power = car.power.rich_text[0].plain_text;
const engine_capacity = car.engine_capacity.rich_text[0].plain_text;
const engine_type = car.engine_type.select.name;
const vehicle_interior = car.vehicle_interior.select.name;
const drive_type = car.drive_type.select.name;
const body_type = car.body_type.select.name;
const fuel_consumption = car.fuel_consumption.number;
const video = car.video.rich_text[0]?.plain_text;

const car_price_ex_showroom = car.car_price_ex_showroom.number;
const pension_fund = car.pension_fund.formula.number;
const osago = car.osago.formula.number;
const insurance_1_year = car.insurance_1_year.formula.number;
const registration = car.registration.formula.number;
const luxury_tax = car.luxury_tax.number;
const tinted_glass = car.tinted_glass.formula.number;
const tires = car.tires.number;
const carpets = car.carpets.number;
const safety_net = car.safety_net.formula.number;
const radiator_protection = car.radiator_protection.number;
const armored_film = car.armored_film.number;

const tire_service = car.tire_service.formula.number;
const luxury_tax_2_years = car.luxury_tax_2_years.number;
const osago_2_year = car.osago_2_year.formula.number;
const maintenance = car.maintenance.formula.number;
const insurance_2_year = car.insurance_2_year.formula.number;
const bottom_cover = car.bottom_cover.files[0].file.url;



  return(
    <>
   
    <TopData 
        id={id}
        carName={carName}
        editedTime={edited_time}
        sandpulseForm={sandpulse_form}
        photo={photo}
        price={calcInstance.pricePerMonthStandart}
        calc={calcInstance}
        media={media}
      />
   
   
      <CarBlock2
        title={title}
        text={text}
        acceleration={acceleration}
        power={power}
        engine_capacity={engine_capacity}
        engine_type={engine_type}
        vehicle_interior={vehicle_interior}
        drive_type={drive_type}
        body_type={body_type}
        fuel_consumption={fuel_consumption}
        video={video}
      />
      <ICarTable1
        name={carName}
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
        cover={hubspot_cover}
        sendPulse={sandpulse_form}
      />  
      <CarTable2
        name={carName}
        carpet={carpets}
        car_price_ex_showroom={car_price_ex_showroom}
        tires={tires}
        startFund={calcInstance.startFund}
        ownerThreeYearsCost={calcInstance.ownerThreeYearsCost}
        pension_fund={pension_fund}
        kasko={insurance_1_year}
        osago={osago}
        registration={registration}
        luxury_tax={luxury_tax}
        armored_film={armored_film}
        insurance_2_year={insurance_2_year}
        maintenance={maintenance}
        osago_2_year={osago_2_year}
        luxury_tax_2_years={luxury_tax_2_years}
        tire_service={tire_service}
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
        bottom_cover={bottom_cover}
      />
    </>
    
  )
}