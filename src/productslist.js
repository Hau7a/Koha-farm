import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './productslist.css'

export function ProductsList(props){

    let i = 0 ;

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);


    function changeimg(url,e) {
        document.getElementById("img").src = url;
        let nodes = document.getElementById("thumb_img");
        let img_child = nodes.children;
        for (i = 0; i < img_child.length; i++) {
          img_child[i].classList.remove('active')
        }
        e.classList.add('active');
      
      }



    return (
        <div id="content">
            <div id="featured_img">
                <img id="img" src="https://www.imamura.biz/blog/wp-content/uploads/image01.png" />
            </div>
            <div id="thumb_img" className="cf">
                <img className="active" src="https://www.imamura.biz/blog/wp-content/uploads/image01_thumb.png" onclick="changeimg('https://www.imamura.biz/blog/wp-content/uploads/image01.png',this);" />
                <img src="https://www.imamura.biz/blog/wp-content/uploads/image02_thumb.png" onclick="changeimg('https://www.imamura.biz/blog/wp-content/uploads/image02.png',this);" />
                <img src="https://www.imamura.biz/blog/wp-content/uploads/image03_thumb.png" onclick="changeimg('https://www.imamura.biz/blog/wp-content/uploads/image03.png',this);" />
            </div>
        </div>
    );
}

