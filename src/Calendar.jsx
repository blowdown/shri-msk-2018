import React from 'react';
import Header from './Header';
import Button from './Button';
import Sidebar from './Sidebar';
import Timeline from './Timeline';

import './calendar.css';

function groupRoomsByFloor(rooms) {
    const floors = new Map();
    for (const room of rooms) {
        let floor = floors.get(room.floor);
        if (!floor) {
            floor = { number: room.floor, rooms: [] };
            floors.set(room.floor, floor);
        }

        floor.rooms.push(room);
    }

    return Array.from(floors.values()).sort((a, b) => a.number - b.number);
}

export default class Calendar extends React.Component {
    render() {
        const floors = groupRoomsByFloor(this.props.rooms);

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
                    <div className="calendar__header-date">
                        {/* TODO: DateSelect */}
                        <div style={{ width: '245px', height: '46px', background: 'lightskyblue' }} />
                    </div>
                    <div className="calendar__timebar" ref={x => this._timebar = x}>
                        {/* TODO: Timebar */}
                        <div
                            style={{
                                width: '3000px',
                                height: '46px',
                                background: 'linear-gradient(to right, #ccc 0%, #333 100%)'
                            }}
                        >
                            &nbsp;
                        </div>
                    </div>
                </div>
                <div className="calendar__meat">
                    <div className="calendar__sidebar" ref={x => this._sidebar = x}>
                        <Sidebar floors={floors} />
                    </div>
                    <div className="calendar__timeline">
                        <Timeline
                            floors={floors}
                            onScroll={(x, y) => {
                                this._timebar.scrollLeft = x;
                                this._sidebar.scrollTop = y;
                            }} />
                    </div>
                </div>
            </div>
        );
    }
}
