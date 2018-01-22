import React from 'react';

import Textbox from './Textbox';
import Dropdown from './Dropdown';
import MembersDropdown from './MembersDropdown';
import Header from './Header';
import Footer from './Footer';
import Button from './Button';
import { Room, SelectedRoom } from './Room';
import * as arrayUtils from './arrayUtils';

import './app.css';
import './meeting.css';
import './meeting__header.css';

import './member.css';

export default class Meeting extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            selectedMembers: [],
            selectedRoom: null,
            title: '',
            date: '',
            timeBegin: '',
            timeEnd: ''
        };

        this._cancelMeeting = this._cancelMeeting.bind(this);
        this._createMeeting = this._createMeeting.bind(this);
    }

    _cancelMeeting() {
        this.props.onCancel();
    }

    _createMeeting() {
        this.props.onCreate(this.state);
    }

    render() {
        return (
            <div className="app">
                <Header />

                <div className="app__content-scroll">
                    <div className="app__content">
                        <div className="meeting">
                            <div className="meeting__header">
                                <h1 className="meeting__header-text">Новая встреча</h1>
                                <button className="meeting__header-close"
                                    onClick={this._cancelMeeting}
                                />
                            </div>

                            <div className="meeting__first-row">
                                <div className="meeting__title">
                                    <h2 className="meeting__block-title">Тема</h2>
                                    <Textbox
                                        placeholder="О чем будем говорить?"
                                        onChange={(title) => this.setState({ title: title })}
                                        value={this.state.title}
                                    />
                                </div>

                                <div className="meeting__date">
                                    <h2 className="meeting__block-title">Дата</h2>
                                    <Textbox placeholder="13 января 2018" icon="calendar"
                                        onChange={(date) => this.setState({ date: date })}
                                        value={this.state.date}
                                    />
                                </div>

                                <div className="meeting__start">
                                    <h2 className="meeting__block-title">Начало</h2>
                                    <Textbox placeholder="16:00" showClear={false}
                                        onChange={(timeBegin) => this.setState({ timeBegin: timeBegin })}
                                        value={this.state.timeBegin}
                                    />
                                </div>

                                <div className="meeting__dash"></div>

                                <div className="meeting__end">
                                    <h2 className="meeting__block-title">Конец</h2>
                                    <Textbox placeholder="17:00" showClear={false}
                                        onChange={(timeEnd) => this.setState({ timeEnd: timeEnd })}
                                        value={this.state.timeEnd} />
                                </div>
                            </div>

                            <div className="meeting__second-row">
                                <div className="meeting__members">
                                    <h2 className="meeting__block-title">Участники</h2>

                                    <div className="meeting__members-dropdown">
                                        <MembersDropdown
                                            selected={this.state.selectedMembers}
                                            members={this.props.members.filter(member => this.state.selectedMembers.indexOf(member) === -1)}
                                            onSelect={member => {
                                                this.setState({ selectedMembers: arrayUtils.toggle(this.state.selectedMembers, member) });
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
                                                        this.setState({ selectedMembers: arrayUtils.remove(this.state.selectedMembers, member) });
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
                                                onRemove={() => this.setState({ selectedRoom: null })}
                                            />
                                        ) :
                                        (
                                            this.props.rooms.map(room => (
                                                <Room
                                                    timeBegin={new Date()}
                                                    timeEnd={new Date()}
                                                    room={room}
                                                    key={room.id}
                                                    onClick={() => this.setState({ selectedRoom: room })}
                                                />
                                            ))
                                        )
                                    }
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <Footer>
                    <Button onClick={this._cancelMeeting}>Отмена</Button>
                    <Button primary={true} onClick={this._createMeeting}>Создать встречу</Button>
                </Footer>
            </div>
        );
    }
}
