import React from 'react';
import './room.css';

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
);

export { Room, SelectedRoom };
