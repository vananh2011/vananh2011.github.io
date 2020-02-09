import React from 'react';
import lap1 from './images/lap_01.png';
import lap2 from './images/lap_02.png';
import lap3 from './images/lap_03.png';
import lap4 from './images/lap_04.png';

class Portfolio extends React.Component{
    render(){
        return(
            <div className='portfolio'>
                <div className='container'>
                    <h3>our portfolio</h3>
                    <div className='line4'></div>
                    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet <br/>
                    consectetur, adipisci velit, sed quia non numquam</p>
                    <ul className='nav'>
                        <li className='nav-item active'><a href='#' className='nav-link'>all</a></li>
                        <li className='nav-item'><a href='#' className='nav-link'>web</a></li>
                        <li className='nav-item'><a href='#' className='nav-link'>apps</a></li>
                        <li className='nav-item'><a href='#' className='nav-link'>icons</a></li>
                    </ul>
                    <div className='row'>
                        <div className='col-xl-6'>
                            <img src={lap1} alt='laptop'/>
                            <p>isometric perspective mock-up</p>
                        </div>
                        <div className='col-xl-6'>
                            <img src={lap2} alt='laptop'/>
                            <p>time zone up ui</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-xl-6'>
                            <img src={lap3} alt='laptop'/>
                            <p>viro media players ui</p>
                        </div>
                        <div className='col-xl-6'>
                            <img src={lap4} alt='laptop'/>
                            <p>blog / magazine flat ui kit</p>
                        </div>
                    </div>
                    <button className='btn text-light'>load more projects</button>
                </div>
            </div>
        )
    }
}

export default Portfolio