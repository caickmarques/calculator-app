import React from 'react';
import Buttons from '../Buttons';
import Display from '../Display';

import './index.css';

const Container = () => {
    return(
        <div className='container'>
            <Display /> 
            <Buttons />
        </div>
    );
}

export default Container;