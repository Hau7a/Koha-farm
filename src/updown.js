import React, {useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import './updown.css'

export function Header(props){
    return (
        <div className="header">
            <h3 className="text1">授業の課題で作成したテストサイトです。</h3>
            <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu"></input>
            <label for="openSidebarMenu" className="sidebarIconToggle">
                    <div className="spinner diagonal part-1"></div>
                    <div className="spinner horizontal"></div>
                    <div className="spinner diagonal part-2"></div>
            </label>

            <div className="top-icon">
                <Link to="/"><img src="images/logo.png" className="top-logo" width="200px"></img></Link>
                <div className="f-icon">
                    <p className="username1">{props.username[0]}様</p>
                    <Link to="/login"><p className="caption1"><span className="tooltip1"><img src="images/login.png" className="cuporn" width="40px" height="40px"></img><span className="description_top">登録</span></span></p></Link>
                    <Link to="/cart"><p className="caption1"><span className="tooltip1"><img src="images/cart.png" className="cart" width="45px" height="45px"></img><span className="description_top">カート</span></span></p></Link>
                </div>
            </div>


            <div id="sidebarMenu">
                <ul className="sidebarMenuInner">
                    <li><span>　ようこそKOHA-FARMへ！</span></li>
                    <li className="listhorver"><Link to="/">TOP</Link></li>
                    <li className="listhorver"><Link to="/about">ABOUT</Link></li>
                    <li className="listhorver"><Link to="/access">ACCESS</Link></li>
                    <li className="listhorver"><Link to="/goodslist">SHOP</Link></li>
                    <li className="listhorver"><Link to="/cart">CART</Link></li>
                    <li className="listhorver"><Link to="/gallery">Gallery</Link></li>
                </ul>
            </div>
        </div>
    );
}

export function Footer(props){
    return (
        <div>
            <footer className="footer">
                <ul className="h-list">
                    <li className="h-item"><Link to="/">TOP</Link></li>
                    <a>|</a>
                    <li className="h-item"><Link to="/about">ABOUT</Link></li>
                    <a>|</a>
                    <li className="h-item"><Link to="/access">ACCESS</Link></li>
                    <a>|</a>
                    <li className="h-item"><Link to="/goodslist">SHOP</Link></li>
                    <a>|</a>
                    <li className="h-item"><Link to="/cart">CART</Link></li>
                </ul>
                <p className="copyright">© 2022 KOHA-FARM</p>
            </footer>
        </div>
    );
}

