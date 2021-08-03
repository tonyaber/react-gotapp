import React, { useState, useEffect } from 'react';
import './randomChar.css';
import Fetch from '../../fetch'
import Spinner from '../spinner';
import View from './view';
import ErrorMessage from '../errorMessage';

function RandomChar({interval}) {
    const [char, setChar] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetch = new Fetch();

    useEffect(() => {
        updateChar();
        const timerId = setInterval(updateChar, interval);
        return () => {
            clearInterval(timerId);
        }    
    }, []);

    function onCharLoaded(char) {
        setChar(char);
        setLoading(false);        
    }

    function onError(err) {
        setError(true);
        setLoading(false);
    }

    function updateChar() {
        const id = Math.floor(Math.random() * 2138);
        
        fetch.getCharacter(id)
            .then(onCharLoaded)
            .catch(onError);
    }

     
    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error) ? <View char={char} /> : null;

    return (
        <div className="random-block rounded">
            {errorMessage}
            {spinner}
            {content}
        </div>
    );
    
}
export default RandomChar;