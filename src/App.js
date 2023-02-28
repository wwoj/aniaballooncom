import './App.css';
import "./Styles/main.scss";


import { HashRouter,Route, Routes } from 'react-router-dom';
import Home from './Views/home';
import Contact from './Views/contact';

import HeaderMain from './Components/header';
import Footer from './Components/footer';
import Gallery_Backdrops from './Views/gallery_Backdrops';
import { useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';

function App() {
  const [selected,setSelected] = useState("us");
  const {t,i18n} = useTranslation();
  useEffect(()=>{
    i18n.changeLanguage(selected);
    
  },[selected])
  return (
    <div className="App">
      <HashRouter>
        <HeaderMain texts={t}  selected={selected} setSelected={setSelected}/>
        <Routes>
          <Route exact path="/" element={<Home  texts={t}/>} />

          <Route
            exact
            path="/backdrops"
            element={<Gallery_Backdrops  />}
          />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </HashRouter>
      <div className="footer-cover"></div>
      <Footer  />
    </div>
  );
}

export default App;
