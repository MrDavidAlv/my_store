import React from 'react'
import './Player.css'


const Player = () => {
    return (
        <div>
            <div id="overlay" />
            <div className="container">
                <div className="player" id="player">
                    <div id="music-info">
                        <div className="title" />
                        <div className="author" />
                        <div className="album" />
                        <div className="bg" />
                    </div>
                    <div className="timestamp">
                        <div id="bar" />
                        <div id="current-time">
                        </div>
                    </div>
                    <div className="buttons">
                        <div className="button button-small"><p><i className="fas fa-random"/></p></div>
                        <div className="button button-medium"><i className="fas fa-step-backward" /></div>
                        <div className="button button-large" id="play"><i className="fas fa-play" /></div>
                        <div className="button button-medium"><i className="fas fa-step-forward" /></div>
                        <div className="button button-small" id="mute"><i className="fas fa-volume-up" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Player