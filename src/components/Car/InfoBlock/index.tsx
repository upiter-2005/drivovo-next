import styles from './InfoBlock.module.scss'

export const InfoBlock:React.FC = () => {
  return (
    <>
      <div className={styles.infiPanel}>
        <h3>
          Різниця вартості володіння купівля/підписка за 3 роки <span>12.62%</span>
        </h3>
      </div>
    </>
  )
} 