import { getPrice } from "@/helpers/getPrice";
import fs from "fs";
import RSS from "rss"

export default async function generateRssFeed(allCars:any) {
  console.log(allCars)
  const site_url = "https://test.noguchi.com.ua";
  // const site_url =
  //   process.env.NODE_ENV === "production"
  //     ? "https://test.noguchi.com.ua"
  //     : "http://localhost:3000";

  const feedOptions = {
    title: "Drivovo cars | RSS Feed",
    description: "Drivovo cars",
    site_url: site_url,
    feed_url: `${site_url}/rss.xml`,
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}`,
  };

  const feed = new RSS(feedOptions);

  // Add each individual post to the feed.
  allCars.map((car: any) => {
    let price = getPrice(car)
    feed.item({
      title: car.properties.car_name.rich_text[0].plain_text,
      description: car.properties.Text.rich_text[0].text.content,
      url: `https://offer.drivovo.com/car/${car.properties.URL.rich_text[0].plain_text}`,
      date: new Date().toDateString(),
      custom_elements: [
        {'id': car.id},
        {'availability': 'in stock'},
        {'condition': 'new'},
        {'price': `${price} USD`},
        {'brand': car.properties.car_brand.select.name},
        {'image_link': car.properties.Cover.files[0].file.url}
      ]
    });
  });

  // Write the RSS feed to a file as XML.
  fs.writeFileSync("./public/rss.xml", feed.xml({ indent: true }));
}