import React from 'react';
import ReactDOM from 'react-dom';

import Headers from './kit/headers/index.jsx';
import Icons from './kit/icons/index.jsx';


export default (props) => (
    <div>
        <h1>Hello, world!</h1>
        <div className="content">
            <Icons />
            <Headers />
        </div>
    </div>
);