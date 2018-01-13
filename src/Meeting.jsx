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
    { key: 1, name: 'Лекс Лютер', floor: 11 },
    { key: 2, name: 'Дарт Вейдер', floor: 7 },
    { key: 3, name: 'Томас Андерсон', floor: 3 }
];

export default class Meeting extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = { selectedMembers: [] };
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
                                <div className="member" key={member.key}>
                                    <div className="member__avatar" style={{ backgroundImage: `url(https://randomuser.me/api/portraits/men/${member.key}.jpg)` }}></div>
                                    <div className="member__name">{member.name}</div>
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

                        <div className="room room--selected">
                            <div className="room__time">16:00—16:30</div>
                            <div className="room__name">Готем · 4 этаж</div>
                            <button className="room__cancel"></button>
                        </div>
                        <div className="room">
                            <div className="room__time">16:00—16:30</div>
                            <div className="room__name">Поле непаханное · 4 этаж</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
