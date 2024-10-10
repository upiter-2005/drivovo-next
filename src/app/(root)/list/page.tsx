/* eslint-disable @next/next/no-async-client-component */

import { Client } from "@notionhq/client";
const notion = new Client({ auth: process.env.NOTION_AUTH });
const databaswId = process.env.NOTION_DB_ID;
import { ListBlock } from "@/components/List";

export default async function List () {

  const cars = await notion.databases.query({
    database_id: databaswId || '',
    sorts: [
      {
        property: "Name", 
        direction: "ascending",
      },
    ],
    filter: {
      property: "offer_visibility",
      select: {
        equals: 'true'
      }
    },
  });

  if(!cars) return (<p>Not found</p>)

  return (
    <>
      <ListBlock cars={cars.results} />
    </>
 
  )
}