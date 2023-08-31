import React, { Component } from 'react';

const initData = {
    "promoData": [
      {
        "id": 1,
        "promoImage": "/img/promo_img_1.webp",
        "promoTitle": "Get xCommerz",
        "promoText": "You will be amazed with the uniqueness"
      },
      {
        "id": 2,
        "promoImage": "/img/promo_img_2.webp",
        "promoTitle": "Shoppers Love It",
        "promoText": "it's proven that shoppers LOVE xCommerz"
      },
      {
        "id": 3,
        "promoImage": "/img/promo_img_3.webp",
        "promoTitle": "Transactions Happen",
        "promoText": "UX Driven UI Designs Trigger Sales"
      },
      {
        "id": 4,
        "promoImage": "/img/promo_img_4.webp",
        "promoTitle": "Increase Sales",
        "promoText": "Boost Revenue: Fuel Your Growth"
      }
    ]  
   
  }

class promoOne extends Component {
    state = {
        data: {},
        promoData: []
    }
    componentDidMount(){
        this.setState({
            data: initData,
                    promoData: initData.promoData
        })       
    }
    render() {
        return (
            <section id="benifits" className="section benifits-area ptb_100">
                <div className="container">
                    <div className="row">
                        {/* Benifits Item */}
                        {this.state.promoData.map((item, idx) => {
                            return(
                                <div key={`po_${idx}`} className="col-12 col-sm-6 col-md-4 col-lg-3" data-aos="fade-up">
                                    <div className="benifits-item text-center p-3">
                                        <div className="feature-icon">
                                            <img src={item.promoImage} alt="" />
                                        </div>
                                        {/* Benifits Text */}
                                        <div className="benifits-text">
                                            <h3 className="mb-2">{item.promoTitle}</h3>
                                            <p>{item.promoText}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        );
    }
}

export default promoOne;