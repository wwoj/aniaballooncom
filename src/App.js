import './App.css';
import "./Styles/main.scss";


import { HashRouter,Route, Routes } from 'react-router-dom';
import Home from './Views/home';
import Contact from './Views/contact';

import HeaderMain from './Components/header';
import Footer from './Components/footer';
import { useTranslation } from 'react-i18next';
import Gallery_Backdrops from './Views/gallery_Backdrops';


function App() {
  const {t,i18n} = useTranslation();
  return (
    <div className="App">
      <HashRouter>
        <HeaderMain t={t} i18n={i18n} />
        <Routes>
          <Route exact path="/" element={<Home t={t} i18n={i18n} />} />

          <Route
            exact
            path="/backdrops"
            element={<Gallery_Backdrops t={t} />}
          />
          <Route exact path="/contact" element={<Contact t={t} />} />
        </Routes>
      </HashRouter>
      <div className="footer-cover"></div>
      <Footer t={t} />
    </div>
  );
}

export default App;
