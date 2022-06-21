import React from 'react';
import { useDispatch } from 'react-redux';
import cancel from '../../assets/img/cancel.png'
import { push } from 'connected-react-router';

const Prev = ({ category }) => {
    const dispatch = useDispatch();
  return (
    <>
    <img src={category.image} alt="" />
    <a onClick={() => dispatch(push("/"))}>
    <img src={cancel} className="cancel" />
    </a>

   
      
    </>
  );
}

export default Prev;
