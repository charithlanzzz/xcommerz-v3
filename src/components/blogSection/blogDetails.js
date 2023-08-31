import React, { Component } from 'react';
import ScrollupSection from '../scrollupSection/scrollUp';
// import Header from '../headerSection/headerOne';
import BreadcrumbSection from '../breadcrumbSection/breadcrumbTwo';
import FooterSection from '../footerSection/footer';


const initData = [
    {
    "id": 1,
    "title": "The Farmer's Dog Marketing Strategy",
    "image": "/img/stories/farmers-dog-marketing-strategy.webp",    
    "text_1": "The Farmer’s Dog is a direct-to-consumer brand that has made a immense change in the dog food industry. They needed to make overturn on marketing of the, burnt brown balls, which were highly-processed as natural products, so they started creating a different type of dog food in their own category. The transactions on the eCom site, which has the aim of sending dog food directly to customers. The online store consists of different varieties of food & also contains a survey that helps the users decide what type of food and what portion size they should feed their dogs.",
    "text_2": "They are now delivering millions of meals monthly, with a total revenue of over $100M via eCommerce platform and the brand has grown by 669% in recent years, since 2018.",
    "text_3": "Make Personalization a critical main factor in your business. A seamless customer journey is an expectation of today’s online shoppers, which helps them find and buy products that suit their needs in a quick and efficient way. Because of that, most brands tend to build their eCommerce platforms on customer experience with personalization.",
    },
    {
    "id": 2,
    "title": "Casper Disrupted the Mattress Industry",
    "image": "/img/stories/casper.webp",    
    "text_1": "Casper launched its eCommerce platform in 2014 & disrupted the mattress industry with a $1.1 billion valuation.",
    "text_2": "The innovative foam mattress products and a smart content marketing strategy helped Casper swiftly make a name and position their place in the mattress industry with the help of online store. Initially, no one expected an eCommerce platform to succeed and convince millions of customers to oder a foam mattress online. Their marketing strategy succeeded at getting potential customers to trust that they’d love a mattress they’d never touched when it arrived on their doorstep.",
    "text_3": "In this breakdown, we’ll analyze how the direct-to-consumer brand was able to build unprecedented trust and convince people to buy mattresses online with SEO as a strategy in Google search engine. The brand opened several physical stores, so they were not a completely online-based business earlier. Even though they still sell mattresses in physical stores, the majority of their growth was accomplished via their online business which is much cost effective compared to the investment on physical stores.",
    },
    {
    "id": 3,
    "title": "Urban Outfitters Rewards Program",
    "image": "/img/stories/urban-outfitters.webp",    
    "text_1": "Urban Outfitters grew from a small Pennsylvania physical shop to a global retail giant in a span of 50 years. They’re fantastic at keeping in touch with Millennial and Gen Z culture, and their message always connects with their audience mainly online.",
    "text_2": "They were able to increase revenue per customer by 146% with their eCommerce platform. They introduced a rewards program and how it strengthens brand loyalty.",
    "text_3": "Unlike many ecommerce store owners, Urban Outfitters was so concerned with driving sales through meaningful human connections. Remember, customer loyalty is just as important as immediate sales revenue and generally leads to more sales in the long term. Urban Outfitters conducted a study on customer loyalty and found that: 86% of customers join loyalty programs for rewards. 78% join for exclusive discounts. 78% of Millennials enroll into two or more loyalty programs. Urban Outfitters knew they had to find a way to strengthen loyalty with their target customers online and a loyalty program seemed like the perfect solution for that.",
    },
]


class blogDetails extends Component {
    state = {
        data: {}        
    }
    componentDidMount() {
        const { match } = this.props;
        const id = parseInt(match.params.id); // Extract id from URL parameter

        const blogData = initData.find(item => item.id === id);

        if (blogData) {
            this.setState({
                data: blogData,
            });
        }
    }
    render() {
        return (
            <div className="blog">
                <ScrollupSection />
                <div className="all-area">
                    {/* <Header imageData={"/img/logo-white.png"} /> */}
                    <BreadcrumbSection heading={this.state.data.title} home={"Home"} page={"Blog"} title={"Blog Details"} />
                    <section id="blog" className="section blog-area ptb_100">
                        <div className="container">
                            <div className="row">  
                            <div className='col-12 col-lg-6'>
                                 {/* Blog Thumb */}
                                 <div className="blog-thumb">
                                            <img src={this.state.data.image} alt="" />
                                        </div>
                                </div>                             
                                <div className="col-12 col-lg-6">
                                    {/* Single Blog Details */}
                                    <article className="single-blog-details">                                       
                                        {/* Blog Content */}
                                        <div className="blog-content appo-blog">                                           
                                            {/* Blog Details */}
                                            <div className="blog-details">
                                                <h3 className="blog-title py-2 py-sm-3"><a href="#">{this.state.data.title}</a></h3>
                                                <p className="d-block mb-2">{this.state.data.text_1}</p>
                                                <p className="d-block mb-2">{this.state.data.text_2}</p>                                                
                                                <p className="d-block">{this.state.data.text_3}</p>                                                
                                            </div>
                                        </div>                                        
                                    </article>
                                </div>
                            </div>
                        </div>
                    </section>
                    <FooterSection />
                </div>
            </div>
        );
    }
}

export default blogDetails;