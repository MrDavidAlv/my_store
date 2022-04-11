import React from 'react'
import './Home.css'


const Home = () => { 
    let now= new Date(); 
 
    let h = now.getHours()
    let m = now.getMinutes()
    let hours =  `${h}:${m}` 
 
    let yy = now.getFullYear()
    let mm = now.getMonth()
    let dd = now.getDate() 
    let date = `${dd}-${mm}-${yy}`


 
    return (
    <div >
      
        <h1 style={{color:'white'}}>Bienvenido a nuestro portal de servicios online</h1>
        <br/><br/>
        <div id="wrapper">
          <div id="iphone">
            <div id="shadow" />
            <div id="side" />
            <div id="lines">
              <div>
                <div>
                  <div />
                </div>
              </div>
              <div>
                <div>
                  <div />
                </div>
              </div>
            </div>
            <div id="toggler">
              <div />
            </div>
            <div id="aux" />
            <div id="lightning" />
            <div id="bottom-speaker">
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
            </div>
            <div id="skrews">
              <div />
              <div />
            </div>
            <div id="volume">
              <div />
              <div />
            </div>
            <div id="front">
              <div id="front-cover" />
              <div id="camera">
                <div />
              </div>
              <div id="speaker" />
              <div id="screen">
                <div id="reminder">
                  <div />
                  <div>Msg @MrDavidAlv</div>
                  <div>now</div>
                </div>
                <div id="circle" />
                <div id="time">{hours}</div>
                <div id="date">Date: {date}</div>
                <div id="bottom" />
                <div id="top" />
                <div id="slide">
                  <div />
                   Bogota DC
                </div>
                <div id="signal">
                  <div />
                  <div />
                  <div />
                  <div />
                  <div />
                </div>
                <div id="battery">
                  <div>86%</div>
                  <div>
                    <div />
                    <div />
                  </div>
                </div>
              </div>
              <div id="home">
                <div />
              </div>
            </div>
          </div>
        </div>
        <a href="fabrizio.co" id="fabrizio" />
        {/*<div id="awwwards">Vote for it and win 2 tickets! <a target="_blank" href="http://conference.awwwards.com/code/fabrizio-bianchi">AWWWARDS® Conference 2015</a></div>
<a href="https://codepen.io/fbrz/details/aynlk" id="coolors" target="_blank">COOLORS is out!</a>*/}
      </div> 
    )
}

export default Home