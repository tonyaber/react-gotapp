import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import ItemList from '../itemList';
import CharDetails from '../charDetails/charDetails';

export default class CharacterPage extends Component{
    constructor() {
        super();
        this.state = {
            selecterChar: 130,
        }
        this.onCharSelected = this.onCharSelected.bind(this);
    }

    onCharSelected(id) {
        this.setState({ selectedChar: id });
    }
    
    render() {
        return (
            <Row>
                <Col md='6'>
                    <ItemList onCharSelected={this.onCharSelected} />
                </Col>
                <Col md='6'>
                    <CharDetails charId={this.state.selectedChar} />
                </Col>
            </Row>
        )
    }
}