import React, { Component } from 'react';
import Fetch from '../../fetch';
import ItemDetails, { Field } from '../itemDetails';

export default class BooksItem extends Component {
    constructor() {
        super();
        
        this.gotService = new Fetch();
    }
   

    render() {
        
        return (
            <ItemDetails
                itemId={this.props.bookId}
                getData={this.gotService.getBook} >
                <Field field='numberOfPages' label='Number of pages' />
                <Field field='publisher' label='Publisher' />
                <Field field='released' label='Released' />
            </ItemDetails>
        )
    }
}