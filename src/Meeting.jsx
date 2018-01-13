import React from 'react';

import Textbox from './Textbox';

import Dropdown from './Dropdown';

import './meeting.css';
import './meeting__header.css';


import './dropdown.css';
import './members-dropdown.css';
import './member.css';
import './room.css';

const MemberOption = ({ selected, option: { key, name, floor } }) => (
    <div className={`members-dropdown__element ${selected ? 'members-dropdown__element--selected' : ''}`}>
        <div className="members-dropdown__avatar" style={{ backgroundImage: `url(https://randomuser.me/api/portraits/men/${key}.jpg)` }}></div>
        <div className="members-dropdown__name">{name}</div>
        <div className="members-dropdown__floor">· {floor} этаж</div>
    </div>
);

const options = [
    { key: 1, name: 'Лекс Лютер', floor: 11 },
    { key: 2, name: 'Дарт Вейдер', floor: 7 }
];

export default class Meeting extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = { selected: [] };
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

                            <div className="members-dropdown">
                                <Dropdown
                                    placeholder='Например, Тор Одинович'
                                    selected={this.state.selected}
                                    optionComponent={MemberOption}
                                    options={options}
                                    onSelect={option => {
                                        const selected = this.state.selected.slice();
                                        const ix = selected.indexOf(option);
                                        if (ix === -1) {
                                            selected.push(option);
                                        } else {
                                            selected.splice(ix, 1);
                                        }

                                        this.setState({
                                            selected: selected
                                        });
                                    }}
                                />
                            </div>

                        </div>

                        <div className="member">
                            <div className="member__avatar" style={{ backgroundImage: 'url(https://randomuser.me/api/portraits/women/56.jpg)' }}></div>
                            <div className="member__name">Томас Андерсон</div>
                            <button className="member__remove"></button>
                        </div>
                        <div className="member">
                            <div className="member__avatar" style={{ backgroundImage: 'url(https://randomuser.me/api/portraits/men/42.jpg)' }}></div>
                            <div className="member__name">Лекс Лютер</div>
                            <button className="member__remove"></button>
                        </div>
                        <div className="member">
                            <div className="member__avatar" style={{ backgroundImage: 'url(https://randomuser.me/api/portraits/men/17.jpg)' }}></div>
                            <div className="member__name">Дарт Вейдер</div>
                            <button className="member__remove"></button>
                        </div>
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
