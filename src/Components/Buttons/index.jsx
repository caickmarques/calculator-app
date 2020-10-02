import React from 'react';
import './index.css';

const Buttons = () =>{
    return(
        <>
        <div className='container-button'>
        <button>ac</button>
        <button>+/-</button>
        <button>%</button>
        <button>/</button>

        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>X</button>

        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>-</button>

        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>+</button>
        
        <button>0</button>
        <button>.</button>
        <button className='button-equal'>=</button>
    
        </div>       
        </>
        );       
}

export default Buttons;