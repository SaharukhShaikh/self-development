import React from 'react';
import map from '../../assets/img/map.png'
import mapicon from '../../assets/img/mapicon.svg'
function Map() {
  return (
      <>
      <div>
            <img src={map} class="maps" alt=""/>
            <a href="">
            <img src={mapicon} alt="" class="arrowicon" />
            </a>
            
        </div>
        </>
  );
}

export default Map;
