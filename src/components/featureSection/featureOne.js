import React, { Component } from 'react';
import CounterSection from '../counterSection/counter';

const initData = {
    "headingSpan": "USPs",
    "heading": "Empower Your Business with xCommerz",
    "headingText": "Discover a robust suite of built-in powerful features designed to elevate your online business. From seamless payment processing to customizable storefronts, our platform empowers you with tools that drive sales, enhance user experiences, and streamline management, helping you stay ahead in the competitive e-commerce landscape.",
    "featuresData": [
      {
        "id": 1,
        "featureImage": "/img/feature_icon1.webp",
        "featuretitle": "Fee-Free Monthly Usage",
        "featureText": "Enjoy usage without monthly subscription fees, making it budget-friendly."
      },
      {
        "id": 2,
        "featureImage": "/img/feature_icon2.webp",
        "featuretitle": "Transaction Fees Waived",
        "featureText": "Transact without extra charges, saving you money."
      },
      {
        "id": 3,
        "featureImage": "/img/feature_icon3.webp",
        "featuretitle": "Seamless Data Migration",
        "featureText": "Transition effortlessly with smooth data shifts. "
      },
      {
        "id": 4,
        "featureImage": "/img/feature_icon4.webp",
        "featuretitle": "Infinite Design Possibilities",
        "featureText": "Explore limitless design options for a unique store."
      }
    ]
  }

class featureOne extends Component {
    state = {
        data: {},
        featuresData: []
    }
    componentDidMount(){
        this.setState({
            data: initData,
            featuresData:initData.featuresData
        })
    }
    render() {
        return (
            <section id="features" className="section features-area ptb_100">
                <div className="shapes-container">
                    <div className="shape bg-shape" />
                </div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="features-text">
                                {/* Headings */}
                                <div className="headings d-flex align-items-center mb-4">
                                    <span className="d-none d-sm-block">{this.state.data.headingSpan}</span>
                                    <h2>{this.state.data.heading}</h2>
                                </div>
                                <p className="my-3">{this.state.data.headingText}</p>
                                {/* Counter List */}
                                <CounterSection />
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-5 offset-lg-1">
                            {/* Featured Items */}
                            <div className="featured-items">
                                <ul>
                                    {this.state.featuresData.map((item, idx) => {
                                        return(
                                            <li key={`fo_${idx}`}>
                                                {/* Single Features Item */}
                                                <div className="single-features media p-3">
                                                    {/* Features Title */}
                                                    <div className="features-title mr-3">
                                                        <img src={item.featureImage} alt="" />
                                                    </div>
                                                    {/* Features Text */}
                                                    <div className="features-text media-body">
                                                        <h3>{item.featuretitle}</h3>
                                                        <p>{item.featureText}</p>
                                                    </div>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default featureOne;