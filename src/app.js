import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'


import Container from './components/container';

ReactDOM.render(
    <BrowserRouter>
        <Container />
    </BrowserRouter>, document.getElementById('app'));