import React, { Component } from 'react';
import ItemList from '../itemList';
import ItemDetails, {Field} from '../itemDetails';
import Fetch from '../../fetch';
import RowBlock from '../rowBlock';

export default class CharacterPage extends Component{
    constructor() {
        super();
        this.state = {
            selecterChar: null,
        }
        this.gotService = new Fetch();
        this.onItemSelected = this.onItemSelected.bind(this);
    }

    onItemSelected(id) {
        this.setState({ selectedChar: id });
    }
    
    render() {

        const itemList = (<ItemList
            onItemSelected={this.onItemSelected}
            getData={this.gotService.getAllCharacters}
            renderItem={(item) => `${item.name} (${item.gender})`}/>);

        const itemDetails = (
            <ItemDetails itemId={this.state.selectedChar}
                getData={this.gotService.getCharacter} >
                <Field field="gender" label="Gender" />
                <Field field="born" label="Born" />
                <Field field="died" label="Died" />
                <Field field="culture" label="Culture" />                
            </ItemDetails>
        );
        return (
            <RowBlock list={itemList} details={itemDetails}/>
        )
    }
}