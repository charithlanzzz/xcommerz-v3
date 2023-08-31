import React from "react";

function ModalPricing(props) {
  const { show, closeModal, selectedPlanTitle } = props;

  const displayBlock = {
    display: "block",
  };
  const displayNone = {
    display: "none",
  };

  return (
    <div className="quote-form-pop anim">
      <div
        id="myModal"
        className="modal"
        style={show ? displayBlock : displayNone}
      >
        {/* <!-- Modal content --> */}
        <div className="modal-content d-flex align-items-center text-center">
          <div className="outer-container">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <div className="request-text">
              <strong>Request a Quote</strong>
            </div>
            <div className="contact-box text-center">
              {/* Contact Form */}
              <form
                id="pricing-form"
                className="custom-form"
                method="POST"
                action="assets/php/pricingmail.php"
              >
                <div className="row">
                  <div className="col">
                    <div className="form-group row">
                      <label
                        for="inputName"
                        className="col-sm-4 col-form-label"
                      >
                        Your Name<sup>*</sup>
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          placeholder="Name"
                          required="required"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        for="inputEmail"
                        className="col-sm-4 col-form-label"
                      >
                        Your Email Address<sup>*</sup>
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          placeholder="Email"
                          required="required"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        for="inputPhone"
                        className="col-sm-4 col-form-label"
                      >
                        Phone Number<sup>*</sup>
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="text"
                          className="form-control"
                          name="phone"
                          placeholder="Phone"
                          required="required"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputPackage"
                        className="col-sm-4 col-form-label"
                      >
                        Select Your Package <sup>*</sup>
                      </label>
                      <div className="col-sm-8">
                        <select
                          id="inputPackage"
                          name="package"
                          className="form-control"
                          required="required"
                          value={selectedPlanTitle} // Use the selectedPlanTitle prop
                          onChange={(e) =>
                            props.setSelectedPlanTitle(e.target.value)
                          }
                        >
                          <option disabled value="">
                            Select your package
                          </option>
                          <option value="Basic">Basic</option>
                          <option value="Standard">Standard</option>
                          <option value="Advanced">Advanced</option>
                          <option value="Premium">Premium</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        for="inputRequ"
                        className="col-sm-4 col-form-label"
                      >
                        Describe your Requirement <sup>*</sup>
                      </label>
                      <div className="col-sm-8">
                        <textarea
                          className="form-control"
                          name="message"
                          placeholder="Message"
                          rows="3"
                          required="required"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 text-right">
                    <button
                      className="btn btn-bordered mt-3 mt-sm-4"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </div>
                <p className="form-message py-5" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalPricing;
