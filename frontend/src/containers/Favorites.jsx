import React from 'react';
import FavCard from '../components/common/FavCard';
import Footer from '../components/common/Footer';
import Search from '../components/common/Search';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getFavourites } from '../reducks/favorites/selectors';
import { useEffect } from 'react';
import { fetchFromLocalStorage } from '../reducks/favorites/operations';
import { getCategories } from '../reducks/categories/selectors';
import { fetchCategories } from '../reducks/categories/operations';

import main from '../assets/img/main.png'
import glass from '../assets/img/magnifying-glass.png'
import moustache from '../assets/img/moustache.svg'

import FavHead from '../components/common/FavHead';



const Favourites = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const favourites = getFavourites(selector);
  console.log(favourites);
  useEffect(() => {
    dispatch(fetchFromLocalStorage());
  }, []);
  const categories = getCategories(selector);
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchFromLocalStorage());
  }, []);
  return (
    <>
    <FavHead/>
    <section class="header">
        <img src={main} class="mains" alt=""/>
        <div class="shades"></div>
        <div class="header-input">
            <h1>Happiest Place On Earth</h1>
                <Search img={glass}/>
        </div>
    </section>
    <h2 class="Wonder">Favorites</h2>
    <img src={moustache} class="moustachee" alt=""/><br />
    <section>
        <div class="Tour-images">
        {favourites.map((favourite) => (
          <FavCard favourite={favourite} />
        ))}
       
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default Favourites;
