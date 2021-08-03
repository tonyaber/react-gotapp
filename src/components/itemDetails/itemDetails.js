import React, { useState, useEffect} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import './itemDetails.css';
import { WrongPage } from '../pages';
import Spinner from '../spinner';

const Field = ({ item, field, label }) => {
    
    return(
        <ListGroupItem className = "list-group-item d-flex justify-content-between" xs = "2" >
           <span className="font-weight-bold">{label}</span>
            <span>{item[field]?item[field]:'No data'}</span>
        </ListGroupItem >
    )
}

export { Field };
    
function ItemDetails({ itemId, getData, children}) {
    
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        updateChar();
    }, [itemId])

    function updateChar() {
        if (!itemId) {
            setLoading(false);
            return;
        }

        getData(itemId)
            .then((item) => {
                setItem(item);
                setLoading(false);
            })
            .catch(() => {
                setItem(undefined);
                setLoading(false);
            })
    }

    
    if (loading) {
        return <Spinner/>
    }
        
    if (item===null) {
        return <span className="select-error">Please select something</span>
    }
    if (item === undefined) {
        return <WrongPage/>
    }

    
    
    const itemDetails = (
        <>
            <h4>{item.name}</h4>
            <ListGroup className="list-group list-group-flush">
            {
                React.Children.map(children, (child) => {
                    return React.cloneElement(child, {item})
                })
            }
            </ListGroup>
        </>
    )
                
    return (
        <div className="char-details rounded">
            {itemDetails}
        </div>
    );
    
}

export default ItemDetails;