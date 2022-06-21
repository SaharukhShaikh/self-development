import React from 'react';
import logo from '../../assets/img/logo-1.svg'
import {push} from 'connected-react-router'
import { useDispatch } from 'react-redux'
import { useState } from 'react';

const Header = () => {
  const dispatch = useDispatch();
  const [color, setColor] = useState("black");

  const myStyle = {
    color: color,
  };
  let changeColor = () => {
    color !== "#08aeea" ? setColor("#08aeea") : setColor("black");
  }
  return (
    <>
    <nav>
            <div class="logo">
                <img src={logo} alt="" />
            </div>
            <div class="list-item">
                <p><a href="/" id="nic">
                HOME
              </a></p>
                <p>WONDERS IN EUROPE</p>
                <p>TOURIST ATTRACTION</p>
                <p onClick={() => {
                  dispatch(push('/favourites'));
                }}>FAVOURITE</p>
            </div>
           
        </nav>

        <script
        src="https://code.jquery.com/jquery-3.6.0.js"
        integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
        crossorigin="anonymous"
      ></script>
          
    </>
  );
}

export default Header;
