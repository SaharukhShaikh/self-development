import React ,{useEffect,useState}from 'react'
import Thumbnail from '../components/common/Thumbnail';
import Header from '../components/common/Header';
import Video from '../components/common/Video';
import Offer from '../components/common/Offer';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../reducks/categories/selectors';
import { fetchCategories } from '../reducks/categories/operations';
import queryString from 'query-string';
import { getPlaces } from '../reducks/places/selectors';
import { fetchPlaces } from '../reducks/places/operations';
import Search from '../components/common/Search';
import Map from '../components/common/Map'
import { fetchFromLocalStorage } from '../reducks/favorites/operations';
import Prev from '../components/common/Prev'
import Footer from '../components/common/Footer';

import mainbackground from '../assets/img/main.png'
import magnifying from '../assets/img/magnifying-glass.png'

const Preview = (props) => {
    const parsed = queryString.parse(window.location.search);
    const [search, setSearch] = useState(null);
    const [category, setCategory] = useState(null);
    const dispatch = useDispatch();
    const selector = useSelector((state) => state);
    const places = getPlaces(selector);
    // console.log(places);
    useEffect(() => {
      dispatch(fetchFromLocalStorage());
    }, []);
    const categories = getCategories(selector);
    // console.log(places);
    useEffect(() => {
      dispatch(fetchCategories());
      dispatch(fetchFromLocalStorage());
    }, []);
    const catid=props.match.params.id
  
  return (
    <>
    <Header/>
    <div class="blur">
        <div class="header">
            <img src={mainbackground} class="mains" alt=""/>
            <div class="shades"></div>
           

        </div>
    </div>

    <div class="index">
    {categories.map((category) => {
            return (
              category.id==catid &&
            
        
            <Prev category={category} />)})}
    </div>
    <div class="Tour-images">
    {places.map((place) => (
          <Thumbnail place={place} />
        ))}   
    </div>
    <Video/>
      <Offer/>
      <Map/>
      <Footer />
    </>
  )
}

export default Preview