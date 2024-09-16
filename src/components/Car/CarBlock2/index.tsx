'use client'

import Image from 'next/image'
import YouTube from 'react-youtube'
import styles from "./ICarBlock2.module.scss"
import { useRef } from 'react'

interface ICarBlock2 {
  title: string
  text: string
  acceleration: string
  power: string
  engine_capacity: string
  engine_type: string
  vehicle_interior: string
  drive_type: string
  body_type: string
  fuel_consumption: string
  video: string
}

const youTubeOpt = {
  height: "100%",
  width: "100%",
  enablejsapi: 1,
}



export const CarBlock2:React.FC<ICarBlock2> = ({title, text, acceleration, power, engine_capacity, engine_type,vehicle_interior, drive_type, body_type, fuel_consumption, video }) => {
  const videoYt = useRef() as any 
  const isPlay = useRef<boolean>(false);

  const playVideo = ():void => {
    isPlay.current = !isPlay.current;

    if(isPlay.current){
      videoYt.current.internalPlayer.playVideo() 
    }else{
      videoYt.current.internalPlayer.pauseVideo()
    }
  
    
  }

  return(
    <div className={styles.box}>
      <div className={`${styles.box} ${styles.videoBlock}`}>
        
        <div className={styles.data}>
          <p className={styles.title}>{title}</p>
          <div className={styles.text}>{text}</div>

          <div className={styles.charContainer}>
          <h2>Характеристики</h2>
          <div className={styles.charBox}>
            <div className={styles.charItem}>
              <span>Розгін 0-100</span>
              <span>{acceleration}</span>
            </div>

            <div className={styles.charItem}>
              <span>Потужність</span>
              <span>{power}</span>
            </div>

            <div className={styles.charItem}>
              <span>Об’єм двигуна</span>
              <span>{engine_capacity}</span>
            </div>

            <div className={styles.charItem}>
              <span>Двигун</span>
              <span>{engine_type}</span>
            </div>

            <div className={styles.charItem}>
              <span>Салон</span>
              <span>{vehicle_interior}</span>
            </div>

            <div className={styles.charItem}>
              <span>Тип приводу</span>
              <span>{drive_type}</span>
            </div>

            <div className={styles.charItem}>
              <span>Тип кузову</span>
              <span>{body_type}</span>
            </div> 

            <div className={styles.charItem}>
              <span>Витрати пального</span>
              <span>{fuel_consumption} / 100 км</span>
            </div>

          </div>
        </div> 
      </div>

        <div className={styles.videoBox}>
          <YouTube
            ref={videoYt}
            videoId={video}
            opts={youTubeOpt}
            // onReady={onPlayerReady}
            // onStateChange={onPlayerStateChange}
          />
            <div
              onClick={playVideo}
              style={{height: "100%",
                          "width":"100%",
                          "position":"absolute",
                          "zIndex":"20",
                          "left": "0",
                          "top": "0"
                        }}></div>
        </div>
      </div>
      
      <div className={styles.divider}></div>
      <div className={styles.divider}></div>
      <div className={styles.divider}></div>
    </div>
    
  )
}