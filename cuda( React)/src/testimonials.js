import React from 'react';
import test from './images/test.png';

class Testimonials extends React.Component{
    render(){
        return(
            <div className='testimonials'>
                <div className='container'>
                    <h3>what people say about us</h3>
                    <div className='line5'></div>
                    <p>Our clients love us!</p>
                    <div className='row'>
                        <div className='col-xl-6'>
                            <div className='row'>
                                <div className='col-xl-3'>
                                    <img src={test} alt='@'/>
                                </div>
                                <div className='col-xl-9'>
                                    <p className='pr'>“Nullam dapibus blandit orci, viverra gravida dui lobortis eget. 
                                        Maecenas fringilla urna eu nisl scelerisque.”</p>
                                    <h4>chanel iman</h4>
                                    <p className='position'>CEO of Pinterest</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-6'>
                            <div className='row'>
                                <div className='col-xl-3'>
                                    <img src={test} alt='@'/>
                                </div>
                                <div className='col-xl-9'>
                                    <p className='pr'>“Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. 
                                        In condimentum facilisis porta.”</p>
                                    <h4>adriana lima</h4>
                                    <p className='position'>Founder of Instagram</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-xl-6'>
                            <div className='row'>
                                <div className='col-xl-3'>
                                    <img src={test} alt='@'/>
                                </div>
                                <div className='col-xl-9'>
                                    <p className='pr'>“Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. 
                                        In condimentum facilisis porta.”</p>
                                    <h4>anne hathaway</h4>
                                    <p className='position'>Lead Designer at Behance</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-6'>
                            <div className='row'>
                                <div className='col-xl-3'>
                                    <img src={test} alt='@'/>
                                </div>
                                <div className='col-xl-9'>
                                    <p className='pr'>“Phasellus non purus vel arcu tempor commodo. 
                                        Fusce semper, purus vel luctus molestie, risus sem cursus neque.”</p>
                                    <h4>emma stone</h4>
                                    <p className='position'>Co-Founder of Shazam</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Testimonials