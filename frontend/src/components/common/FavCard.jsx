import React,{useState} from 'react';

import { useDispatch } from 'react-redux'
import { deleteFavourite } from '../../reducks/favorites/operations'
import { addPlaceAction } from '../../reducks/places/action'

import heart from '../../assets/img/heart.png'



export const FavCard = ({favourite}) => {
    const dispatch = useDispatch()
    const [showLikeButton, setShowLikeButton] = useState(true);
  return (
    <>
    <div class="Tour-images">
        <div class="Tour-1">
            <img src={favourite.image} alt=""/>
            <p>{favourite.name}</p>
            <p>{favourite.description}</p>
            <img src={heart} id="like"/>
            {showLikeButton && (
        <img
          id="like"
          src={heart}
          style={{backgroundColor:showLikeButton?'red':'white'}}
          onClick={() => {
            dispatch(deleteFavourite(favourite.id));
          }}
          alt=""
        />
      )}
        </div>
    </div>
      
    </>
  );
}

export default FavCard;
