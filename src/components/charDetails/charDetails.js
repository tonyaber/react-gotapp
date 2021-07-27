import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import './charDetails.css';
import Fetch from '../../fetch';

export default class CharDetails extends Component {
    constructor(props) {
        super(props);
        this.gotService = new Fetch();
        this.state = {
            char: null
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.charId !== prevProps.charId) {
          this.updateChar();  
        }
    
        
    }
    

    updateChar() {
        const { charId } = this.props;
        if (!charId) {
            return;
        }

        this.gotService.getCharacter(charId)
            .then((char) => {
                this.setState({ char });
            })
    }

    render() {
        if (!this.state.char) {
            return <span className="select-error">Please select a character</span>
        }

        const { name, gender, born, died, culture } = this.state.char;

        return (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ListGroup className="list-group list-group-flush">
                    <ListGroupItem className="list-group-item d-flex justify-content-between" xs="2">
                        <span className="font-weight-bold">Gender</span>
                        <span>{gender}</span>
                    </ListGroupItem>
                    <ListGroupItem className="list-group-item d-flex justify-content-between">
                        <span className="font-weight-bold">Born</span>
                        <span>{born}</span>
                    </ListGroupItem>
                    <ListGroupItem className="list-group-item d-flex justify-content-between">
                        <span className="font-weight-bold">Died</span>
                        <span>{died}</span>
                    </ListGroupItem>
                    <ListGroupItem className="list-group-item d-flex justify-content-between">
                        <span className="font-weight-bold">Culture</span>
                        <span>{culture}</span>
                    </ListGroupItem>
                </ListGroup>
            </div>
        );
    }
}