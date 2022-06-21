import React,{useEffect,useState}from 'react';
import { useDispatch,useSelector } from 'react-redux';
import queryString from 'query-string'
import { fetchPlaces } from '../reducks/places/operations';
import { getPlaces } from '../reducks/places/selectors';
import { fetchFromLocalStorage } from '../reducks/favorites/operations';
import Card from '../components/common/Card';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Search from '../components/common/Search';



const Places = (props) => {
    const parsed = queryString.parse(window.location.search);
    const [search, setSearch] = useState(null);
    const [category, setCategory] = useState(null);
    const dispatch = useDispatch();
    const selector = useSelector((state) => state);
    const places = getPlaces(selector);
  
    useEffect(() => {
      dispatch(fetchFromLocalStorage());
  
      if (parsed.search !== undefined) {
        setSearch(parsed.search);
      }
      if (parsed.category !== undefined) {
        setCategory(parsed.category);
      }
    }, []);
    useEffect(() => {
      if (search != null || category != null) {
        dispatch(fetchPlaces(search, category));
      }
    }, [search, category]);
    const placeid=props.match.params.id
  return (
    <>
    <Header/>
    <section class="header">
    <div class="header-input">
    <Search  />
                </div>
                {places.map((place) => {
            return (
              place.id==placeid &&
            <Card place={place} />)
        })}
            </section>
    <Footer/>
      
    </>
  );
}

export default Places;
