import React from "react";
import "./AlarmClock.css";

class AlarmClock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="alarm-clock">
                <div className="alarm-clock__screen">
                    <span className="alarm-clock__screen-hours">11</span>
                    <span className="alarm-clock__screen-minutes">11</span>
                    <span className="alarm-clock__screen-seconds">11</span>
                </div>
                <div className="alarm-clock__controls">
                    <div className="alarm-clock__controls--hour">
                        <span className="alarm-clock__controls--hour-up">
                            up
                        </span>
                        <span className="alarm-clock__controls--hour-down">
                            down
                        </span>
                    </div>
                    <div className="alarm-clock__controls--minutes">
                        <span className="alarm-clock__controls--minutes-up">
                            up
                        </span>
                        <span className="alarm-clock__controls--minutes-down">
                            down
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default AlarmClock;
