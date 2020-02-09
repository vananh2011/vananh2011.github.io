import React from 'react';
import icon1 from './images/Cuda-Portfolio_01.png';
import icon2 from './images/Cuda-Portfolio_02.png';
import icon3 from './images/Cuda-Portfolio_03.png';
import icon4 from './images/Cuda-Portfolio_04.png';

class Services extends React.Component{
    render(){
        return(
            <div className='services'>
                <div className='container'>
                    <h3>services we provide</h3>
                    <div className='line1'></div>
                    <p>We are working with both individuals and businesses from all over the globe <br/>
                    to create awesome websites and applications.</p>
                    <div className='row'>
                        <div className='col-xl-3'>
                            <img src={icon1} alt='icon1'/>
                            <h4>branding</h4>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.</p>
                        </div>
                        <div className='col-xl-3'>
                            <img src={icon2} alt='icon2'/>
                            <h4>design</h4>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
                        </div>
                        <div className='col-xl-3'>
                            <img src={icon3} alt='icon3'/>
                            <h4>development</h4>
                            <p>At vero eos et accusamus et iusto odio dignissimos qui blanditiis praesentium.</p>
                        </div>
                        <div className='col-xl-3'>
                            <img src={icon4} alt='icon4'/>
                            <h4>rocket science</h4>
                            <p>Et harum quidem rerum est et expedita distinctio. Nam libero tempore.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Services