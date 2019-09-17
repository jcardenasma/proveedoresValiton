//const element = document.createElement ('h1')
//element.innerText = 'Hello, plazi bages';

//const container = document.getElementById('root')
//container.appendChild(element)

import React from 'react';
import ReactDOM from 'react-dom';
import BadgeNew from './pages/BadgeNew';

const container = document.getElementById('root');
ReactDOM.render(
    <BadgeNew />,
    container);