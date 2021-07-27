import React, {Component} from 'react';
import './randomChar.css';
import Fetch from '../../fetch'
import Spinner from '../spinner';
import View from './view';
import ErrorMessage from '../errorMessage';

export default class RandomChar extends Component {
    constructor() {
        super();
        this.state = {
            char: {},
            loading: true,
            error: false,
        }

        this.onCharLoaded = this.onCharLoaded.bind(this);
        this.updateChar = this.updateChar.bind(this);
        this.onError = this.onError.bind(this);

        this.fetch = new Fetch();
    }

    componentDidMount() {
        this.updateChar();
        this.timerId = setInterval(this.updateChar, 1500);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }
    onCharLoaded(char) {
        this.setState({
            char,
            loading: false,
        })
    }

    onError(err) {
        this.setState({
            error: true,
            loading: false,
        })
    }

    updateChar() {
        const id = 100000000;
        this.fetch.getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError);
    }

    render() {
        const { char, loading, error } = this.state;

        const errorMessage = error ? <ErrorMessage /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = !(loading || error) ? <View char={char} /> : null;
        
        return (
            <div className="random-block rounded">
                {errorMessage}
                {spinner}
                {content}
            </div>
        );
    }
}

