import React from 'react';

class GetInTouch extends React.Component {
    render() {
        return (
            <div className='getintouch'>
                <div className='footer'>
                    <div className='container'>
                        <h3>get it touch</h3>
                        <div className='line6'></div>
                        <p>1600 Pennsylvania Ave NW, Washington, DC 20500, United States of America. Tel: (202) 456-1111</p>
                        <form action='' method=''>
                            <div className='row'>
                                <div className='col-xl-6'>
                                    <div class="input-group mb-4">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text your">Your Name <span>*</span></div>
                                        </div>
                                        <input type="text" class="form-control"/>
                                    </div>
                                </div>
                                <div className='col-xl-6'>
                                    <div class="input-group mb-4">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text your">Your Email <span>*</span></div>
                                        </div>
                                        <input type="text" class="form-control"/>
                                    </div>
                                </div>
                            </div>
                            <textarea className='form-control' rows='6'></textarea>
                            <button className='btn text-light'>send massage</button>
                        </form>
                    </div>
                </div>
                <footer>
                    <ul className='nav'>
                        <li className='nav-item'><a href='#' className='nav-link'>Facebook</a></li>
                        <li className='nav-item'><a href='#' className='nav-link'>Twitter</a></li>
                        <li className='nav-item'><a href='#' className='nav-link'>Google+</a></li>
                        <li className='nav-item'><a href='#' className='nav-link'>LinkedIn</a></li>
                        <li className='nav-item'><a href='#' className='nav-link'>Behance</a></li>
                        <li className='nav-item'><a href='#' className='nav-link'>Dribbble</a></li>
                        <li className='nav-item'><a href='#' className='nav-link'>GitHub</a></li>
                    </ul>
                </footer>
            </div>
        )
    }
}

export default GetInTouch