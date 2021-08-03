import React, { useState, useEffect } from 'react';
import './itemList.css';
import Spinner from '../spinner';


function ItemList({ getData, onItemSelected, renderItem }) {
    const [itemList, updateList] = useState([]);

    useEffect(() => {
        getData()
            .then((data) => {
                updateList(data);
            });
    }, [])


    function renderItems(arr) {
        return arr.map((item, index) => {
            const id = +/\d+/.exec(item.url)
            const label = renderItem(item);
            return (
                <li
                    key={index}
                    className="list-group-item"
                    onClick={() => onItemSelected(id)}>
                    {label}
                </li>
            )
        })
    }

    if (!itemList) {
        return <Spinner />
    }

    return (
        <ul className="item-list list-group">
            {renderItems(itemList)}
        </ul>
    );
}

export default ItemList;
