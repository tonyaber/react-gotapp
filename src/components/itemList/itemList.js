import React, {Component} from 'react';
import './itemList.css';
import Fetch from '../../fetch';
import Spinner from '../spinner';

export default class ItemList extends Component {
    constructor(props) {
        super(props);
        this.gotService = new Fetch();
        this.state = {
            charList: null,
        }
    }

    componentDidMount() {
        this.gotService.getAllCharacters()
            .then((charList) => {
                this.setState({ charList })
            });
    }

    renderItems(arr) {
        
        return arr.map((item, index) => {
            return (
                <li
                    key={item.url.slice(49)}
                    className="list-group-item"
                    onClick={()=>this.props.onCharSelected(item.url.slice(49))}
                >
                    {item.name}
                </li>
           )
       })
    }

    render() {
        const { charList } = this.state;

        if (!charList) {
            return <Spinner/>            
        }

        return (
            <ul className="item-list list-group">
               {this.renderItems(charList)}
            </ul>
        );
    }
}