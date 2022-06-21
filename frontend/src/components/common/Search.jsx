import React from 'react';
import magnifying from '../../assets/img/magnifying-glass.png'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { push } from 'connected-react-router';

const Search = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState();
  
    const inputSearch = (event) => {
      setSearch(event.target.value);
    };
  
    const submitAction = () => {
      dispatch(push("/details?search=" + search));
    };

  return (
    <form onSubmit={submitAction}>
        <input type="text" class="search" placeholder="Search your Destination" />
        <i onclick={() => (console.log('test'))}><img
            onClick={() =>{alert('test')}}src={magnifying} class="magnifying-glass" alt=""/>
        </i>
    </form>
      
  );
}

export default Search;
