import React from 'react';
import './errorMessage.css';
const ErrorMessage = () => {
    return (
        <div className="error-message">
            <img src={process.env.PUBLIC_URL + '/img/error.jpg'} alt="Error"></img>
            <div>Something goes wrong</div>            
        </div>
    )
}

export default ErrorMessage;