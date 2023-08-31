import React, { Component } from 'react';

const teamData = [
    {
        image: "/img/logos/singer.webp"        
    },
    {
        image: "/img/logos/genxt.webp"
    },
    {
        image: "/img/logos/lumizo.webp"
    },
    {
        image: "/img/logos/bheanbeauty.webp"
    }
]

class teamOne extends Component {
    state = {        
        data: []
    }
    componentDidMount(){
        this.setState({           
            data: teamData            
        })
    }
    render() {
        return (
            <section id="team" className="section team-area">
                <div className="container">                   
                    <div className="row">
                        {/* Team Slider */}
                        <div className="team-slider owl-carousel">
                            {/* Single Team */}
                            {this.state.data.map((item, idx) => {
                                return(
                                    <div key={`to_${idx}`} className="single-team text-center px-3 py-2 m-2">
                                       
                                        <img src={item.image} alt="" />
                                       
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

export default teamOne;