import React, { Component, useState } from 'react';
import Modal from '../popup/modal';

const initData = {
    content: "The comprehensive eCommerce solution developed by Team Xiteb® encompasses an extensive range of features, derived from in-depth research on existing and emerging online buying trends.",
    btnText: "Request a Quote",
    btnTextTwo: "Packages",
    welcomeThumb: "/img/welcome_mockup_2.webp",
    iconClass: "icofont-ui-play"
}

class WelcomeOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: initData,
            showModal: false
        };
    }

    openModal = () => {
        this.setState({ showModal: true });
    };

    closeModal = () => {
        this.setState({ showModal: false });
    };

    render() {
        return (
            <section id="home" className="section welcome-area d-flex align-items-center">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="welcome-intro">
                                <h1>Revolutionary eCommerce for Business of All Sizes!</h1>
                                <h3>Let Your Web Do the Selling</h3>
                                <p className="my-3">{this.state.data.content}</p>
                                <div className="button-group d-flex">
                                    {!this.state.showModal && (
                                        <button onClick={this.openModal} className="btn btn-bordered mr-3">
                                            <span>{this.state.data.btnText}</span>
                                        </button>
                                    )}
                                    <Modal closeModal={this.closeModal} show={this.state.showModal} />
                                    <a href="#pricing" className="btn btn-bordered d-none d-sm-inline-block scroll">
                                        {this.state.data.btnTextTwo}
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="welcome-thumb text-center">
                                <img src={this.state.data.welcomeThumb} alt="" />
                            </div>
                            <div className="video-icon d-none d-lg-block">
                                <a className="play-btn" data-fancybox href="/img/video/Xcommerz.mp4">
                                    <i className={this.state.data.iconClass} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default WelcomeOne;
