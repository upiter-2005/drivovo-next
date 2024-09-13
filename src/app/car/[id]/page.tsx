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
    title: 'title',
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


  if(!car) return(<p>Car not found</p>)
  
  return (
    
    <div>
      <CarWrapper car={car.results[0].properties}/>
    </div>
  )
}