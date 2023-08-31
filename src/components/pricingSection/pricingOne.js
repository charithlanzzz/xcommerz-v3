import React, { Component } from 'react';

const initData = {
    "heading": "Affordable Pricing Plans",
    "headingText": "Our pricing plans are budget-friendly, offering cost-effective options that cater to your needs without compromising on quality or features.",
    "headingTextTwo": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati.",
    "priceData": [
      {
        "id": 1,
        "planClass": "single-price-plan",
        "planTitle": "Basic",
        // "planPrice": "$19",
        // "planPackage": "/month",
        "plan_li_1": "Single Payment Gateway",
        "plan_li_2": "Cash on Delivery Method",
        "plan_li_3": "Single Currency",
        "plan_li_4": "English Language",
        "plan_li_5": "Guest & Member Login",
        "plan_li_6": "Product Filters and Sorting - 4 Types",
        "plan_li_7": "Product Listing Up to 500",
        "plan_li_8": "Local Delivery",
        "plan_li_9": "Monthly Reports - 3 Types",
        "plan_li_10": "Promotions - Bank Card Offers",
        "btnText": "Select Plan"
      },
      {
        "id": 2,
        "planClass": "single-price-plan featured",
        "planTitle": "Standard",
        // "planPrice": "$29",
        // "planPackage": "/month",
        "plan_li_1": "Two Payment Gateways",
        "plan_li_2": "Cash on Delivery Method",
        "plan_li_3": "Single Currency",
        "plan_li_4": "English Language",
        "plan_li_5": "Guest & Member Login",
        "plan_li_6": "Product Filters and Sorting - 4 Types",
        "plan_li_7": "Product Listing Up to 1000",
        "plan_li_8": "Local Delivery",
        "plan_li_9": "Monthly Reports - 4 Types",
        "plan_li_10": "Promotions 2-3 Types",
        "plan_li_11": "Product Inquiry Form",
        "plan_li_12": "Social Media Sharing",
        "plan_li_13": "SMS Gateway",
        "btnText": "Select Plan"
      },
      {
        "id": 3,
        "planClass": "single-price-plan",
        "planTitle": "Advanced",
        // "planPrice": "$49",
        // "planPackage": "/month",
        "plan_li_1": "4 Payment Gateways",
        "plan_li_2": "Cash on Delivery Method",
        "plan_li_3": "Multiple Currency Converter",
        "plan_li_4": "Translate in to 2 Languages",
        "plan_li_5": "Guest, Member & Social Media Login",
        "plan_li_6": "Product Filters & Sorting options - 5 Types",
        "plan_li_7": "Product Listing Up to 2000",
        "plan_li_8": "International Delivery",
        "plan_li_9": "Monthly Reports - 5 Types",
        "plan_li_10": "Promotions 3-5 Types",
        "plan_li_11": "Product Inquiry",
        "plan_li_12": "Social Media Sharing",
        "plan_li_13": "SMS Gateway",
        "plan_li_14": "Product Comparison",
        "plan_li_15": "Product Rating",
        "plan_li_16": "Product Catalogue Download",
        "plan_li_17": "Monthly Installment Payment",
        "btnText": "Select Plan"
      },
      {
        "id": 4,
        "planClass": "single-price-plan",
        "planTitle": "Premium",
        // "planPrice": "$99",
        // "planPackage": "/month",
        "plan_li_1": "6 Payment Gateways",
        "plan_li_2": "Cash on Delivery Method",
        "plan_li_3": "Multiple Currency Converter",
        "plan_li_4": "Translate in to 4 Languages",
        "plan_li_5": "Guest, Member & Social Media Login",
        "plan_li_6": "Product Filters & Sorting options - 7 Types",
        "plan_li_7": "Product Listing Up to 3000",
        "plan_li_8": "International Delivery",
        "plan_li_9": "Monthly Reports - 7 Types",
        "plan_li_10": "Promotions 5-7 Types",
        "plan_li_11": "Product Inquiry Form",
        "plan_li_12": "Social Media Sharing",
        "plan_li_13": "SMS Gateway",
        "plan_li_14": "Product Comparison",
        "plan_li_15": "Product Rating",
        "plan_li_16": "Product Catalogue",
        "plan_li_17": "Monthly Installment Payment",
        "plan_li_18": "Abandon Cart Alerts",
        "plan_li_19": "Web Order Alerts",
        "plan_li_20": "Bulk Uploading",
        "btnText": "Select Plan"
      }
    ]
  }

class pricingOne extends Component {
    state = {
        data: {},
        priceData: []
    }
    componentDidMount(){
        this.setState({
            data: initData,
            priceData:initData.priceData
        })
    }
    render() {
        return (
            <section id="pricing" className="section price-plan-area ptb_100">
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
                    <div className="row justify-content-center">
                        <div className="price-plan-wrapper">
                            {this.state.priceData.map((item, idx) => {
                                return(
                                    <div key={`pd_${idx}`} className={item.planClass}>
                                        <div className="price-header d-flex align-items-center justify-content-center my-4 px-3">
                                            <h4 className="plan-title text-uppercase">
                                            {item.planTitle}
                                            </h4>                                           
                                        </div>
                                        <ul className="plan-features pb-3">
                                            {Object.keys(item)
                                                .filter(key => key.startsWith("plan_li_"))
                                                .map((key, index) => (
                                                    <li key={index}><i className="icofont-check" />{item[key]}</li>
                                                ))
                                            }
                                        </ul>
                                        <div className="plan-select">
                                            <a className="btn btn-bordered text-uppercase" href="#">{item.btnText}</a>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default pricingOne;