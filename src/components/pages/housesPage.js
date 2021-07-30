import React, { Component } from 'react';
import ItemList from '../itemList';
import ItemDetails, { Field } from '../itemDetails';
import Fetch from '../../fetch';
import RowBlock from '../rowBlock';

export default class HousesPage extends Component {
    constructor() {
        super();
        this.state = {
            selectedHouse: null,
        }
        this.gotService = new Fetch();
        this.onItemSelected = this.onItemSelected.bind(this);
    }

    onItemSelected(id) {
        this.setState({ selectedHouse: id });
    }

    render() {

        const itemList = (<ItemList
            onItemSelected={this.onItemSelected}
            getData={this.gotService.getAllHouses}
            renderItem={(item) => item.name} />);

        const itemDetails = (
            <ItemDetails
                itemId={this.state.selectedHouse}
                getData={this.gotService.getHouse} >
                <Field field='region' label='Region' />
                <Field field='words' label='Words' />
                <Field field='titles' label='Titles' />
                <Field field='ancestralWeapons' label='Ancestral Weapons' />
            </ItemDetails>
        );
        
        return (
            <RowBlock list={itemList} details={itemDetails} />
        )
    }
}