import React, { Component } from 'react';
import CountdownTimer from './countdownTimerFunctionality';

function Navbar(props) {  
    return ( 
        <nav>
            <div className='timer'>
                <strong>
                    <CountdownTimer handleSubmit={props.onSubmit} />
                </strong>
            </div>
        </nav>
     );
}

export default Navbar;