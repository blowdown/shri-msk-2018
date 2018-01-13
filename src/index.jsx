import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import Modal from './Modal';
import Header from './Header';

class App extends React.Component {
    constructor (props, context) {
        super(props, context);

        this.state = { showModal: false };
    }

    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(r => r.json())
            .then(post => {
                setTimeout(() => this.setState({ post }), 2000);
            })
    }

    render() {
        return <div>

            <Header></Header>

            { !this.state.post ? '---' :
                <div>
                    {this.state.post.title}
                </div>
            }

            <Button primary={true} onClick={() => this.setState({ showModal: true })}>
                Show modal
            </Button>

            { !this.state.showModal ? null :
                <Modal title={"Встреча будет\nудалена безвозвратно"} icon="danger">
                    <Button onClick={() => this.setState({ showModal: false })}>Отмена</Button>
                    <Button primary={true} onClick={() => this.setState({ showModal: false })}>Удалить</Button>
                </Modal>
            }
        </div>
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

