import React, { Component } from 'react';
import axios from 'axios';

const initData = {
  "heading": "Stay Tuned",
  "headingText": "Your inquiries are valuable. Contact us, and we'll promptly get back to you.",
  "headingTextTwo": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati."
}

class contactSection extends Component {
    state = {
        data: {}
    }
    componentDidMount(){
        this.setState({
            data: initData
        })
    }
    render() {
        return (
            <section id="contact" className="contact-area bg-gray ptb_100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-6">
                            {/* Section Heading */}
                            <div className="section-heading text-center">
                                <h2 className="text-capitalize">{this.state.data.heading}</h2>
                                <p className="d-none d-sm-block mt-4">{this.state.data.headingText}</p>
                                <p className="d-block d-sm-none mt-4">{this.state.data.headingTextTwo}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            {/* Contact Box */}
                            <div className="contact-box text-center">
                            {/* Contact Form */}
                            <form id="contact-form" className='custom-form' method="POST" action="assets/php/mail.php">
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <div className="form-group">
                                        <input type="text" className="form-control" name="name" placeholder="Name" required="required" />
                                        </div>
                                        <div className="form-group">
                                        <input type="email" className="form-control" name="email" placeholder="Email" required="required" />
                                        </div>
                                        <div className="form-group">
                                        <input type="text" className="form-control" name="phone" placeholder="Phone" required="required" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="form-group">
                                        <textarea className="form-control" name="message" placeholder="Message" required="required" defaultValue={""} />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-bordered mt-3 mt-sm-4" type="submit">Send Message</button>
                                    </div>
                                </div>
                                
                                <p className="form-message py-5" />
                            
                            </form>
                           
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default contactSection;