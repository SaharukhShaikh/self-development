import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './containers/Home';
import Favourites from './containers/Favorites';
import Preview from './containers/Preview';
import Details from './containers/Details';
import Places from './containers/Places';


const Router = () => {
    return (
        <>
            <Switch>
                
            <Route exact path={'/'} component={Home} />
            <Route exact path={'/favourites'} component={Favourites} />
            <Route exact path={'/preview/:id'} component={Preview} />
            <Route exact path={'/details'} component={Details} />
            <Route exact path={'/places/:id'} component={Places} />

            </Switch>
        </>
    );
};
export default Router;
