import React, { useState } from "react";

function ModalDemo(props) {
  const { show, closeModal } = props;
  const displayBlock = {
    display:"block"
  };
  const displayNone = {
    display:"none"
  };


  const [showD, setShow] = useState(false);
  const openModal = () => setShow(true);
  const closeModal1 = () => setShow(false);
  
  function sayHello() {
    alert('Hello!');
  }
  
  return (
    <>
       
       <div className="quote-form-pop anim">
                <div id="demoModal" className="modal" style={show?displayBlock:displayNone}>
                    {/* <!-- Modal content --> */}
                    <div className="modal-content d-flex align-items-center text-center">
                        <div className="outer-container">
                            <span className="close" onClick={closeModal}>&times;</span>
                            <div className="request-text"><strong>Request a Demo</strong></div>
                            <div className="contact-box text-center">
                            {/* Contact Form */}
                            <form id="demo-form" className="custom-form" method="POST" action="assets/php/demomail.php">
                                <div className="row">
                                    <div className="col">
                                        <div className="form-group row">
                                        <label for="inputName" className="col-sm-4 col-form-label">Your Name<sup>*</sup></label>
                                        <div className="col-sm-8">
                                        <input type="text" className="form-control" name="name" placeholder="Name" required="required" />
                                        </div>
                                        </div>
                                        <div className="form-group row">
                                        <label for="inputEmail" className="col-sm-4 col-form-label">Your Email Address<sup>*</sup></label>
                                        <div className="col-sm-8">
                                        <input type="email" className="form-control" name="email" placeholder="Email" required="required" />
                                        </div>
                                        </div>
                                        <div className="form-group row">
                                        <label for="inputPhone" className="col-sm-4 col-form-label">Phone Number<sup>*</sup></label>
                                        <div className="col-sm-8">
                                        <input type="text" className="form-control" name="phone" placeholder="Phone" required="required" />
                                        </div>
                                        </div>                                        
                                        <div className="form-group row">                                        
                                        <label for="inputRequ" className="col-sm-4 col-form-label">Your Message <sup>*</sup></label>
                                        <div className="col-sm-8">
                                        <textarea className="form-control" name="message" placeholder="Message" required="required" defaultValue={""} />
                                        </div>
                                        </div>
                                    </div>                                    
                                    <div className="col-12 text-right">
                                        <button className="btn btn-bordered mt-3 mt-sm-4" type="submit">Submit</button>
                                    </div>
                                </div>
                                <p className="form-message py-5" />
                            </form>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  );
  
}

export default ModalDemo;