import React, { Component } from 'react';

const initData = {
  "headingSpan": "About",
  "heading": "Your Dream eCom Solution That Exceeds Expectations",
  "headingText": "Unleash Xiteb's potent eCommerce solution to transform your online store. Our custom eCommerce development crafts captivating, responsive websites that drive conversions. Enjoy seamless shopping with integrated carts and secure gateways. Master mobile commerce and amplify traffic through SEO. Elevate user experience and sales with optimization techniques. Count on us for flawless maintenance and support. Propel online triumph with Xiteb's unmatched eCommerce solutions.",
  "headingTextTwo": "Our seamless shopping cart integration and secure payment gateway integration ensure smooth transactions for your customers. Harness the potential of mobile commerce with our innovative solutions, while our SEO strategies drive organic traffic to your eCommerce website. Through conversion rate optimization techniques, we enhance user experience and boost sales. With our dedicated website maintenance and support, you can focus on growing your business while we ensure your eCommerce platform runs flawlessly. Trust Xiteb for unparalleled eCommerce solutions that propel your online success.",
  "aboutThumb": "/img/about.webp",
  "aboutData": [
    {
      "id": 1,
      "linkClass": "btn btn-bordered",
      "linkClassTwo": "btn btn-bordered text-white",
      "iconClass": "icofont icofont-brand-android-robot dsp-tc",
      "iconText": "GET IT ON",
      "iconSpan": "Google Play"
    },
    {
      "id": 2,
      "linkClass": "btn btn-bordered",
      "linkClassTwo": "btn btn-bordered text-white",
      "iconClass": "icofont icofont-brand-apple dsp-tc",
      "iconText": "AVAILABLE ON",
      "iconSpan": "Apple Store"
    }
  ]
}

class aboutOne extends Component {
    state = {
        data: {},
        aboutData: []
    }
    componentDidMount(){
        this.setState({
            data: initData,
            aboutData:initData.aboutData
        })
    }
    render() {
        return (
            <section className="section about-app-area ptb_100">
                <div className="shapes-container">
                    <div className="shape-1" />
                </div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-6">
                            {/* About Text */}
                            <div className="about-text">
                                {/* Headings */}
                                <div className="headings d-flex align-items-center mb-4">
                                    <span className="text-uppercase d-none d-sm-block">{this.state.data.headingSpan}</span>
                                    <h2 className="text-capitalize">{this.state.data.heading}</h2>
                                </div>
                                <p className="my-3">{this.state.data.headingText}</p>
                                
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            {/* About Thumb */}
                            <div className="about-thumb text-center d-none d-lg-block">
                                <img src={this.state.data.aboutThumb} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default aboutOne;