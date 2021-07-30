import React, { Component } from 'react';
import ItemList from '../itemList';
import Fetch from '../../fetch';
import { withRouter } from 'react-router';


class BooksPage extends Component {
    constructor() {
        super();

        this.gotService = new Fetch();

    }

    render() {
        return (
            <ItemList
                onItemSelected={(itemId) => {
                    this.props.history.push(`/books/${itemId}`)
                }}
                getData={this.gotService.getAllBooks}
                renderItem={(item) => item.name} />
        )
    }
}

export default withRouter(BooksPage);