'use client'
import { useEffect } from 'react'
import { usePathname, useSearchParams } from "next/navigation"

const ReactPixel:React.FC = () => {

  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(()=> {
    import("react-facebook-pixel")
    .then((x) => x.default)
    .then((ReactPixel) => {
      ReactPixel.init("734507692124662")
      ReactPixel.pageView()
    })
   
  }, [pathname, searchParams])
  return null
}
export default ReactPixel

