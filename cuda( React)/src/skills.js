import React from 'react';

class Skills extends React.Component {
    render() {
        return (
            <div className='skills'>
                <div className='container'>
                    <h3>we got skills!</h3>
                    <div className='line3'></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <br />
                        tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className='row'>
                        <div className='col-xl-3'>
                            <div class="progress 90">
                                <span class="progress-left">
                                    <span class="progress-bar"></span>
                                </span>
                                <span class="progress-right">
                                    <span class="progress-bar"></span>
                                </span>
                                <div class="progress-value">90%</div>
                            </div>
                            <h4>web design</h4>
                        </div>
                        <div className='col-xl-3'>
                            <div class="progress 75">
                                <span class="progress-left">
                                    <span class="progress-bar"></span>
                                </span>
                                <span class="progress-right">
                                    <span class="progress-bar"></span>
                                </span>
                                <div class="progress-value">75%</div>
                            </div>
                            <h4>html / css</h4>
                        </div>
                        <div className='col-xl-3'>
                            <div class="progress 70">
                                <span class="progress-left">
                                    <span class="progress-bar"></span>
                                </span>
                                <span class="progress-right">
                                    <span class="progress-bar"></span>
                                </span>
                                <div class="progress-value">70%</div>
                            </div>
                            <h4>graphic design</h4>
                        </div>
                        <div className='col-xl-3'>
                            <div class="progress 85">
                                <span class="progress-left">
                                    <span class="progress-bar"></span>
                                </span>
                                <span class="progress-right">
                                    <span class="progress-bar"></span>
                                </span>
                                <div class="progress-value">85%</div>
                            </div>
                            <h4>ui / ux</h4>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills