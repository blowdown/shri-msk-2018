import React from 'react';

import './sidebar.css';

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


export default class Sidebar extends React.Component {
    render() {
        const floors = groupRoomsByFloor(this.props.rooms);
        const floorElements = floors.map(floor => (
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
