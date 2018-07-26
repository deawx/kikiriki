import React from "react";
import "./AlarmClock.css";

class AlarmClock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hours: 0,
            minutes: 0
        };
    }

    render() {
        return (
            <div className="alarm-clock">
                <div className="alarm-clock__screen">
                    <span className="alarm-clock__screen-hours">
                        {this.twoDigits(this.state.hours)}
                    </span>
                    <span className="alarm-clock__screen-minutes">
                        {this.twoDigits(this.state.minutes)}
                    </span>
                </div>
                <div className="alarm-clock__controls">
                    <div className="alarm-clock__controls--hour">
                        <span
                            onClick={() => this.increaseHours()}
                            className="alarm-clock__controls--hour-up"
                        >
                            +
                        </span>
                        <span
                            onClick={() => this.decreaseHours()}
                            className="alarm-clock__controls--hour-down"
                        >
                            -
                        </span>
                    </div>
                    <div className="alarm-clock__controls--minutes">
                        <span
                            onClick={() => this.increaseMinutes()}
                            className="alarm-clock__controls--minutes-up"
                        >
                            +
                        </span>
                        <span
                            onClick={() => this.decreaseMinutes()}
                            className="alarm-clock__controls--minutes-down"
                        >
                            -
                        </span>
                    </div>
                </div>
            </div>
        );
    }

    increaseHours = () => {
        let { hours } = this.state;
        hours = hours < 23 ? Number(hours + 1) : 0;
        this.setState({ hours });
    };
    decreaseHours = () => {
        let { hours } = this.state;
        hours = hours > 1 ? Number(hours - 1) : 23;
        this.setState({ hours });
    };
    increaseMinutes = () => {
        let { minutes } = this.state;
        minutes = minutes < 59 ? Number(minutes + 1) : 0;
        this.setState({ minutes });
    };
    decreaseMinutes = () => {
        let { minutes } = this.state;
        minutes = minutes > 0 ? Number(minutes - 1) : 59;
        this.setState({ minutes });
    };

    twoDigits = number => {
        return number < 10 ? "0" + number : number;
    };
}

export default AlarmClock;
