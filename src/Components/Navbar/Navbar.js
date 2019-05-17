import React from "react";
import './Navbar.css'

const Navbar = () => {


    return (
        <div className="Navbar">
            <div className="links">
                <div className="link" >
                    <span aria-hidden="true" className="fa fa-wrench Icon IconColor IconBackgroundSe"></span>
                    <span className="Text TextBG1">SETTINGS</span>
                </div>
                <div className="link">
                    <span aria-hidden="true" className="fa fa-code Icon IconColor IconBackgroundGi"></span>
                    <span className="Text TextBG2">GISTS</span>
                </div>
                <div className="link">
                    <span aria-hidden="true" className="fa fa-stack-overflow Icon IconColor IconBackgroundSTOV"></span>
                    <span className="Text TextBG3">STACK OVERFLOW</span>
                </div>
                <div className="link">
                    <span aria-hidden="true" className="fa fa-line-chart Icon IconColor IconBackgroundTr"></span>
                    <span className="Text TextBG4">TRENDING</span>
                </div>
                <div className="link">
                    <span aria-hidden="true" className="fa fa-pencil Icon IconColor IconBackgroundSc"></span>
                    <span className="Text TextBG5">SCRATCH PAD</span>
                </div>
                <div className="link">
                    <span aria-hidden="true" className="fa fa-lightbulb-o Icon IconColor IconBackgroundPl"></span>
                    <span className="Text TextBG6">PLAYGROUND</span>
                    <span aria-hidden="true" className="fa fa-lock ColorLock"></span>
                </div>
                <div className="link">
                    <span aria-hidden="true" className="fa fa-question Icon IconColor IconBackgroundHe"></span>
                    <span className="Text TextBG7">HELP/INTRO</span>
                </div>
            </div>
        </div>

    );
};

export default Navbar;