import React, { useState } from "react";

function Modal(props) {
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

  return (
    <>
       <div className="quote-form-pop anim">
                <div id="myModal" className="modal" style={show?displayBlock:displayNone}>
                    {/* <!-- Modal content --> */}
                    <div className="modal-content d-flex align-items-center text-center">
                        <div className="outer-container">
                            <span className="close" onClick={closeModal}>&times;</span>
                            <div className="request-text"><strong>Request a Quote</strong></div>
                            <div className="contact-box text-center">
                            {/* Contact Form */}
                            <form id="request-form" className="custom-form" method="POST" action="assets/php/requestmail.php">
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
                                        <div class="form-group row">
                                        <label for="inputPackage" className="col-sm-4 col-form-label">Select Your Package <sup>*</sup></label>
                                        <div className="col-sm-8">
                                        <select id="inputPackage" name="package" class="form-control" required="required">
                                            <option selected disabled>Select your package</option>
                                            <option data-package="Basic" value="basic">Basic</option>
                                            <option data-package="Standard" value="standard">Standard</option>
                                            <option data-package="Advanced" value="advance">Advanced</option>
                                            <option data-package="Premium" value="premium">Premium</option>
                                        </select>
                                        </div>
                                        </div>
                                        <div className="form-group row">                                        
                                        <label for="inputRequ" className="col-sm-4 col-form-label">Describe your Requirement <sup>*</sup></label>
                                        <div className="col-sm-8">
                                        <textarea className="form-control" name="message" placeholder="Message" rows="3" required="required" defaultValue={""} />
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

export default Modal;