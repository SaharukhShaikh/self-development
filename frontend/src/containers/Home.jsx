import React from 'react';
import Header from '../components/common/Header';
import { useEffect } from 'react';
import Video from '../components/common/Video';
import Offer from '../components/common/Offer';
import Map from '../components/common/Map';
import Footer from '../components/common/Footer';
import GridContent from '../components/common/GridContent';
import Thumbnail from '../components/common/Thumbnail';
import { getPlaces } from '../reducks/places/selectors';
import { getCategories } from '../reducks/categories/selectors';
import { fetchPlaces } from '../reducks/places/operations';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '../reducks/categories/operations';
import { fetchFromLocalStorage } from '../reducks/favorites/operations';

import main from '../assets/img/main.png';
import glass from '../assets/img/magnifying-glass.png';
import moustache from '../assets/img/moustache.svg';

import Search from '../components/common/Search';
import way from '../assets/img/wavyblue.svg';

const Home = () => {
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const places = getPlaces(selector);
    useEffect(() => {
        dispatch(fetchPlaces());
    }, []);
    const categories = getCategories(selector);
    console.log('categories', categories);
    useEffect(() => {
        dispatch(fetchCategories());
        dispatch(fetchFromLocalStorage());
    }, []);

    return (
        <>
            <Header />
            <section class="header">
                <img src={main} class="mains" alt="" />
                <div class="shades"></div>
                <div class="header-input">
                    <h1>Happiest Place On Earth</h1>
                    <Search img={glass} />
                </div>
            </section>
            <h2 class="Wonder">Natural Wonders in Europe</h2>
            <img src={moustache} class="moustachee" alt="" />
            <br />
            {categories && categories ?
            <div class="footer-1">
                {categories.map((categorys) => (
                    <GridContent key={categorys.id} category={categorys} />
                ))}
            </div> : null}
            <div class="heads">
                <p>Tourist Attractions in Europe</p>
                <img src={way} alt="" />
            </div>
            <section>

                <div class="Tour-images">
                    {places.map(place => (
                        <Thumbnail place={place} />
                    ))}
                </div>
              
            </section>

            <Video />
            <Offer />
            <Map />
            <Footer />
        </>
    );
};

export default Home;
