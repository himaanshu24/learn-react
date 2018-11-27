import React, { Fragment } from 'react';
// import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import RenderPattern from './RenderPattern';
import Clock from './Clock';
import Toggle from './Toggle';
import Condition from './Condition';
import Controlled from './Controlled';
import './styles.css';

const rootElement = document.getElementById('root');
ReactDOM.render(<Controlled />, rootElement);
