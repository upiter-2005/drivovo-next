/* eslint-disable @next/next/no-img-element */

interface ICardImage {
  slug: string
}

export const CardImage:React.FC<ICardImage> = async({slug}) =>{



    let media: any = await fetch(`https://drivovo.com/wp-json/wp/v2/offers?slug=${slug}`)
    media = await media.json()
    


  return(
    
    <img src={media[0].ACF.gallery[0].full_image_url}  style={{
      width: '100%',
      height: 'auto',
    }} alt={`Drivovo`} />
  )
}