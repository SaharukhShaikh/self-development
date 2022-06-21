import React from 'react'
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router'
import { useState } from 'react';
import ImgLogo from '../../assets/img/logo-1.svg'



const FavHead = () => {
    const dispatch = useDispatch();
    const [color, setColor] = useState("black");
  
    const myStyle = {
      color: color,
    };
    let changeColor = () => {
      color !== "#08aeea" ? setColor("#08aeea") : setColor("black");
    };
  return (
    <>

        <nav>
          <div class="logo">
            <img src={ImgLogo} alt="" />
          </div>
          <div class="list-item">
            <p>
              <a href="/" id="ic">
                HOME
              </a>
            </p>
            <p>WONDERS IN EUROPE</p>
            <p>TOURIST ATTRACTION</p>
            <p
              onClick={() => {
                dispatch(push("/favourites"));
              }}
            >
              <a id="fav">FAVOURITE</a>
            </p>
          </div>
         
        </nav>

      <script
        src="https://code.jquery.com/jquery-3.6.0.js"
        integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
        crossorigin="anonymous"
      ></script>
    </>
  )
}

export default FavHead