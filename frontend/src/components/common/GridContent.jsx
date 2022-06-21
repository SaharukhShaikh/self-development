import React from 'react';
import { useDispatch } from 'react-redux';

import {push} from "connected-react-router"

const GridContent = ({ category }) => {
    const dispatch = useDispatch()
  return (
    <>
    <div class="footer-1">
        <div class="base-1">
            <img src={category.image} onClick={() => dispatch(push("/preview/" +category.id))} alt=""/>
            <p>{category.name}</p>
        </div>
    </div>
      
    </>
  );
}

export default GridContent;
