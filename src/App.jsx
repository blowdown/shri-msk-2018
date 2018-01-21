import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal';
import Meeting from './Meeting';

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
    render() {
        return (
            <Meeting
                members={members}
                rooms={rooms}
            />
        );
    }
}
