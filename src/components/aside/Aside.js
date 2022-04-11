import React from 'react'
import { Link } from 'react-router-dom';
import './Aside.css'

const Aside = () => {
    return (
        <nav className="main-menu">
            <div className="settings" />
            <div className="scrollbar" id="style-1">
                <ul>
                    <li>
                        <Link to="/login">
                            <i className="fa fa-user fa-lg" />
                            <span className="nav-text">Login</span>
                        </Link>
                    </li>
                    {/* <li>
                        <Link to="#">
                            <i className="fa fa-home fa-lg" />
                            <span className="nav-text">Home</span>
                        </Link>
                    </li>
                   
                    <li>
                        <Link to="#">
                            <i className="fa fa-envelope-o fa-lg" />
                            <span className="nav-text">Contact</span>
                        </Link>
                    </li>  */}
                    <li>
                        <Link to="#">
                            <i className="fa fa-heart-o fa-lg" />
                            <span className="share">
                            </span>
                        </Link>
                        <div className="addthis_default_style addthis_32x32_style">
                            <div style={{ position: 'absolute', marginLeft: '31px', top: '3px' }}>
                                <Link to="https://github.com/MrDavidAlv" className="share-popup">
                                    <i className="fa fa-github" aria-hidden="true"></i>
                                    <span className="twitter" />
                                </Link>
                                <Link to="https://www.linkedin.com/in/mrdavidalv/" className="share-popup">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                    <span className="google" />
                                </Link>
                                <Link to="https://web.facebook.com/mrdavidalv" className="share-popup">
                                    <i className="fa fa-facebook-square" aria-hidden="true"></i>
                                    <span className="fb-like" />
                                </Link>
                                <Link to="https://www.instagram.com/MrDavidAlv/" className="share-popup">
                                    <i className="fa fa-instagram" aria-hidden="true"></i>
                                    <span className="fb-like" />
                                </Link>
                            </div>

                        </div>
                    </li>
                    <li className="darkerlishadow">
                        <Link to="/news">
                            <i className="fa fa-clock-o fa-lg" />
                            <span className="nav-text">News</span>
                        </Link>
                    </li>
                    <li className="darkerli">
                        <Link to="/tecnology">
                            <i className="fa fa-desktop fa-lg" />
                            <span className="nav-text">Technology</span>
                        </Link>
                    </li>
                    <li className="darkerli">
                        <Link to="/travel">
                            <i className="fa fa-plane fa-lg" />
                            <span className="nav-text">Travel</span>
                        </Link>
                    </li>

                    <li className="darkerli">
                        <Link to="/music">
                            <i className="fa fa-play" aria-hidden="true"></i>
                            <span className="nav-text">Film &amp; Music</span>
                        </Link>
                    </li>
                    <li className="darkerli">
                        <Link to="/tools">
                            <i className="fa fa-flask fa-lg" />
                            <span className="nav-text">Web Tools</span>
                        </Link>
                    </li>
                    <li className="darkerli">
                        <Link to="#">
                            <i className="fa fa-picture-o fa-lg" />
                            <span className="nav-text">Art &amp; Design</span>
                        </Link>
                    </li>
                    <li className="darkerli">
                        <Link to="/magazine">
                            <i className="fa fa-align-left fa-lg" />
                            <span className="nav-text">Magazines
                            </span>
                        </Link>
                    </li>
                    <li className="darkerli">
                        <Link to="/games">
                            <i className="fa fa-gamepad fa-lg" />
                            <span className="nav-text">Games</span>
                        </Link>
                    </li>
                    <li className="darkerlishadowdown">
                        <Link to="/team">
                            <i className="fa fa-users" />
                            <span className="nav-text">Team</span>
                        </Link>
                    </li>
                    <li className="darkerli">
                        <Link to="#">
                            <i className="fa fa-shopping-cart" />
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    3+
                                </span>
                            <span className="nav-text">
                                Shopping
                            </span>
                        </Link>
                    </li>
                </ul>
                <li>
                    <Link to="#">
                        <i className="fa fa-question-circle fa-lg" />
                        <span className="nav-text">Help</span>
                    </Link>
                </li>
                <ul className="logout">
                    <li>
                        <Link to="#">
                            <i className="fa fa-lightbulb-o fa-lg" />
                            <span className="nav-text">
                                BLOG
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Aside