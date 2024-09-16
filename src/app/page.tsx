import Image from "next/image";
import styles from "./page.module.css";
import { Client } from "@notionhq/client";
import { Metadata } from "next";
import CarCard from "@/components/CarCard";
const notion = new Client({ auth: process.env.NOTION_AUTH });
const databaswId = process.env.NOTION_DB_ID;

export const metadata: Metadata = {
  title: '...',
  description: '...',
}

export const revalidate = 30

export default async function Home() {

  const cars = await notion.databases.query({
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



  if(!cars) return "not found"

  return (
    <div className={styles.avtoparkWrapper}>
      {cars.results.map((car, i:number) =>  <CarCard key={i} {...car} /> )}
      
    </div>
  );
}
