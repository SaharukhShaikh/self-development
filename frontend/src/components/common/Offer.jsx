import React from 'react';
import blur from '../../assets/img/blur-image-2.png'

function Offer() {
  return (
  <>
    <div class="blur-header-1">
            <img src={blur} class="blur-2" alt=""/>
            <h2>Get 10% Off on Your Next Travel</h2>
            <p>Maximum discount 1000$ per person</p>
            <input type="text" class="middle-search" placeholder="Enter Your Mail"/>
            <button type="submit" class="blur-header-1-button">Subcribe</button>
            <div class="shade"></div>
        </div>
    </>
  );
}

export default Offer;
