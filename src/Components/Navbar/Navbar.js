import React from "react";
import './Navbar.css';
import initabLogo from '../../Media/Img/initablogo.png';

const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="links">
                <div className="link" >
                    <a href="">
                        <span aria-hidden="true" className="fa fa-wrench Icon IconColor IconBackgroundSe"></span>
                        <span className="Text TextBG1">SETTINGS</span>
                    </a>
                </div>
                <div className="link">
                    <a href="">
                        <span aria-hidden="true" className="fa fa-code Icon IconColor IconBackgroundGi"></span>
                        <span className="Text TextBG2">GISTS</span>
                    </a>
                </div>
                <div className="link">
                    <a href="">
                        <span aria-hidden="true" className="fa fa-stack-overflow Icon IconColor IconBackgroundSTOV"></span>
                        <span className="Text TextBG3">STACK OVERFLOW</span>
                    </a>
                </div>
                <div className="link">
                    <a href="">
                        <span aria-hidden="true" className="fa fa-line-chart Icon IconColor IconBackgroundTr"></span>
                        <span className="Text TextBG4">TRENDING</span>
                    </a>
                </div>
                <div className="link">
                    <a href="">
                        <span aria-hidden="true" className="fa fa-pencil Icon IconColor IconBackgroundSc"></span>
                        <span className="Text TextBG5">SCRATCH PAD</span>
                    </a>
                </div>
                <div className="link">
                    <a href="">
                        <span aria-hidden="true" className="fa fa-lightbulb-o Icon IconColor IconBackgroundPl"></span>
                        <span className="Text TextBG6">PLAYGROUND</span>
                        <span aria-hidden="true" className="fa fa-lock ColorLock"></span>
                    </a>
                </div>
                <div className="link">
                    <a href="">
                        <span aria-hidden="true" className="fa fa-question Icon IconColor IconBackgroundHe"></span>
                        <span className="Text TextBG7">HELP/INTRO</span>
                    </a>
                </div>
            </div>
            <div className="NavbarInitabIcon">
                <a href="https://initab.com"><img src={initabLogo} className="logoClass" alt="" /></a>
                <ul className="socialUl">
                    <a href=""><li className="fa fa-facebook socialLi facebookBG"></li></a>
                    <a href=""><li className="fa fa-linkedin socialLi linkedinBG"></li></a>
                    <a href=""><li className="fa fa-twitter socialLi twitterBG"></li></a>
                    <a href=""><li className="fa fa-reddit-alien socialLi redditBG"></li></a>
                </ul>
            </div>

        </div>

    );
};

export default Navbar;