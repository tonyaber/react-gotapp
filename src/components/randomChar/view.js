import React from "react";

const View = ({ char }) => {

    const { name, gender, born, died, culture } = char;
    return (
        <>
            <h4>Random Character: {name ? name : 'No data'}</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Gender </span>
                    <span>{gender ? gender : 'No data'}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Born </span>
                    <span>{born ? born : 'No data'}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Died </span>
                    <span>{died ? died : 'No data'}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Culture </span>
                    <span>{culture ? culture : 'No data'}</span>
                </li>
            </ul>
        </>
    )
}

export  default View;