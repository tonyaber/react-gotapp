import React, { Component } from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import CharacterPage from '../characterPage/characterPage';

class App extends Component {
    constructor() {
        super();
        this.state = {
            randomChar: true,
            error: false,
        }
        
        this._toggleRandomChar = this._toggleRandomChar.bind(this);
    }

    componentDidCatch() {
        this.setState({ error: true });
    }

    _toggleRandomChar() {
        this.setState({randomChar: !this.state.randomChar});
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage />
        }

        const char = this.state.randomChar ? <RandomChar /> : null;

        return (
            
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 7, offset: 0}}>
                            {char}
                        </Col>
                    </Row>
                    <Row>
                        <Col className="mb-5" >
                            <Button onClick={this._toggleRandomChar} color="primary">Toggle random character</Button>
                        </Col>                        
                    </Row>
                    <CharacterPage/>
                </Container>
            </>
        	);
    }
    
};

export default App;