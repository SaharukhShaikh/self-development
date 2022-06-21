import React, { useEffect,useState} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import {addFavourite,deleteFavourite} from '../../reducks/favorites/operations'
import { getFavourites } from '../../reducks/favorites/selectors';
import { push } from 'connected-react-router';



import like from '../../assets/img/heart.png'

const Thumbnail = ({ place }) => {
    const dispatch = useDispatch();
    const clickFavourite = (place) => {
      dispatch(addFavourite(place));
    };
    const selector = useSelector((state) => state);
    const favourites = getFavourites(selector);
    const [showLikeButton, setShowLikeButton] = useState(true);
    useEffect(() => {
      let favoritePlace = favourites.filter(
        (favourite) => favourite.id == place.id
      );
      if (favoritePlace.length > 0) {
        setShowLikeButton(false);
      }
    }, [favourites]);
  return (
    <>
    <div class="Tour-images">
        <div class="Tour-1">
            <img src={place.image} alt="" onClick={() => dispatch(push( "/places/"+place.id))}/>
            <p>{place.name}</p>
            <p>{place.description}</p>
            <img src={like} id="like"
            onClick={() => {
                setShowLikeButton(!showLikeButton);
                if (showLikeButton) {
                  clickFavourite(place);
                } else {
                  dispatch(deleteFavourite(place.id));
                }
              }}
              style={{ backgroundColor: showLikeButton ? "white" : "red" }}
              alt=""/>
        </div>
    </div>
    </>
  )
}

export default Thumbnail
