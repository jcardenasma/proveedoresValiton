import React from 'react';
import {BrowserRouter, Switch , Route} from 'react-router-dom';
import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';
import Layout from '../components/Layout';
import Notfound from '../pages/Notfound';
import Home from '../pages/Home';

function App() {
    return (
        
<BrowserRouter>
<Layout>
<Switch>
<Route exact path="/" component={Home} />
<Route exact path = "/badges" component = {Badges} />
<Route exact path = "/badges/new" component = {BadgeNew} />
<Route component = {Notfound} />
</Switch>
</Layout>
</BrowserRouter>
);
}
export default App;