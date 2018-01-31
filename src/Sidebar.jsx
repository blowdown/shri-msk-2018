import React from 'react';

import './sidebar.css';


export default class Sidebar extends React.Component {
    render() {
        const floorElements = this.props.floors.map(floor => (
            <React.Fragment key={floor.number}>
                <div className="sidebar__floor">{floor.number} этаж</div>
                {floor.rooms.map(room => (
                    <div className="sidebar__room" key={room.id}>
                        <div className="sidebar__room-name">
                            {room.title}
                        </div>
                        <div className="sidebar__room-capacity">
                            до {room.capacity} человек
                        </div>
                    </div>
                ))}
            </React.Fragment>
        ));

        return (
            <div className="sidebar">
                {floorElements}
            </div>
        );
    }
}
