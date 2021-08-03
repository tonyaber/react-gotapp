import React, { Component } from 'react';
import { Col, Row, Container, Button } from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import { CharacterPage, BooksPage, HousesPage, BooksItem, HomePage, WrongPage } from '../pages';
import Fetch from '../../fetch';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './app.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            randomChar: true,
            error: false,
            selectedChar: null,
        }

        this.gotService = new Fetch();

        this._toggleRandomChar = this._toggleRandomChar.bind(this);
        this.onItemSelected = this.onItemSelected.bind(this);

    }

    onItemSelected(id) {
        this.setState({ selectedChar: id });
    }

    componentDidCatch() {
        this.setState({ error: true });
    }

    _toggleRandomChar() {
        this.setState({ randomChar: !this.state.randomChar });
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage />
        }

        const char = this.state.randomChar ? <RandomChar interval={4000} /> : null;

        return (
            <Router>
                <div className='app'>
                    <Container>
                        <Header />
                    </Container>
                    <Container>
                        <Row>
                            <Col lg={{ size: 7, offset: 0 }}>
                                {char}
                            </Col>
                        </Row>
                        <Row>
                            <Col className="mb-5" >
                                <Button onClick={this._toggleRandomChar} color="primary">Toggle random character</Button>
                            </Col>
                        </Row>

                        <Switch>
                            <Route path='/characters' exact component={CharacterPage} />
                            <Route path='/houses' exact component={HousesPage} />
                            <Route path='/books' exact component={BooksPage} />
                            <Route path='/books/:id' render={
                                ({ match }) => {
                                    const { id } = match.params;
                                    return <BooksItem bookId={id} />
                                }
                            } />
                            <Route path="/" exact component={HomePage} />
                            <Route component={WrongPage} />

                        </Switch>

                    </Container>
                </div>
            </Router>
        );
    }

};

export default App;