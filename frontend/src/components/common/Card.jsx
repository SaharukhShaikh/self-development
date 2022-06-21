import Footer from "./Footer";
import Header from "./Header";
import React from "react";
import { useEffect,useState } from "react";
import { addFavourite } from "../../reducks/favorites/operations";
import { getFavourites } from "../../reducks/favorites/selectors";
import { useSelector , useDispatch } from "react-redux";



import mapicon from '../../assets/img/mapicon.svg'
import map from '../../assets/img/map.png'

const Card = ({ place }) => {
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

    <div class="header">
            <img src={place.image} class="mains" alt=""/>
        </div>
        <section>
            <div class="page">
                <h3 class="heading-page">{place.name}</h3>
                <p>{place.description}</p>
            </div>
        </section>

        <div>
        <img src={map} class="maps" alt=""/>
            <a href={place.googel_map_link} target="_blank">
            <img src={mapicon} alt="" class="arrowicon" />
            </a>
        
            
        
        </div>

    </>
  )
}

export default Card
