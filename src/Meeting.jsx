import React from 'react';

import Textbox from './Textbox';

import './meeting.css';
import './meeting__header.css';


import './dropdown.css';
import './members-dropdown.css';
import './member.css';
import './room.css';

const Meeting = props => (
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

                <div className="textbox textbox--with-icon">
                    <input type="text" className="textbox__input" />
                    <div className="textbox__icon" data-type="calendar"></div>
                </div>
            </div>

            <div className="meeting__start">
                <h2 className="meeting__block-title">Начало</h2>
                <div className="textbox" id="start">
                    <input type="text" className="textbox__input" placeholder="16:00" />
                </div>
            </div>

            <div className="meeting__dash"></div>

            <div className="meeting__end">
                <h2 className="meeting__block-title">Конец</h2>
                <div className="textbox" id="end">
                    <input type="text" className="textbox__input" placeholder="17:00" />
                </div>
            </div>
        </div>

        <div className="meeting__second-row">
            <div className="meeting__members">
                <h2 className="meeting__block-title">Участники</h2>

                <div className="meeting__members-dropdown">
                    <div className="members-dropdown">

                        <div className="dropdown" id="dropdown">
                            <div className="textbox">
                                <input type="text" className="textbox__input" placeholder="Например, Тор Одинович" />
                            </div>

                            <div className="dropdown__panel">
                                <div className="dropdown__element">
                                    <div className="members-dropdown__element">
                                        <div className="members-dropdown__avatar" style={{ backgroundImage: 'url(https://randomuser.me/api/portraits/women/56.jpg)' }}></div>
                                        <div className="members-dropdown__name">Лекс Лютер</div>
                                        <div className="members-dropdown__floor">· 7 этаж</div>
                                    </div>
                                </div>
                                <div className="dropdown__element dropdown__element--selected">
                                    <div className="members-dropdown__element members-dropdown__element--selected">
                                        <div className="members-dropdown__avatar" style={{ backgroundImage: 'url(https://randomuser.me/api/portraits/women/56.jpg)' }}></div>
                                        <div className="members-dropdown__name">Лекс Лютер</div>
                                        <div className="members-dropdown__floor">· 7 этаж</div>
                                    </div>
                                </div>
                                <div className="dropdown__element">
                                </div>
                                <div className="dropdown__element">
                                </div>
                                <div className="dropdown__element">
                                </div>
                                <div className="dropdown__element">
                                </div>
                                <div className="dropdown__element">
                                </div>
                            </div>
                        </div>

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
)

export default Meeting;
