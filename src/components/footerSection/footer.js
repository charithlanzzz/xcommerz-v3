import React, { Component } from 'react';

const initData = {
  "image": "/img/logo-white.webp",
  "text": "See the Difference!",
  "linkText_1": "Useful Links",
  "linkText_2": "Technology Office",
  "linkText_3": "USA Office - Maryland",
  "copyrightText": "Copyrights 2023 xCommerz All rights reserved.",
  "iconList": [
    {
      "id": 1,
      "linkClass": "facebook",
      "link": "https://www.facebook.com/xcommerz",
      "iconClass": "fab fa-facebook-f"
    },
    {
      "id": 2,
      "linkClass": "twitter",
      "link": "https://twitter.com/xcommerz",
      "iconClass": "fab fa-twitter"
    },
    {
      "id": 3,
      "linkClass": "google-plus",
      "link": "https://www.youtube.com/channel/UCpYOi8eMSweOI9yJmotEPbA",
      "iconClass": "fab fa-youtube"
    },
    // {
    //   "id": 4,
    //   "link": "vine",
    //   "iconClass": "fab fa-vine"
    // }
  ],
  "footerList_1": [
    {
      "id": 1,
      "text": "Home",
      "link":"#home"
    },
    {
      "id": 2,
      "text": "Features",
      "link":"#features"
    },
    {
      "id": 3,
      "text": "Pricing",
      "link":"#pricing"
    },
    {
      "id": 4,
      "text": "Case Studies",
      "link":"#blog"
    },
    {
      "id": 5,
      "text": "Contact",
      "link":"#contact"
    }
  // ],
  // "footerList_2": [
  //   {
  //     "id": 1,
  //     "text": "FAQ"
  //   },
  //   {
  //     "id": 2,
  //     "text": "Privacy Policy"
  //   },
  //   {
  //     "id": 3,
  //     "text": "Support"
  //   },
  //   {
  //     "id": 4,
  //     "text": "Terms & Conditions"
  //   },
  //   {
  //     "id": 5,
  //     "text": "Contact"
  //   }
  // ],
  // "footerList_3": [
  //   {
  //     "id": 1,
  //     "text":"Technology Office:",
  //     "text1": "#123, 2nd Floor, McLarens Building,",
  //     "text2":"Bauddhaloka Mw, Colombo 4, SL"
  //   },
  //   {
  //     "id": 2,
  //     "text": "For Linux"
  //   },
  //   {
  //     "id": 3,
  //     "text": "For IOS"
  //   },
    // {
    //   "id": 4,
    //   "text": "For Android"
    // },
    // {
    //   "id": 5,
    //   "text": "For Mac"
    // }
  ]
}

class footer extends Component {
    state = {
        data: {},
        iconList: [],
        footerList_1: [],
        footerList_2: [],
        footerList_3: []
    }
    componentDidMount(){
        this.setState({
            data: initData,
            iconList: initData.iconList,
            footerList_1: initData.footerList_1,
            footerList_2: initData.footerList_2,
            footerList_3: initData.footerList_3
        })
    }
    render() {
        return (
            <footer className="section footer-area footer-bg">
                {/* Footer Top */}
                <div className="footer-top ptb_100">
                    <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-lg-3">
                        {/* Footer Items */}
                        <div className="footer-items">
                            {/* Logo */}
                            <a className="navbar-brand" href="#">
                            <img className="logo" src={this.state.data.image} alt="" />
                            </a>
                            <p className="text-white-50 mt-2 mb-3">{this.state.data.text}</p>
                            {/* Social Icons */}
                            <div className="social-icons d-flex">
                                {this.state.iconList.map((item, idx) => {
                                    return(
                                        <a key={`sil_${idx}`} className={item.linkClass} href={item.link} target="_blank">
                                            <i className={item.iconClass} />
                                            <i className={item.iconClass} />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                        {/* Footer Items */}
                        <div className="footer-items">
                            {/* Footer Title */}
                            <h3 className="footer-title text-white mb-2">{this.state.data.linkText_1}</h3>
                            <ul>
                                {this.state.footerList_1.map((item, idx) => {
                                    return(
                                        <li key={`flo_${idx}`} className="py-2"><a className="text-white-50 scroll" href={item.link}>{item.text}</a></li>
                                    );
                                })}
                            </ul>
                        </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                        {/* Footer Items */}
                        <div className="footer-items">
                            {/* Footer Title */}
                            <h3 className="footer-title text-white mb-2">{this.state.data.linkText_2}</h3>
                            <ul>
                                {/* {this.state.footerList_2.map((item, idx) => {
                                    return(
                                        <li key={`flo_${idx}`} className="py-2"><a className="text-white-50" href="#">{item.text}</a></li>
                                    );
                                })} */}
                                <li className="py-2 text-white-50 d-flex">
                                  <i class="icofont-location-pin pt-2 pr-2"></i>
                                  <span>Xiteb Pvt Ltd<br/>#123, 2nd Floor,<br/>McLarens Building,<br/>Bauddhaloka Mw, Colombo 4, SL</span>
                                </li>
                                <li className="py-2"><i class="icofont-email pr-2"></i><a className="text-white-50" href="mailto:hello@xiteb.com">hello@xiteb.com</a></li>
                                <li className="py-2"><i class="icofont-phone pr-2"></i><a className="text-white-50" href="tel:+94114347575">(+94) 11 434 7575</a></li>
                                        
                            </ul>
                        </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                        {/* Footer Items */}
                        <div className="footer-items">
                            {/* Footer Title */}
                            <h3 className="footer-title text-white mb-2">{this.state.data.linkText_3}</h3>
                            <ul>
                                {/* {this.state.footerList_3.map((item, idx) => { */}
                                    {/* return( */}
                                        {/* <li key={`flo_${idx}`} className="py-2"><a className="text-white-50" href="#">{item.text}</a></li> */}
                                        <li className="py-2 text-white-50 d-flex"><i class="icofont-location-pin pt-2 pr-2"></i><span>
                                        12812 Parkland Dr.,<br/> Rockvile MD 20853, USA
                                        </span></li>                                        
                                        <li className="py-2"><i class="icofont-phone pr-2"></i><a className="text-white-50" href="tel:+13022615317">(+1) 302 261 5317</a></li>
                                    {/* ); */}
                                {/* })} */}
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <div className="container">
                    <div className="row">
                        <div className="col-12">
                        {/* Copyright Area */}
                        <div className="copyright-area d-flex flex-wrap justify-content-center justify-content-sm-between text-center py-4">
                            {/* Copyright Left */}
                            <div className="copyright-left text-white-50">&copy; {this.state.data.copyrightText}</div>
                            {/* Copyright Right */}
                            <div className="copyright-right text-white-50">Solution By <a className="text-white-50" href="https://xiteb.com" target="_blank">Xiteb</a></div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default footer;