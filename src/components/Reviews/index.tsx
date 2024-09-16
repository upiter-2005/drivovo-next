/* eslint-disable @next/next/no-img-element */
'use client'

import Slider, { Settings } from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "@/assets/css/comunity.scss"


function SampleNextArrow(props: any) {  
  const {  onClick } = props;
  return (
    <div
      className="nextArrow"
      onClick={onClick}
    >
      <img src="/img/slb-rightBig.png" width={30} height={30} alt="" className="shadowArr"/>
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div
    className="prevArrow"
      onClick={onClick}
    > <img src='/img/slb-leftBig.png' width={30} height={30} alt="" className="shadowArr" /></div>
  );
}

export const Reviews:React.FC = () => {

  const revSlider: Settings = {
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerPadding: "60px",
    dots: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
     centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "22px",
          centerMode: true,
          adaptiveHeight: true

        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          centerPadding: "110px",
          centerMode: true,
        },
      },
      {
        breakpoint: 1980,
        settings: {
          slidesToShow: 5,
          centerPadding: "110px",
          centerMode: true,
        },
      },
      {
        breakpoint: 1730,
        settings: {
          slidesToShow: 4,
          centerPadding: "110px",
          centerMode: true,
        },
      },
    ],
  }

  const revs = [
    {
      name: "Roman Cherepakha",
      avatar: "/img/r1.webp",
      text: "One-stop shop в користуванні авто, на який ми заслуговуємо + постійний розвиток сервісу + висока якість та клієнтоорієнтованість.",
      link: "https://www.facebook.com/romek.che/posts/5905667742779566?ref=embed_post"
    },
    {
      name: "Grigory Bakunov",
      avatar: "/img/r2.webp",
      text: "Я пока в восторге от уровня сервиса, посмотрим как будет дальше. Не реклама, вы меня знаете, рекламу я бы сделал лучше. Просто хочу чтобы основатель Драйвово Соловйов Максим и сервис, который мне нравится, продолжал жить хорошо и меня радовал",
      link: "https://www.facebook.com/thebobuk/posts/10230579558419299?ref=embed_post"
    },
    {
      name: "Kirill Birchenko",
      avatar: "/img/r3.webp",
      text: "В Drivovo на первом месте не машины, а клиенты и отношении к ним. Drivovo делает все необходимое для счастья своих пользователей, и с их командой, мне как клиенту, приятно работать. Очень рад, что встретил компанию, и воспользовался именно их подпиской.",
      link: "https://www.facebook.com/kirill.birchenko.9/posts/1357491441385030?ref=embed_post"
    },
    {
      name: "Dmytro Marakhovskyi",
      avatar: "/img/r4.webp",
      text: "Невероятно удобный сервис! Решение, которого до этого на рынке не было.      Новые машины в классных комплектациях. Привозят заправленную чистую машину, в багажнике омыватель, зонтик, страховка и все, что может пригодиться. Профессиональные, вежливые и отзывчивые сотрудники!) Очень рекомендую!",
      link: "https://www.facebook.com/d.marakhovsky/posts/10158731298577194?ref=embed_post"
    },
    {
      name: "Mariya Ivanova",
      avatar: "/img/r5.webp",
      text: "«Фокусируйтесь на важном для себя и получайте удовольствие от жизни» - очень импонирует подход и философия      Самые интересные комплектации, гибкость условий, не просто клиентоориентированность а развитие отношений, формат клуба по интересам — мечта водителя)",
      link: "https://www.facebook.com/mariya.ivanova.3154284/posts/10160306303988115?ref=embed_post"
    },
    {
      name: "Сергій Нетяга",
      avatar: "/img/r6.webp",
      text: "Отличный сервис, без кучи бюрократии. Договорились о подписке за 30 минут и через день машину привезли в другой конец Украины заправленную (а сейчас дефицит на топливо) и только с мойки.",
      link: "https://www.facebook.com/rrjurr/posts/5382408531825839?ref=embed_post"
    },
  ]

  return(
    <div className="revs">
       <h2 className="customH2">
        Відгуки наших клієнтів
        </h2>
          <Slider {...revSlider} className="revSlider">
          { revs.map( (obj, i) => (
             <div className="item" key={i}>
              <p className="rev-text">{obj.text}</p>
               <div className="rev-str">
                 <img src='/img/fb.png' width={31} height={31} alt="drivovo - facebook review" className="rev_fb" />
                 <a href={obj.link} className="go_to_rev" target="blank">Перейти до відгуку</a>
               </div>

               <div className="rev-str bottom-str">
                 <img src={obj.avatar} alt="" className="avatar" />
                 <div className="data">
                   <p className="name">{obj.name}</p>
                   <span>близько 1 року назад</span>
                 </div>
               </div>
           </div>
           
          )
          )}
           


          </Slider>
       </div>
  )
}