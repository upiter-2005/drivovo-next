import styles from "./List.module.scss"
import Link from "next/link"

interface IList {
  cars: any[]
}

export const ListBlock:React.FC<IList> = ({cars}) => {
  return(
    <div className={styles.list}>
    <div>
      <span>Model</span>
      <span>Offer link</span>
    </div>
    {cars.map((obj, i) => (
      <div key={obj.url}>
        <a href={obj.url} target="blank">
          {i + 1}. {obj.properties.Name.title[0].plain_text}
        </a>
        <Link href={`/offer/${obj.properties.URL.rich_text[0].plain_text}`}>Link To Offer</Link>
      </div>
    ))}
  </div>
     
    
  )
}