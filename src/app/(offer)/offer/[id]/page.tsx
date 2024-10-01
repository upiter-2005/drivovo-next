import { Metadata, ResolvingMetadata } from 'next';
import { Client } from "@notionhq/client";
import { OfferImage } from '@/components/OfferImage';
import { OfferWrapper } from '@/components/Car/Offer/OfferWrapper';
const notion = new Client({ auth: process.env.NOTION_AUTH });
const databaswId = process.env.NOTION_DB_ID;

type Props = {
  params: { id: string }
}

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const id = params.id

  const car: any = await notion.databases.query({
    database_id: databaswId || '',
    filter: {
      property: "URL",
      rich_text: {
        contains: id
      }
    }
  });

  return {
    title: car.results[0].properties.car_name.rich_text[0].plain_text,
    description: '`Drivovo - ${car.results[0].properties.car_name.rich_text[0].plain_text}`'
  }  
}


export async function generateStaticParams() {
  const cars: any = await notion.databases.query({
    database_id: databaswId || '',
    sorts: [
      {
        property: "Name", 
        direction: "ascending",
      },
    ],
    filter: {
      property: "Status",
      status: {
        equals: 'Done'
      }
    },
  });



  return cars.results.map((car: any) => ({
    id: car.properties.URL.rich_text[0].plain_text,
  }))
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

  const media: any = await fetch(`https://drivovo.com/wp-json/wp/v2/offers?slug=${id}`).then(res => res.json())



  if(!car || !media[0].ACF.gallery) return(<p>Car not found</p>)
  
  return (
    
    <div>
      <OfferImage media={media[0].ACF.gallery} />
      <OfferWrapper 
        car={car.results[0].properties} 
        id={car.results[0].id} 
        media={media[0].ACF.gallery}
        />
    </div>
  )
}