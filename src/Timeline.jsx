import React from 'react';

import './timeline.css';

export default class Timeline extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = { now: new Date(2018, 0, 31, 4, 15) };
    }

    render() {
        const rulers = [];
        for (let i = 0; i < 23; i++) {
            rulers.push(<div className="timeline__ruler" key={i}></div>);
        }

        const rows = this.props.floors.map((floor, index) => (
            <React.Fragment key={floor.number}>
                <div className={'timeline__spacer' + (index ? '' : ' timeline__spacer--first')} />
                {floor.rooms.map(room => (
                    <div className="timeline__row" key={room.id}>
                    </div>
                ))}
            </React.Fragment>
        ));

        const hours = this.state.now.getHours() + this.state.now.getMinutes() / 60;

        return (
            <div className="timeline">
                <div className="timeline__body">
                    <div className="timeline__ruler-now" style={{ left: hours * 66 + 'px' }}></div>
                    <div className="timeline__rulers">
                        {rulers}
                    </div>
                    <div className="timeline__rows">
                        {rows}
                    </div>
                </div>
            </div>
        )
    }
}
