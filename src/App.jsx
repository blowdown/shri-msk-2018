import React from 'react';
import Modal from './Modal';
import Meeting from './Meeting';
import Button from './Button';
import Calendar from './Calendar';

const members = [
    { id: 1, login: 'Лекс Лютер', homeFloor: 11, avatarUrl: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { id: 2, login: 'Дарт Вейдер', homeFloor: 7, avatarUrl: 'https://randomuser.me/api/portraits/men/2.jpg' },
    { id: 3, login: 'Томас Андерсон', homeFloor: 3, avatarUrl: 'https://randomuser.me/api/portraits/men/3.jpg' }
];

const rooms = [
    { id: 1, title: '404', capacity: 5, floor: 4 },
    { id: 2, title: 'Деньги', capacity: 4, floor: 2 },
    { id: 3, title: 'Карты', capacity: 4, floor: 2 },
    { id: 4, title: 'Ствола', capacity: 2, floor: 2 },
    { id: 5, title: '14', capacity: 6, floor: 3 }
];

export default class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            location: 'index',
        }
    }

    render() {
        if (this.state.location.startsWith('meeting-creation')) {
            return <React.Fragment>
                <Meeting
                    members={members}
                    rooms={rooms}
                    onCancel={() => this.setState({ location: 'meeting-creation-cancel' })}
                    onCreate={(data) => this.setState({ location: 'index-meeting-created' })}
                />
                {this.state.location !== 'meeting-creation-cancel' ? null :
                    <Modal icon="danger" title={'Встреча будет\nудалена безвозвратно'}>
                        <Button onClick={() => this.setState({ location: 'meeting-creation' })}>Отмена</Button>
                        <Button onClick={() => this.setState({ location: 'index' })}>Удалить</Button>
                    </Modal>
                }
            </React.Fragment>;
        }

        return <React.Fragment>
            <Calendar rooms={rooms} />
            {this.state.location !== 'index-meeting-created' ? null :
                <Modal icon="success" title="Встреча создана!" description={'14 декабря, 15:00—17:00\nГотем · 4 этаж'}>
                    <Button primary={true} onClick={() => this.setState({ location: 'index' })}>Хорошо</Button>
                </Modal>
            }
        </React.Fragment>;
    }
}
