import React, {Component} from 'react';
import './itemList.css';
import Spinner from '../spinner';

export default class ItemList extends Component {
    constructor(props) {
        super(props);
      
        this.state = {
           itemList: null,
        }
    }

    componentDidMount() {
        const { getData } = this.props;
        getData()
            .then((itemList) => {
                this.setState({ itemList })
            });
    }

    renderItems(arr) {
        
        return arr.map((item, index) => {
            const id = +/\d+/.exec(item.url)
            const label = this.props.renderItem(item);
            return (
                <li
                    key={index}
                    className="list-group-item"
                    onClick={()=>this.props.onItemSelected(id)}
                >
                    {label}
                </li>
           )
       })
    }

    render() {
        const { itemList } = this.state;

        if (!itemList) {
            return <Spinner/>            
        }

        return (
            <ul className="item-list list-group">
               {this.renderItems(itemList)}
            </ul>
        );
    }
}