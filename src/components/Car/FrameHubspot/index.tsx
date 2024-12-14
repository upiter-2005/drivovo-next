import styles from './FrameHubspot.module.scss'
import Script from 'next/script'
export const FrameHubspot:React.FC = () => {
  return(
    <>
    <Script src="https://assets.calendly.com/assets/external/widget.js" />

   
    <div className="calendly-inline-widget" data-url="https://calendly.com/d-drivovo/meet-with-me?primary_color=ef7d05" style={
    {"minWidth":"320px",
      "height":"700px"}
  }></div>
   
    </>
    // <iframe className={styles.meetings_wrapper} src="https://drivovo.com/meetings/"></iframe>
  )
}

