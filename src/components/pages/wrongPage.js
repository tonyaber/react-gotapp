import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./page.css";

export default class WrongPage extends Component {
    render() {

        return (
            <>
                <span className="wrong-url">Information does not exist</span>
                <Link to="/" className="wrong-url-link"> Go back to the main page</Link>
            </>
        )
    }
}