import React from 'react';
import Header from './Header';
import Button from './Button';
import Sidebar from './Sidebar';

import './calendar.css';

export default class Calendar extends React.Component {
    render() {
        return (
            <div className="calendar">
                <div className="calendar__page-header">
                    <Header>
                        <Button primary>
                            Создать встречу
                        </Button>
                    </Header>
                </div>
                <div className="calendar__header">
                    <div className="calendar__header-date"></div>
                    <div className="calendar__timebar"></div>
                </div>
                <div className="calendar__meat">
                    <div className="calendar__sidebar">
                        <Sidebar rooms={this.props.rooms} />
                    </div>
                    <div className="calendar__timeline"></div>
                </div>
            </div>
        );
    }
}
