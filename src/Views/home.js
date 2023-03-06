import React from 'react';
import ContactForm from '../Components/Contact';
import ContainerWidget from '../Components/ContainerWidget';
import ContainerWidgetVideo from '../Components/ContainerWidgetVideo';

const MAIN_PAGE_IMAGES = [
  "https://ams03pap001files.storage.live.com/y4m_LPULyXs0maEC3jKpdAbm5pltidkLECxcLwE9rC-M_dExIjFDY0lawSdlnQ3aC17lS6EjWoqWb7npx2paTPIl97zzNirf7vvD4zmhwtxzjVqQq9wAsxmWgAQ7cfdRfndo-WU92SuunUFF7kWUmkSjyGSd1NpCef1ARspekfQfIpaEqpAIIT8g06uyd1ayjr1?width=500&height=500&cropmode=none",
  "https://ams03pap001files.storage.live.com/y4mZcfgUPO6TLMzrlJXvPRcNQsePoaDohYijYRqnbOTAyk4vEKcx1EuwF_FIYvnWGGsRmZXdPfTropWgM98_gyY2GRZ1sVRS4xZLWhwa_PQuXYr6wc-N_aTiufZ8XvDO-rxvLUqPHa1Clw1Bv1LlE23wsuiLj-077I2U0d5yY9MB7eSrwWyoIGkDjUJYCDFwikn?width=500&height=500&cropmode=none",
  "https://ams03pap001files.storage.live.com/y4meo1tBGuk0LjmF_XbyCyEYgvLspUJcx0vD-dvkJcCIwfZBTClqLt6hAV6IypxI4B89ZLBQcxuQrDirN9-LIuIVJ99d174tBXPFHoOJMjkZl_Nm7CPD-CTv98hJQkItu2DL1o9KkZNeBqRSiZribBdI5Th3BCLcyt_Q11dyIw3A5MUp8y3dxHNkFUXfmm26iTO?width=500&height=500&cropmode=none",
  "https://ams03pap001files.storage.live.com/y4mktDUsGi3PItJDHVofr4NoN-2y6sEuMKOGkcSr2G-kyEI0KA9pXpAQatzBnNTyelGMWY6lCIlFd-LABxkiaSPy-cR6aHM-AQe2SfQXgg7RIgXZ6MDfU-wAXFhRDi1XgxswvduaJi8emnEU46kSgT5T-0WgOY-xfhhanGkRSj-vOokLBYdkMjlR4zZh1MinPBy?width=500&height=500&cropmode=none",
]




const Home = (props) => {
  return (
    <div className="page-conatiner-box">
      <ContainerWidget url="/animalBalloons" bgImg={MAIN_PAGE_IMAGES[0]} btnText={props.texts('home_1')} title={props.texts("PageBalloons")} description={props.texts("HomeText2")}/>
      <ContainerWidget url="/backdrops" bgImg={MAIN_PAGE_IMAGES[1]} btnText={props.texts('home_2')} title={props.texts("PageBackdrop")}  description={props.texts("HomeText3")}/>
      <ContainerWidget url="/decorations" bgImg={MAIN_PAGE_IMAGES[2]} btnText={props.texts('home_3')} title={props.texts("PageDecorations")}  description={props.texts("HomeText4")}/>
      <ContainerWidget url="/events" bgImg={MAIN_PAGE_IMAGES[3]} btnText={props.texts('home_4')} title={props.texts("PageEvents")}  description={props.texts("HomeText5")} />
      <ContainerWidgetVideo/>
      <ContactForm />
    </div>
  );

}
export default Home;