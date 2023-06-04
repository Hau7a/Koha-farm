import './App.css';
import { GoodsList,Detail,Cart } from './shop-content.js';
import { Body } from './body.js';
import { Header,Footer } from './updown.js';
import { Access, About, Alert } from './otherpage.js';
import { Login } from './login.js';
import { ProductsList } from './productslist.js';
import { BrowserRouter, Routes ,Route, Link} from 'react-router-dom';
import React, {useState, useEffect} from 'react';

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

function App() {

  const [loginData,setLoginData] = useState(["ゲスト","",0]);

  const loginfunction = (userid, set) => {
    setLoginData(
      prev => [userid, set]
    );
  }

  return (
    <div>
      <BrowserRouter>
        <Header username={loginData}/>
        
        <div className="empty"> {/*余白調節*/}
          <Routes>
            <Route path="/" element={<Body />}></Route>
            <Route path="/login" element={<Login loginfunction={loginfunction} data={loginData} />}></Route>
            <Route path="/cart" element={<Cart data = {loginData} />}></Route>
            <Route path="/access" element={<Access />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/goodslist" element={<GoodsList />}></Route>
            <Route path="/productslist" element={<ProductsList />}></Route>
            <Route path="/detail/:id" element={<Detail />}></Route>
            <Route path="/gallery" element={<Portfolio />}></Route>
          </Routes>
        </div>

        <Footer/>
      </BrowserRouter>
    </div>
  );
}
 
const images = [
  {
    original: 'images/gallery1.png',
    thumbnail: 'images/gallery1.png',
  },
  {
    original: 'images/gallery2.png',
    thumbnail: 'images/gallery2.png',
  },
  {
    original: 'images/gallery3.png',
    thumbnail: 'images/gallery3.png',
  },
  {
    original: 'images/gallery4.png',
    thumbnail: 'images/gallery4.png',
  },
  {
    original: 'images/gallery8.png',
    thumbnail: 'images/gallery8.png',
  },
  {
    original: 'images/gallery5.png',
    thumbnail: 'images/gallery5.png',
  },
  {
    original: 'images/gallery6.png',
    thumbnail: 'images/gallery6.png',
  },
  {
    original: 'images/gallery7.png',
    thumbnail: 'images/gallery7.png',
  },
];
 
const Portfolio = () => (
    <div className="aaa2">
        <img className="g-logo" src="images/g-logo.png"></img>
        <ImageGallery
            items={images}
            showNav={false}
            autoPlay={false}
            showFullscreenButton={true}
            useBrowserFullscreen={true}
            showPlayButton={true}
        />
    </div>
);

export default App;
