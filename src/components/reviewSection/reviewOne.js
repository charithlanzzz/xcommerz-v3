import React, { Component } from 'react';

const initData = {
    thumb_1: "img/testimonails/Leftt-arrow.webp",
    thumb_2: "img/testimonails/Right-arrow.webp"
}

const reviewData = [
    {
        image: "/img/testimonails/thanuja-singer.webp",
        name: "Thanuja Senaviratne",
        address: "Senior Manager Singer (Sri Lanka) PLC",        
        text: "Xiteb team has been hard working and supportive in implementing the revamped Singer eCommerce platform. They worked lot of late nights and worked on holidays to meet the targets. They have thrived to maintained the quality expected."
    },
    {
        image: "/img/testimonails/udith-gnext.webp",
        name: "Udith Erosh",
        address: "Brand Manager GNEXT",       
        text: "Team Xiteb developed gnextstore.lk eCommerce website and has been one of most responsive digital teams I have ever worked with in the software industry. Their attention to customer service as well as Technical know-how has been exceptional in developing and maintaining online stores."
    },
    {
        image: "/img/testimonails/darshani-lumizo.webp",
        name: "Dharshini Navakumaran",
        address: "Director Lumizo Pvt Ltd",        
        text: "Team Xiteb was very patient and spent loads of time understanding our business requirements & worked like as they are part of our team. If you are looking for a website development company who is 100% committed & professional, then look no further. Highly recommended."
    }
]

class reviewOne extends Component {
    state = {
        initData: {},
        data: [],
    }
    componentDidMount(){
        this.setState({
            initData: initData,
            data: reviewData
        })
    }
    render() {
        return (
            <section className="section testimonial-area ptb_100">
                <div className="shapes-container">
                    <div className="shape bg-shape" />
                </div>
                <div className="container text-center">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-12 col-md-8">
                            <div className="testimonials owl-carousel">
                                {/* Single Testimonial */}
                                {this.state.data.map((item, idx) => {
                                    return(
                                        <div key={`ro_${idx}`} className="single-testimonial p-3 p-md-5">
                                            <img src={item.image} className="mx-auto d-block" alt="" />
                                            {/* Client Name */}
                                            <h3 className="client-name mt-4 mb-2">{item.name}</h3>
                                            {/* Client Address */}
                                            <h5 className="client-address mb-3 fw-4">{item.address}</h5>                                           
                                            {/* Client Description */}
                                            <div className="client-description">
                                                {/* Client Text */}
                                                <div className="client-text">
                                                    <p>{item.text}</p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            {/* Single Testimonial Thumb */}
                            <div className="single-testimonial-thumb d-none d-md-block">
                                {/* Thumb Prev */}
                                <div className="thumb-prev">
                                    <span>
                                        <img src={this.state.initData.thumb_1} alt="" />
                                    </span>
                                </div>
                                {/* Thumb Next */}
                                <div className="thumb-next">
                                    <span>
                                        <img src={this.state.initData.thumb_2} alt="" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default reviewOne;