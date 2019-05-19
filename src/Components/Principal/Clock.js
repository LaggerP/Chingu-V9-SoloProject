import React, { Component } from "react";
import './Clock.css'

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _date: 0,
            _month: [],
            _year: 0,
            _hour: 0,
            _minute: 0,
            _timePeriod: [],
            elementShow: true
        }
    }

    hiddeMessage() {
        this.setState({
            elementShow: false
        })
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            const allMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

            var date = new Date().getDate();
            var month = new Date().getMonth();
            month = allMonth[month];
            var year = new Date().getFullYear();
            var hour = new Date().getHours();
            var timePeriod = (hour >= 12) ? "PM" : "AM";
            var minute = new Date().getMinutes();

            this.setState(() => {
                return {
                    _date: date,
                    _month: month,
                    _year: year,
                    _hour: hour,
                    _minute: minute,
                    _timePeriod: timePeriod,
                }
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div className="clock">
                <div className="clockInfo">
                    <h1>{this.state._hour}:{this.state._minute} <span>{this.state._timePeriod}</span></h1>
                    <h4>{this.state._month} {this.state._date}, {this.state._year}</h4>
                    {
                        this.state.elementShow ?
                            <div className="clockMessage">
                                <span><i className="fa fa-question-circle circleIcon" aria-hidden="true"></i> Did you know you can add CUSTOM LINKS to display in this section?</span><br />
                                <span>Open the SETTINGS panel and add the URLs of your favorites sites to the 'CUSTOM LINKS' textarea.</span><br />
                                <span className="infoCircle" onClick={() => this.hiddeMessage()}><i className="fa fa-times-circle xIcon" aria-hidden="true"></i>Got it! Don't show me this again.</span>
                            </div>
                            :null
                    }

                </div>

            </div>
        );
    }
}

export default Clock;

