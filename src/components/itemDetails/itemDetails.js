import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import './itemDetails.css';
import Fetch from '../../fetch';
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

export default class ItemDetails extends Component {
    constructor(props) {
        super(props);
        this.gotService = new Fetch();
        this.state = {
            item: null,
            loading: true,
        }
        
    }

    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
          this.updateChar();  
        }        
    }
    

    updateChar() {
        const { itemId, getData } = this.props;
        
        if (!itemId) {
            this.setState({loading: false });
            return;
        }

        getData(itemId)
            .then((item) => {
                this.setState({ item,loading: false});
            })
            .catch(() => {
                this.setState({ item: undefined, loading: false});
        })
    }

    render() {
        if (this.state.loading) {
            return <Spinner/>
        }
        
        if (this.state.item===null) {
            return <span className="select-error">Please select something</span>
        }
        if (this.state.item === undefined) {
            return <WrongPage/>
        }

        const { item } = this.state;
        const { name } = item;
        const itemDetails = (
            <>
            <h4>{name}</h4>
                    <ListGroup className="list-group list-group-flush">
                    {
                        React.Children.map(this.props.children, (child) => {
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
}