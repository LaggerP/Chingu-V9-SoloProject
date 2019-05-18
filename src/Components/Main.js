import React from "react";
import Navbar from './Navbar/Navbar';
import Reddit from './Principal/RedditComponent';
import GitHub from './Principal/GithubComponent';
import History from './Principal/HistoryComponent';
import Clock from './Principal/Clock'
import './Main.css';

const Main = () => {
    return (
        <div className="Main">
            <div className="Main-Navbar-Item">
                <Navbar />
            </div>
            <div className="Main-Reddit-Item">
                <Reddit />
            </div>
            <div className="MainMiddleItems">
                <div className="Main-HistoryJS-Item">
                    <History />
                </div>
                <div className="Main-Clock-Item">
                    <Clock />
                </div>
            </div>
            <div className="Main-GitHub-Item">
                <GitHub />
            </div>
        </div>


    );
};

export default Main;