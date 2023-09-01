import React, { useState } from 'react';
import ModalStart from '../popup/modalStart';

const SubscribeOne = () => {
    const [showModal, setShowModal] = useState(false);

    const initData = {
        heading: "Launch Your Online Store in 14 Days",
        content: "No Credit card required",
        btnText: "Get Started"
    };

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <section className="start-free-area">
            <div className="container">
                <div className="col-12">
                    {/* Start Free Content */}
                    <div className="start-free-content d-flex flex-wrap align-items-center justify-content-center justify-content-lg-between shadow-lg" data-aos="fade-up">
                        {/* Start Free Content */}
                        <div className="start-free-text">
                            <h2 className="mb-2">{initData.heading}</h2>
                        </div>
                        {/* Start Free Button */}
                        <div className="start-free-btn mt-4 mt-lg-0">
                            <button onClick={openModal} className="btn btn-bordered"><span>{initData.btnText}</span></button>
                        </div>
                    </div>
                </div>
            </div>
            <ModalStart closeModal={closeModal} show={showModal} />
        </section>
    );
};

export default SubscribeOne;
