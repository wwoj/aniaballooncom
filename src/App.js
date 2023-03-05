import './App.css';
import "./Styles/main.scss";


import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Views/home';
import Contact from './Views/contact';

import HeaderMain from './Components/header';
import Footer from './Components/footer';
import Gallery_Backdrops from './Views/gallery_Backdrops';
import { useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { ANIMAL_BALLOONS, DECORATION_BALLOONS, EVENT_IMAGES, BACKDROP_IMAGES } from "./Pictures/GalleryImages"

function App() {
  const [selected, setSelected] = useState("us");
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(selected);

  }, [selected])
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderMain texts={t} selected={selected} setSelected={setSelected} />
        <Routes>
          <Route exact path="/" element={<Home texts={t} />} />

          <Route
            exact
            path="/animalBalloons"
            element={
              <Gallery_Backdrops
                gallerySource={ANIMAL_BALLOONS}
                title={t("GalleryTitle1")}
              />
            }
          />
          <Route
            exact
            path="/backdrops"
            element={
              <Gallery_Backdrops
                gallerySource={BACKDROP_IMAGES}
                title={t("GalleryTitle2")}
              />
            }
          />
          <Route
            exact
            path="/decorations"
            element={
              <Gallery_Backdrops
                gallerySource={DECORATION_BALLOONS}
                title={t("GalleryTitle3")}
              />
            }
          />
          <Route
            exact
            path="/events"
            element={
              <Gallery_Backdrops
                gallerySource={EVENT_IMAGES}
                title={t("GalleryTitle4")}
              />
            }
          />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <Footer texts={t}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
