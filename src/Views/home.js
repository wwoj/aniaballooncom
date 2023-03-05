import React from 'react';
import ContactForm from '../Components/Contact';
import ContainerWidget from '../Components/ContainerWidget';
import ContainerWidgetVideo from '../Components/ContainerWidgetVideo';

const MAIN_PAGE_IMAGES = [
  "https://ams03pap001files.storage.live.com/y4m7veXyOTs2tZ1PNSUhgGxqEJjO1uzx2DBJPADoSyxRg7SIH4NwcDhOdAJwWBlFYTuBpMrPDFcReabQARWhos-kn2O0j76DvYnRYOPSsuwXtfI8mJBRtVl256IFn3bYy1WRDnGe-tbqkdZjyBp_NSyg9jw-D1irrSYsQuZYIsZ82UyblRmdnwCKg3Vh1zXkhtf?width=500&height=500&cropmode=none",
  "https://ams03pap001files.storage.live.com/y4mZcfgUPO6TLMzrlJXvPRcNQsePoaDohYijYRqnbOTAyk4vEKcx1EuwF_FIYvnWGGsRmZXdPfTropWgM98_gyY2GRZ1sVRS4xZLWhwa_PQuXYr6wc-N_aTiufZ8XvDO-rxvLUqPHa1Clw1Bv1LlE23wsuiLj-077I2U0d5yY9MB7eSrwWyoIGkDjUJYCDFwikn?width=500&height=500&cropmode=none",
  "https://ams03pap001files.storage.live.com/y4mGCHt1ZFqbv4vDO8ixWPzaHamRWE5Ool1fu8m13QyBZf9xJ_VrV38SJYFi-8rAPKy0W6cA0TQavlVu96sUaa2dNFcJ-S_imZKxSFTxEOyoNtyelJ-vi5ucg7qDOQVtPsTH6KHb24v4Wi3BhGpThf7LxPKoils4eTLtu1QyUQDYsSwpXFCiBibK_09t0w79zpT?width=500&height=500&cropmode=none",
  "https://ams03pap001files.storage.live.com/y4mktDUsGi3PItJDHVofr4NoN-2y6sEuMKOGkcSr2G-kyEI0KA9pXpAQatzBnNTyelGMWY6lCIlFd-LABxkiaSPy-cR6aHM-AQe2SfQXgg7RIgXZ6MDfU-wAXFhRDi1XgxswvduaJi8emnEU46kSgT5T-0WgOY-xfhhanGkRSj-vOokLBYdkMjlR4zZh1MinPBy?width=500&height=500&cropmode=none",
]




const Home = (props) => {
  return (
    <div className="page-conatiner-box">
      <ContainerWidget bgImg={MAIN_PAGE_IMAGES[0]} btnText={props.texts('home_1')} title={props.texts("PageBalloons")} description={props.texts("HomeText2")}/>
      <ContainerWidget bgImg={MAIN_PAGE_IMAGES[1]} btnText={props.texts('home_2')} title={props.texts("PageBackdrop")}  description={props.texts("HomeText3")}/>
      <ContainerWidget bgImg={MAIN_PAGE_IMAGES[2]} btnText={props.texts('home_3')} title={props.texts("PageDecorations")}  description={props.texts("HomeText4")}/>
      <ContainerWidget bgImg={MAIN_PAGE_IMAGES[3]} btnText={props.texts('home_4')} title={props.texts("PageEvents")}  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
      <ContainerWidgetVideo/>
      <ContactForm />
    </div>
  );

}
export default Home;