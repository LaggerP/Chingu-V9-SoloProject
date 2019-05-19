import React from "react";
import './History.css'
import JavaScriptJSON from '../../Data/dataJS-history.json'

const History = () => {


    return (
        <div className="history">
            <div className="history_items">
                <div className="historyIcon">
                    <span aria-hidden="true" className="fa fa-clock-o"></span>
                    <span class="IconText"> RELEVANT JAVASCRIPT HISTORY</span>
                </div>
                <div className="item">
                    <div className="NewHistory">

                        {JavaScriptJSON.map((historyPost, index) => {
                            return (
                                <a href="" className="linkHistory">
                                    <li className="liHistory">
                                        <img src={historyPost.imgLink} className="imgHistory" />
                                        <span className="TitleHistory">{historyPost.title}</span>
                                        <span className="TimeAgo">{historyPost.timeAgo}</span>
                                    </li>
                                </a>
                            )
                        })
                        }
                    </div>
                </div>
            </div>
        </div>

    );
};

export default History;