import React from 'react';
import logo from './logo.png';


class Welcome extends React.Component {
    render(){
        return (
            <header>
                <div className='container style'>
                    <div className='row'>
                        <div className='col-xl-6'>
                            <a href='#'><img src={logo} alt='logo'/></a>
                        </div>
                        <div className='col-xl-6'>
                            <ul className='nav'>
                                <li className='nav-item'><a href='#' className='nav-link'>home</a></li>
                                <li className='nav-item'><a href='#' className='nav-link'>about</a></li>
                                <li className='nav-item'><a href='#' className='nav-link'>work</a></li>
                                <li className='nav-item'><a href='#' className='nav-link'>blog</a></li>
                                <li className='nav-item'><a href='#' className='nav-link'>contact</a></li>
                            </ul>   
                        </div>
                    </div>
                    <div className='header'>
                        <h2>Hi there! We are the new kids on the block <br/>
                            and we build awesome websites and mobile apps.</h2>
                        <button className='btn text-light'>work with us!</button>
                    </div>
                </div>
            </header>
        )
    }
}

export default Welcome;