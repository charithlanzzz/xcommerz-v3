import React, { Component } from 'react';

class headerOne extends Component {
    render() {
        return (
            <header className="section header-area">
                <div id="appo-header" className="main-header-area">
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-md navbar-light">
                            {/* Logo */}
                            <a className="navbar-brand" href="#">
                                <img className="logo" src={this.props.imageData} alt="" />
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#appo-menu">
                                <span className="navbar-toggler-icon" />
                            </button>
                            {/* Appo Menu */}
                            <div className="collapse navbar-collapse" id="appo-menu">
                                {/* Header Items */}
                                <ul className="navbar-nav header-items ml-auto">
                                    <li className="nav-item active">
                                        <a className="nav-link scroll" href="#home">Home</a>                                        
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link scroll" href="#features">Features</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link scroll" href="#pricing">Pricing</a>
                                    </li>
                                    {/* <li className="nav-item">
                                        <a className="nav-link scroll" href="#team">Team</a>
                                    </li> */}
                                    <li className="nav-item dropdown">
                                        <a className="nav-link scroll" href="#blog">Case Studies</a>                                       
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link scroll" href="#contact">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        );
    }
}

export default headerOne;