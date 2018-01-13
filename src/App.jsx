import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import Modal from './Modal';
import Header from './Header';
import Footer from './Footer';
import Meeting from './Meeting';
import './app.css';

export default class App extends React.Component {
    constructor (props, context) {
        super(props, context);
    }

    render() {
        return <div className="app">

            <Header></Header>

            <div className="app__content-scroll">
                <div className="app__content">
                    <Meeting></Meeting>
                </div>
            </div>

            <Footer>
                <Button>Отмена</Button>
                <Button primary={true}>Создать встречу</Button>
            </Footer>
        </div>
    }
}
