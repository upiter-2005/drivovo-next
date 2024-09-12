import { Metadata, ResolvingMetadata } from 'next';
import { Client } from "@notionhq/client";
import { TopData } from '@/components/Car/TopData';
const notion = new Client({ auth: process.env.NOTION_AUTH });
const databaswId = process.env.NOTION_DB_ID;

type Props = {
  params: { id: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id
 
  // fetch data
  const car = await notion.databases.query({
    database_id: databaswId || '',
    filter: {
      property: "URL",
      rich_text: {
        contains: id
      }
    }
  });

 
  return {
    title: car?.results[0]?.properties.car_name.rich_text[0].plain_text,
    
  }
}

export default async function CarPage ({ params: {id} }: {params: {id: string}})  {

  const car: any = await notion.databases.query({
    database_id: databaswId || '',
    filter: {
      property: "URL",
      rich_text: {
        contains: id
      }
    }
  });

  console.log(car.results);

  if(!car) return(<p>Car not found</p>)
  //car.results[0].properties.car_name.rich_text[0]?.plain_text
  const maintenance_for_calculation = car.results;
  const carName = car.results[0].properties.car_name.rich_text[0].plain_text;
  const coverFiles = car.results[0].properties.Cover.files[0].file.url;
  const photo = car.results[0].properties.Photo.files;
  const edited_time = car.results[0].properties.edited_time.formula.date.start;
  const sandpulse_form = car.results[0].properties.sandpulse_form.rich_text[0].plain_text;
  const residual_value = car.results[0].properties.residual_value.number;

  const car_price_ex_showroom = car.results[0].properties.car_price_ex_showroom.number;
  const pension_fund = car.results[0].properties.pension_fund.formula.number;
  const insurance_1_year = car.results[0].properties.insurance_1_year.formula.number;
  const registration = car.results[0].properties.registration.formula.number;
  const luxury_tax = car.results[0].properties.luxury_tax.number;
  const tinted_glass = car.results[0].properties.tinted_glass.formula.number;
  const tires = car.results[0].properties.tires.number;
  const carpets = car.results[0].properties.carpets.number;
  const safety_net = car.results[0].properties.safety_net.formula.number;
  const radiator_protection = car.results[0].properties.radiator_protection.number;
  const armored_film = car.results[0].properties.armored_film.number;

  const tire_service = car.results[0].properties.tire_service.formula.number;
  const luxury_tax_2_years = car.results[0].properties.luxury_tax_2_years.number;
  const osago_2_year = car.results[0].properties.osago_2_year.formula.number;
  const maintenance = car.results[0].properties.maintenance.formula.number;
  const insurance_2_year = car.results[0].properties.insurance_2_year.formula.number;

  return (
    
    <div>
      <TopData 
        cover={coverFiles}
        carName={carName}
        editedTime={edited_time}
        sandpulseForm={sandpulse_form}
        photo={photo}
      />
    </div>
  )
}