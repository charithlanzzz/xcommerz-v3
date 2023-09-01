import React, { Component } from "react";
import { Link } from "react-router-dom"; // Import Link

const initData = {
  "heading": "Case Studies & Success Stories",
  "headingText": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.",
  "headingTexttwo": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati.",
  "blogData": [
    {
      "id": 1,
      "slug": "the-farmers-dog-marketing-strategy", // Add a slug
      "image": "/img/stories/farmers-dog-marketing-strategy.webp",        
      "title": "The Farmer's Dog Marketing Strategy",
      "content": "The Farmer’s Dog is a direct-to-consumer brand that has made an immense change in the dog food industry.",
      "btnText": "Read More",
    },
    {
      "id": 2,
      "slug": "casper-disrupted-the-mattress-industry", // Add a slug
      "image": "/img/stories/casper.webp",        
      "title": "Casper Disrupted the Mattress Industry",
      "content": "Casper launched its eCommerce platform in 2014 & disrupted the mattress industry with a $1.1 billion valuation.",
      "btnText": "Read More",
    },
    {
      "id": 3,
      "slug": "urban-outfitters-rewards-program", // Add a slug
      "image": "/img/stories/urban-outfitters.webp",        
      "title": "Urban Outfitters Rewards Program",
      "content": "Urban Outfitters grew from a small Pennsylvania physical shop to a global retail giant in a span of 50 years.",
      "btnText": "Read More",
    }
  ]
};
class BlogOne extends Component {
  state = {
    data: {},
    blogData: [],
  };

  componentDidMount() {
    this.setState({
      data: initData,
      blogData: initData.blogData,
    });
  }

  render() {
    return (
      <section id="blog" className="section blog-area ptb_100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-6">
              <div className="section-heading text-center">
                <h2 className="text-capitalize">{this.state.data.heading}</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {this.state.blogData.map((item, idx) => {
              return (
                <div key={`bo_${idx}`} className="col-12 col-md-6 col-lg-4">
                  <div
                    className="single-blog wow fadeIn res-margin"
                    data-wow-duration="2s"
                  >
                    <div className="blog-thumb">
                      {/* Use Link with dynamic route */}
                      <Link to={`/blogSection/${item.slug}`}>
                        <img src={item.image} alt="" />
                      </Link>
                    </div>
                    <div className="blog-content p-4">
                      <h3 className="blog-title my-3">
                        {/* Use Link with dynamic route */}
                        <Link to={`/blogSection/${item.slug}`}>{item.title}</Link>
                      </h3>
                      <p>{item.content}</p>
                      {/* Use Link with dynamic route */}
                      <Link
                        to={`/blogSection/${item.slug}`}
                        className="blog-btn mt-3"
                      >
                        {item.btnText}
                      </Link>
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

export default BlogOne;
