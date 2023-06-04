import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './body.css'
import Carousel from 'react-bootstrap/Carousel';

export function Body(props) {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div className="main">
            <div id="head">
                <div className="comment1">
                    <h1 className="comment1-sub1">ひとつひとつ丁寧に作りました</h1>
                    <h3 className="comment1-sub2">豊かな自然に囲まれた環境で育てた無農薬果実。</h3>
                    <h3 className="comment1-sub2">ここでしか食べられない味を是非味わってください</h3>
                </div>
                <div className="scrolldown4"><span>Scroll</span></div>
            </div>

            <div id="container">
                <div id="about">
                    <div className="main1">
                        <img src="images/main1-logo.png" className="main1-title" height="50px"></img>
                        <h2>KOHA-FARMのこだわり</h2>

                        <div className="main1-content1">
                            <h5 className='main1-subtitle'>KOHA-FARMでは4種類の果物を育てています。綺麗な水と昼夜の寒暖差を生かして甘くておいしい果実の栽培を行ってきました。イチゴと柿の栽培をメインに、梨やみかんなど様々な果実を直送販売。また、オンライン限定で自家製のジャムやジュースの販売も行っています。</h5>
                            <div className="about1-pictures">
                                <img src="images/kaki4.png" className="about1-pc1"></img>
                                <img src="images/st5.png" className="about1-pc2"></img>
                            </div>
                        </div>

                        <div className="main1-btn">
                            <Link to="/about" className="main-1">もっと見る</Link>
                        </div>
                    </div>
                </div>

                <div className="main2">
                    <img src="images/main2-logo.png" className="main2-title" height="50px"></img>

                    <div className="main2-sepa">
                        <div className="fruit-ex">
                            <h3 className="fruit-ex-title">フルーツ狩り体験</h3>
                            <div className="main2-content1">
                                <img src="images/MM1.png" className="menutable1"></img>
                            </div>
                        </div>

                        <div className="fruit-pro">
                            <h3 className="fruit-pro-title">ジュース＆ジャム</h3>
                            <div className="main2-content2">
                                <img src="images/MM2.png" className="menutable2"></img>
                            </div>
                        </div>
                    </div>

                    <div className="main2-btn">
                        <Link to="/goodslist" className="main-2">商品一覧</Link>
                    </div>
                </div>



                <div className="main3">
                    <div className="main3-title1">
                        <img src="images/main3-logo.png" className="main3-title" height="50px"></img>
                        <h3 className="main3-subtitle">栄養たっぷり自家製オリジナルフルーツギフト!</h3>
                    </div>

                    <center>
                        <div className="sride1-img">
                            <Carousel>
                                <Carousel.Item interval={4000}>
                                    <img className="d-block w-100" src="images/3.png" alt="Second slide" />
                                    <Carousel.Caption>
                                        <div className="sub-background">
                                            <h3>干し柿ギフト</h3>
                                            <p>ひとつひとつ心をこめて作りました</p>
                                        </div>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={4000}>
                                    <img className="d-block w-100" src="images/gallery1.png" alt="Second slide" />
                                    <Carousel.Caption>
                                        <div className="sub-background">
                                            <h3>いちごギフト</h3>
                                            <p>お子様にもオススメ！無農薬で育てました</p>
                                        </div>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={4000}>
                                    <img className="d-block w-100" src="images/5.png" alt="Second slide" />
                                    <Carousel.Caption>
                                        <div className="sub-background">
                                            <h3>梨の食べ比べギフト</h3>
                                            <p>どの梨が一番好き？それぞれ特徴のある品種です！</p>
                                        </div>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </center>

                    <div className="main3-btn">
                        <Link to="/goodslist" className="main-3">商品一覧</Link>
                    </div>
                </div>




                <div className="main4">
                    <div className="access-detail">
                        <h6 className="main4-sub">大橋ICから車で5分</h6>
                        <h6 className="main4-sub">大橋駅から徒歩15分</h6>
                    </div>


                    <div className="main3-btn">
                        <Link to="/access" className="main-4">アクセス</Link>
                    </div>
                </div>

            </div>
        </div>
    );
}





