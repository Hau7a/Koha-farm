import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './otherpage.css'


export function Access(props) {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div>
            <header>
                <div className="mappage">
                    <h1 className="mapcontent-title">周辺マップ</h1>
                    <img src="images/map.png" className="map1"></img>
                    <div className="mapdetail">
                        <h3 className="detail-distance">大橋駅北口から歩いて15分 / 大橋ICから車で5分</h3>
                    </div>
                </div>
            </header>
        </div>
    );
}

export function About(props) {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div className="aboutpage">
            <div className="about1">
                <img src="images/main1-logo.png" className="about1-title" height="50px"></img>
                <h2>KOHA-FARMのこだわり</h2>
                <h5>KOHA-FARMでは4種類の果物を育てています。綺麗な水と昼夜の寒暖差を生かして甘くておいしい果実の栽培を行ってきました。イチゴと柿の栽培をメインに、梨やみかんなど様々な果実を直送販売。また、オンライン限定で自家製のジャムやジュースの販売も行っています。</h5>

                <div className="about1-pictures">
                    <img src="images/kaki4.png" className="about1-pc1"></img>
                    <img src="images/st3.png" className="about1-pc2"></img>
                </div>

                <div className="main1-btn">
                    <Link to="/gallery" className="main-1">ギャラリーを見る</Link>
                </div>
            </div>

            <div className="about2">
                <div className="about-title">
                    <h1>ペット同伴可能！</h1>
                    <img src="images/foot1.png" width="50px" heigth="50px"></img>
                </div>
                <h3>小型犬・大型犬用の2つのドックランを用意しています！</h3>
                <h3>また、園内にはペット同伴可能なレストランもご用意しています。</h3>
            </div>
        </div>
    );
}
