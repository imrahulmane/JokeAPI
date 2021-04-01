import React from 'react';
import man from './man.png'
import './jokes.css';

const jokes = (props) => {
    return(
        <div className='mainSection'>
            <img src={man} className='image' alt='img' />
            <div className='jokeSection'>
            <h3>{props.joke}</h3>
            </div>
            <div className='btn'>
            <button id='one'  value="Misc" onClick={props.click}>Misc</button>
            <button id='two' value="Coding" onClick={props.click}>Coding</button>
            <button id='three' value="Dark" onClick={props.click}>Dark</button>
            <button id='four' value="Spooky" onClick={props.click}>Spooky</button>
            </div>
        </div>
    );
}


export default jokes;