import styles from './FrameHubspot.module.scss'

export const FrameHubspot:React.FC = () => {
  return(
    <iframe className={styles.meetings_wrapper} src="https://drivovo.com/meetings/"></iframe>
  )
}

