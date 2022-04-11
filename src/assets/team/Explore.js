import React from 'react'
import { Link } from 'react-router-dom';
import './Explore.css'

const Explore = () => {
    return (
        <div className="container">
            <div className="cardf">
                <img src="https://pbs.twimg.com/profile_images/1079955330426130432/4Cydj2NA_400x400.jpg" alt="Person" className="card__image" />
                <p className="card__name">Lily-Grace Colley</p>
                <div className="grid-container">
                    <div className="grid-child-posts">
                        156 Post
                    </div>
                    <div className="grid-child-followers">
                        1012 Likes
                    </div>
                </div>
                <ul className="social-icons">
                    <li><Link to="#"><i className="fa fa-instagram" /></Link></li>
                    <li><Link to="#"><i className="fa fa-twitter" /></Link></li>
                    <li><Link to="#"><i className="fa fa-linkedin" /></Link></li>
                    <li><Link to="#"><i className="fa fa-whatsapp" /></Link></li>
                </ul>
                <button className="btn draw-border">Follow</button>
                <button className="btn draw-border">Message</button>
            </div>
            <div className="cardf">
                <img src="https://i.pinimg.com/originals/13/bf/5b/13bf5b89c7a3bf35f99813e155d453c3.jpg" alt="Person" className="card__image" />
                <p className="card__name">Bianca Reeve</p>
                <div className="grid-container">
                    <div className="grid-child-posts">
                        305 Post
                    </div>
                    <div className="grid-child-followers">
                        2643 Likes
                    </div>
                </div>
                <ul className="social-icons">
                    <li><Link to="#"><i className="fa fa-instagram" /></Link></li>
                    <li><Link to="#"><i className="fa fa-twitter" /></Link></li>
                    <li><Link to="#"><i className="fa fa-linkedin" /></Link></li>
                    <li><Link to="#"><i className="fa fa-whatsapp" /></Link></li>
                </ul>
                <button className="btn draw-border">Follow</button>
                <button className="btn draw-border">Message</button>
            </div>
            <div className="cardf">
                <img src="https://i.pinimg.com/originals/c0/ed/81/c0ed81bb587ba55a062bb42cea6b19da.jpg" alt="Person" className="card__image" />
                <p className="card__name">Tiago Serrano</p>
                <div className="grid-container">
                    <div className="grid-child-posts">
                        902 Post
                    </div>
                    <div className="grid-child-followers">
                        1300 Likes
                    </div>
                </div>
                <ul className="social-icons">
                    <li><Link to="#"><i className="fa fa-instagram" /></Link></li>
                    <li><Link to="#"><i className="fa fa-twitter" /></Link></li>
                    <li><Link to="#"><i className="fa fa-linkedin" /></Link></li>
                    <li><Link to="#"><i className="fa fa-whatsapp" /></Link></li>
                </ul>
                <button className="btn draw-border">Follow</button>
                <button className="btn draw-border">Message</button>
            </div>
        </div>
    )
}

export default Explore