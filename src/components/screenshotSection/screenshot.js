import React, { useState } from 'react';
import ModalDemo from '../popup/modalDemo';

const data = [
    {
        image: "/img/screenshot/01.webp",
        iconClass: "icofont-image"
    },
    {
        image: "/img/screenshot/02.webp",
        iconClass: "icofont-image"
    },
    {
        image: "/img/screenshot/03.webp",
        iconClass: "icofont-image"
    },
    {
        image: "/img/screenshot/04.webp",
        iconClass: "icofont-image"
    },
    {
        image: "/img/screenshot/05.webp",
        iconClass: "icofont-image"
    },
];

const initData = {
    btnText: "Request a Demo"
};

const Screenshot = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <section id="screenshots" className="section screenshots-area ptb_100">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="app-screenshots">
                            {data.map((item, idx) => (
                                <div key={`sd_${idx}`} className="single-screenshot">
                                    <img src={item.image} alt="" />
                                    <div className="screenshots-overlay">
                                        <a href={item.image} data-fancybox="images">
                                            <i className={item.iconClass} />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='row requestdemo-btn'>
                    <div className='col-12 text-center'>
                        {!showModal && (
                            <button onClick={openModal} className="btn btn-bordered">
                                <span>{initData.btnText}</span>
                            </button>
                        )}
                        <ModalDemo closeModal={closeModal} show={showModal} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Screenshot;
