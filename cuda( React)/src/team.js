import React from 'react';
import icon5 from './images/Cuda-Portfolio_05.png';
import fb from './images/icon_01.png';
import twitter from './images/icon_02.png';
import likein from './images/icon_03.png';
import gmail from './images/icon_04.png';

class Team extends React.Component{
    render(){
        return(
            <div className='team'>
                <div className='container'>
                <h3>meet out beautiful team</h3>
                    <div className='line2'></div>
                    <p>We are a small team of designers and developers, who help brands with big ideas.</p>
                    <div className='row'>
                        <div className='col-xl-3'>
                            <img src={icon5} alt='icon5'/>
                            <h4>anne hathaway</h4>
                            <h6> CEO / Marketing Guru </h6>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.</p>
                            <ul className='nav'>
                                <li className='nav-item'>
                                    <a href='#' className='nav-link'>
                                        <img src={fb} alt='@'/>
                                    </a>
                                </li>
                                <li className='nav-item'>
                                    <a href='#' className='nav-link'>
                                        <img src={twitter} alt='@'/>
                                    </a>
                                </li>
                                <li className='nav-item'>
                                    <a href='#' className='nav-link'>
                                        <img src={likein} alt='@'/>
                                    </a>
                                </li>
                                <li className='nav-item'>
                                    <a href='#' className='nav-link'>
                                        <img src={gmail} alt='@'/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className='col-xl-3'>
                            <img src={icon5} alt='icon5'/>
                            <h4>kate upton</h4>
                            <h6>Creative Director</h6>
                            <p>Duis aute irure dolor in in voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur sint occaecat non diam proident.</p>
                            <ul className='nav'>
                                <li className='nav-item'>
                                    <a href='#' className='nav-link'>
                                        <img src={twitter} alt='@'/>
                                    </a>
                                </li>
                                <li className='nav-item'>
                                    <a href='#' className='nav-link'>
                                        <img src={likein} alt='@'/>
                                    </a>
                                </li>
                                <li className='nav-item'>
                                    <a href='#' className='nav-link'>
                                        <img src={gmail} alt='@'/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className='col-xl-3'>
                            <img src={icon5} alt='icon5'/>
                            <h4>olivia wilde</h4>
                            <h6>Lead Designer</h6>
                            <p>Nemo enim ipsam voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem nesciunt.</p>
                            <ul className='nav'>
                                <li className='nav-item'>
                                    <a href='#' className='nav-link'>
                                        <img src={fb} alt='@'/>
                                    </a>
                                </li>
                                <li className='nav-item'>
                                    <a href='#' className='nav-link'>
                                        <img src={twitter} alt='@'/>
                                    </a>
                                </li>
                                <li className='nav-item'>
                                    <a href='#' className='nav-link'>
                                        <img src={likein} alt='@'/>
                                    </a>
                                </li>
                                <li className='nav-item'>
                                    <a href='#' className='nav-link'>
                                        <img src={gmail} alt='@'/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className='col-xl-3'>
                            <img src={icon5} alt='icon5'/>
                            <h4>ashley greene</h4>
                            <h6>SEO / Developer</h6>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                            <ul className='nav'>
                                <li className='nav-item'>
                                    <a href='#' className='nav-link'>
                                        <img src={fb} alt='@'/>
                                    </a>
                                </li>
                                <li className='nav-item'>
                                    <a href='#' className='nav-link'>
                                        <img src={twitter} alt='@'/>
                                    </a>
                                </li>
                                <li className='nav-item'>
                                    <a href='#' className='nav-link'>
                                        <img src={gmail} alt='@'/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Team