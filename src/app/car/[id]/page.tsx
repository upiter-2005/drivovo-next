import { Metadata, ResolvingMetadata } from 'next';
import { Client } from "@notionhq/client";
import { CarWrapper } from '@/components/Car/CarWrapper';
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
    title: car.results[0].properties.Name,
    description: '...'
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
      <CarWrapper 
        car={car.results[0].properties} 
        id={car.results[0].id} 
        media={media[0].ACF.gallery}
        />
    </div>
  )
}