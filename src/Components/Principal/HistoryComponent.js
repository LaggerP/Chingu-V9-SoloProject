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
                <div className="items">
                    {JavaScriptJSON.map((historyPost) => {
                        return (
                            <div className="item">
                                <a href="" className="linkHistory">
                                    <div>
                                        <span className="imgHistory" ><img src={historyPost.imgLink}/></span>
                                        <span className="TitleHistory">{historyPost.title}</span>
                                        <span className="TimeAgo">{historyPost.timeAgo}</span>
                                    </div>
                                </a>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </div >

    );
};

export default History;