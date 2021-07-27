import React from "react";

const View = ({ char }) => {

    const { name, gender, born, died, culture } = char;
    return (
        <>
            <h4>Random Character: {name ? name : 'Отсутствуют данные'}</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Gender </span>
                    <span>{gender ? gender : 'Отсутствуют данные'}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Born </span>
                    <span>{born ? born : 'Отсутствуют данные'}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Died </span>
                    <span>{died ? died : 'Отсутствуют данные'}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Culture </span>
                    <span>{culture ? culture : 'Отсутствуют данные'}</span>
                </li>
            </ul>
        </>
    )
}

export  default View;