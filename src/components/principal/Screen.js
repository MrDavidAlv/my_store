import React, { Fragment } from 'react'
import Aside from './../aside/Aside'; 
import Navbar from './../navbar/Navbar'; 


const Screen = props => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <Aside />
                <span style={{ width: '90%', float: 'right'}}>
                    <br /><br /> 
                        {props.children} 
                </span>

            </div>
        </div>
    )
}

export default Screen