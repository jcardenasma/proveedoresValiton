import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import Home from '../pages/Home';
import Badges from '../pages/Badges';
import BadgeNew from '../pages/BadgeNew';
import Notfound from '../pages/Notfound';


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