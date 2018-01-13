import React from 'react';

import Textbox from './Textbox';
import Dropdown from './Dropdown';
import MembersDropdown from './MembersDropdown';

import './meeting.css';
import './meeting__header.css';

import './member.css';
import './room.css';

function arrayToggle(array, element) {
    array = array.slice();
    const ix = array.indexOf(element);
    if (ix === -1) {
        array.push(element);
    } else {
        array.splice(ix, 1);
    }

    return array;
}

function arrayRemove(array, element) {
    const ix = array.indexOf(element);
    if (ix === -1) {
        return array;
    }

    array = array.slice();
    if (ix !== -1) {
        array.splice(ix, 1);
    }

    return array;
}


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

const Room = ({ timeBegin, timeEnd, room: { title, floor }, onClick }) => (
    <div className="room" onClick={onClick}>
        <div className="room__time">
            {timeBegin.getHours()}:{timeBegin.getMinutes()}
            —
            {timeEnd.getHours()}:{timeEnd.getMinutes()}
        </div>
        <div className="room__name">{title} · {floor} этаж</div>
    </div>
);

const SelectedRoom = ({ timeBegin, timeEnd, room: { title, floor }, onRemove }) => (
    <div className="room room--selected">
        <div className="room__time">
            {timeBegin.getHours()}:{timeBegin.getMinutes()}
            —
            {timeEnd.getHours()}:{timeEnd.getMinutes()}
        </div>
        <div className="room__name">{title} · {floor} этаж</div>
        <button className="room__cancel" onClick={onRemove}></button>
    </div>
)

export default class Meeting extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            selectedMembers: [],
            selectedRoom: null
        };
    }

    render() {
        return (
            <div className="meeting">
                <div className="meeting__header">
                    <h1 className="meeting__header-text">Редактирование встречи</h1>
                    <button className="meeting__header-close"></button>
                </div>

                <div className="meeting__first-row">
                    <div className="meeting__title">
                        <h2 className="meeting__block-title">Тема</h2>
                        <Textbox placeholder="О чем будем говорить?" />
                    </div>

                    <div className="meeting__date">
                        <h2 className="meeting__block-title">Дата</h2>
                        <Textbox placeholder="13 января 2018" icon="calendar" />
                    </div>

                    <div className="meeting__start">
                        <h2 className="meeting__block-title">Начало</h2>
                        <Textbox placeholder="16:00" showClear={false} />
                    </div>

                    <div className="meeting__dash"></div>

                    <div className="meeting__end">
                        <h2 className="meeting__block-title">Конец</h2>
                        <Textbox placeholder="17:00" showClear={false} />
                    </div>
                </div>

                <div className="meeting__second-row">
                    <div className="meeting__members">
                        <h2 className="meeting__block-title">Участники</h2>

                        <div className="meeting__members-dropdown">
                            <MembersDropdown
                                selected={this.state.selectedMembers}
                                members={members}
                                onSelect={member => {
                                    this.setState({ selectedMembers: arrayToggle(this.state.selectedMembers, member) });
                                }}
                            />
                        </div>

                        {
                            this.state.selectedMembers.map(member => (
                                <div className="member" key={member.id}>
                                    <div className="member__avatar" style={{ backgroundImage: `url(${member.avatarUrl})` }} />
                                    <div className="member__name">{member.login}</div>
                                    <button className="member__remove"
                                        onClick={() => {
                                            this.setState({ selectedMembers: arrayRemove(this.state.selectedMembers, member) });
                                        }}
                                    />
                                </div>
                            ))
                        }
                    </div>

                    <div className="meeting__room">
                        <h2 className="meeting__block-title">Ваша переговорка</h2>

                        {this.state.selectedRoom ?
                            (
                                <SelectedRoom
                                    timeBegin={new Date()}
                                    timeEnd={new Date()}
                                    room={this.state.selectedRoom}
                                    key={this.state.selectedRoom.id}
                                    onRemove={ () => this.setState({ selectedRoom: null })}
                                />
                            ) :
                            (
                                rooms.map(room => (
                                    <Room
                                        timeBegin={new Date()}
                                        timeEnd={new Date()}
                                        room={room}
                                        key={room.id}
                                        onClick={() => this.setState({selectedRoom: room})}
                                    />
                                ))
                            )
                        }

                    </div>
                </div>
            </div>
        );
    }
}
