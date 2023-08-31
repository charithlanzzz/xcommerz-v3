import React, { Component } from 'react';
import ModalAudit from '../popup/modalAudit';

const initData = {
    "heading": "Get a Free e-Com Audit to Your Website",
    "headingText": "We have meticulously assembled a comprehensive e-commerce website audit, offered to you free of charge and without any obligations.",
    "headingTextTwo": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique dolor ut iusto vitae autem neque eum ipsam, impedit asperiores vel cumque laborum dicta repellendus inventore voluptatibus et explicabo nobis unde.",
    "downloadData": [
        {
            "id": 1,
            "linkClass": "btn btn-bordered",
            "iconClass": "icofont icofont-search-document dsp-tc",
            "iconText": "GET THE",
            "iconSpan": "Free Audit Now"
        }
    ]
};

class DownloadOne extends Component {
    state = {
        data: {},
        downloadData: [],
        showModal: false
    }

    componentDidMount() {
        this.setState({
            data: initData,
            downloadData: initData.downloadData
        });
    }

    openModal = () => {
        this.setState({ showModal: true });
    }

    closeModal = () => {
        this.setState({ showModal: false });
    }

    render() {
        // const { showModal } = this.state;

        return (
            <section className="section download-area ptb_100">
                {/* Shapes Container */}
                <div className="shapes-container d-none d-sm-block">
                    <div className="shape-2" />
                    <div className="shape-3" />
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-8">
                            {/* Download Text */}
                            <div className="download-text text-center">
                                <h2>{this.state.data.heading}</h2>
                                <p className="my-3">{this.state.data.headingText}</p>
                                {/* Store Buttons */}
                                <div className="button-group store-buttons">
                                
                                    {this.state.downloadData.map((item, idx) => (
                                        <button key={`do_${idx}`} className={item.linkClass} onClick={this.openModal}>
                                            <i className={item.iconClass} />
                                            <p className="dsp-tc">{item.iconText}<br /><span>{item.iconSpan}</span></p>
                                        </button>
                                    ))}
                                
                                   <ModalAudit closeModal={this.closeModal} show={this.state.showModal} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        );
    }
}

export default DownloadOne;
