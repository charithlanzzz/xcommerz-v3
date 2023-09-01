import React, { useState } from "react";

function ModalPricing(props) {
  const { show, closeModal, selectedPlanTitle } = props;

  const displayBlock = {
    display: "block",
  };
  const displayNone = {
    display: "none",
  };

  const [showD, setShow] = useState(false);
  const openModal = () => setShow(true);
  const closeModal1 = () => setShow(false);

  return (
    <div className="quote-form-pop anim">
      <div id={`myModal-${selectedPlanTitle}`} className="modal" style={show ? displayBlock : displayNone}>
        {/* <!-- Modal content --> */}
        <div className="modal-content d-flex align-items-center text-center">
          <div className="outer-container">
            <span className="close" onClick={closeModal}>&times;</span>
            <div className="request-text">
              <strong>Request a Quote</strong>
            </div>
            <div className="contact-box text-center">
              {/* Contact Form */}
              <form id={`pricing-form-${selectedPlanTitle}`} className="custom-form" method="POST" action="assets/php/pricingmail.php">
                <div className="row">
                  <div className="col">
                    <div className="form-group row">
                      <label for="inputName" className="col-sm-4 col-form-label">
                        Your Name<sup>*</sup>
                      </label>
                      <div className="col-sm-8">
                        <input type="text" className="form-control" name="name" placeholder="Name" required="required" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label for="inputEmail" className="col-sm-4 col-form-label" >
                        Your Email Address<sup>*</sup>
                      </label>
                      <div className="col-sm-8">
                        <input type="email" className="form-control" name="email" placeholder="Email" required="required"/>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label for="inputPhone" className="col-sm-4 col-form-label">
                        Phone Number<sup>*</sup>
                      </label>
                      <div className="col-sm-8">
                        <div className="d-flex">
                          <select name="countrycode" className="form-control w-50">
                                        <option value="" selected disabled>Country Code</option>
                                        <option dataCountryCode="GB" value="+44">UK (+44)</option>
                                        <option dataCountryCode="US" value="+1">USA (+1)</option>
                                        <option dataCountryCode="NZ" value="+64">New Zealand (+64)</option>
                                        <option dataCountryCode="OM" value="+968">Oman (+968)</option>
                                        <option dataCountryCode="LK" value="+94">Sri Lanka (+94)</option>
                                        <optgroup label="Other countries">
                                            <option dataCountryCode="DZ" value="+213">Algeria (+213)</option>
                                            <option dataCountryCode="AD" value="+376">Andorra (+376)</option>
                                            <option dataCountryCode="AO" value="+244">Angola (+244)</option>
                                            <option dataCountryCode="AI" value="+1264">Anguilla (+1264)</option>
                                            <option dataCountryCode="AG" value="+1268">Antigua &amp; Barbuda(+1268)</option>
                                            <option dataCountryCode="AR" value="+54">Argentina (+54)</option>
                                            <option dataCountryCode="AM" value="+374">Armenia (+374)</option>
                                            <option dataCountryCode="AW" value="+297">Aruba (+297)</option>
                                            <option dataCountryCode="AU" value="+61">Australia (+61)</option>
                                            <option dataCountryCode="AT" value="+43">Austria (+43)</option>
                                            <option dataCountryCode="AZ" value="+994">Azerbaijan (+994)</option>
                                            <option dataCountryCode="BS" value="+1242">Bahamas (+1242)</option>
                                            <option dataCountryCode="BH" value="+973">Bahrain (+973)</option>
                                            <option dataCountryCode="BD" value="+880">Bangladesh (+880)</option>
                                            <option dataCountryCode="BB" value="+1246">Barbados (+1246)</option>
                                            <option dataCountryCode="BY" value="+375">Belarus (+375)</option>
                                            <option dataCountryCode="BE" value="+32">Belgium (+32)</option>
                                            <option dataCountryCode="BZ" value="+501">Belize (+501)</option>
                                            <option dataCountryCode="BJ" value="+229">Benin (+229)</option>
                                            <option dataCountryCode="BM" value="+1441">Bermuda (+1441)</option>
                                            <option dataCountryCode="BT" value="+975">Bhutan (+975)</option>
                                            <option dataCountryCode="BO" value="+591">Bolivia (+591)</option>
                                            <option dataCountryCode="BA" value="+387">Bosnia Herzegovina (+387)</option>
                                            <option dataCountryCode="BW" value="+267">Botswana (+267)</option>
                                            <option dataCountryCode="BR" value="+55">Brazil (+55)</option>
                                            <option dataCountryCode="BN" value="+673">Brunei (+673)</option>
                                            <option dataCountryCode="BG" value="+359">Bulgaria (+359)</option>
                                            <option dataCountryCode="BF" value="+226">Burkina Faso (+226)</option>
                                            <option dataCountryCode="BI" value="+257">Burundi (+257)</option>
                                            <option dataCountryCode="KH" value="+855">Cambodia (+855)</option>
                                            <option dataCountryCode="CM" value="+237">Cameroon (+237)</option>
                                            <option dataCountryCode="CA" value="+1">Canada (+1)</option>
                                            <option dataCountryCode="CV" value="+238">Cape Verde Islands (+238)</option>
                                            <option dataCountryCode="KY" value="+1345">Cayman Islands (+1345)</option>
                                            <option dataCountryCode="CF" value="+236">Central African Republic(+236)</option>
                                            <option dataCountryCode="CL" value="+56">Chile (+56)</option>
                                            <option dataCountryCode="CN" value="+86">China (+86)</option>
                                            <option dataCountryCode="CO" value="+57">Colombia (+57)</option>
                                            <option dataCountryCode="KM" value="+269">Comoros (+269)</option>
                                            <option dataCountryCode="CG" value="+242">Congo (+242)</option>
                                            <option dataCountryCode="CK" value="+682">Cook Islands (+682)</option>
                                            <option dataCountryCode="CR" value="+506">Costa Rica (+506)</option>
                                            <option dataCountryCode="HR" value="+385">Croatia (+385)</option>
                                            <option dataCountryCode="CU" value="+53">Cuba (+53)</option>
                                            <option dataCountryCode="CY" value="+90392">Cyprus North (+90392) </option>
                                            <option dataCountryCode="CY" value="+357">Cyprus South (+357)</option>
                                            <option dataCountryCode="CZ" value="+42">Czech Republic (+42)</option>
                                            <option dataCountryCode="DK" value="+45">Denmark (+45)</option>
                                            <option dataCountryCode="DJ" value="+253">Djibouti (+253)</option>
                                            <option dataCountryCode="DM" value="+1809">Dominica (+1809)</option>
                                            <option dataCountryCode="DO" value="+1809">Dominican Republic(+1809)</option>
                                            <option dataCountryCode="EC" value="+593">Ecuador (+593)</option>
                                            <option dataCountryCode="EG" value="+20">Egypt (+20)</option>
                                            <option dataCountryCode="SV" value="+503">El Salvador (+503)</option>
                                            <option dataCountryCode="GQ" value="+240">Equatorial Guinea (+240)</option>
                                            <option dataCountryCode="ER" value="+291">Eritrea (+291)</option>
                                            <option dataCountryCode="EE" value="+372">Estonia (+372)</option>
                                            <option dataCountryCode="ET" value="+251">Ethiopia (+251)</option>
                                            <option dataCountryCode="FK" value="+500">Falkland Islands (+500)</option>
                                            <option dataCountryCode="FO" value="+298">Faroe Islands (+298)</option>
                                            <option dataCountryCode="FJ" value="+679">Fiji (+679)</option>
                                            <option dataCountryCode="FI" value="+358">Finland (+358)</option>
                                            <option dataCountryCode="FR" value="+33">France (+33)</option>
                                            <option dataCountryCode="GF" value="+594">French Guiana (+594)</option>
                                            <option dataCountryCode="PF" value="+689">French Polynesia (+689)</option>
                                            <option dataCountryCode="GA" value="+241">Gabon (+241)</option>
                                            <option dataCountryCode="GM" value="+220">Gambia (+220)</option>
                                            <option dataCountryCode="GE" value="+7880">Georgia (+7880)</option>
                                            <option dataCountryCode="DE" value="+49">Germany (+49)</option>
                                            <option dataCountryCode="GH" value="+233">Ghana (+233)</option>
                                            <option dataCountryCode="GI" value="+350">Gibraltar (+350)</option>
                                            <option dataCountryCode="GR" value="+30">Greece (+30)</option>
                                            <option dataCountryCode="GL" value="+299">Greenland (+299)</option>
                                            <option dataCountryCode="GD" value="+1473">Grenada (+1473)</option>
                                            <option dataCountryCode="GP" value="+590">Guadeloupe (+590)</option>
                                            <option dataCountryCode="GU" value="+671">Guam (+671)</option>
                                            <option dataCountryCode="GT" value="+502">Guatemala (+502)</option>
                                            <option dataCountryCode="GN" value="+224">Guinea (+224)</option>
                                            <option dataCountryCode="GW" value="+245">Guinea  Bissau (+245) </option>
                                            <option dataCountryCode="GY" value="+592">Guyana (+592)</option>
                                            <option dataCountryCode="HT" value="+509">Haiti (+509)</option>
                                            <option dataCountryCode="HN" value="+504">Honduras (+504)</option>
                                            <option dataCountryCode="HK" value="+852">Hong Kong (+852)</option>
                                            <option dataCountryCode="HU" value="+36">Hungary (+36)</option>
                                            <option dataCountryCode="IS" value="+354">Iceland (+354)</option>
                                            <option dataCountryCode="IN" value="+91">India (+91)</option>
                                            <option dataCountryCode="ID" value="+62">Indonesia (+62)</option>
                                            <option dataCountryCode="IR" value="+98">Iran (+98)</option>
                                            <option dataCountryCode="IQ" value="+964">Iraq (+964)</option>
                                            <option dataCountryCode="IE" value="+353">Ireland (+353)</option>
                                            <option dataCountryCode="IL" value="+972">Israel (+972)</option>
                                            <option dataCountryCode="IT" value="+39">Italy (+39)</option>
                                            <option dataCountryCode="JM" value="+1876">Jamaica (+1876)</option>
                                            <option dataCountryCode="JP" value="+81">Japan (+81)</option>
                                            <option dataCountryCode="JO" value="+962">Jordan (+962)</option>
                                            <option dataCountryCode="KZ" value="+7">Kazakhstan (+7)</option>
                                            <option dataCountryCode="KE" value="+254">Kenya (+254)</option>
                                            <option dataCountryCode="KI" value="+686">Kiribati (+686)</option>
                                            <option dataCountryCode="KP" value="+850">Korea North (+850)</option>
                                            <option dataCountryCode="KR" value="+82">Korea South (+82)</option>
                                            <option dataCountryCode="KW" value="+965">Kuwait (+965)</option>
                                            <option dataCountryCode="KG" value="+996">Kyrgyzstan (+996)</option>
                                            <option dataCountryCode="LA" value="+856">Laos (+856)</option>
                                            <option dataCountryCode="LV" value="+371">Latvia (+371)</option>
                                            <option dataCountryCode="LB" value="+961">Lebanon (+961)</option>
                                            <option dataCountryCode="LS" value="+266">Lesotho (+266)</option>
                                            <option dataCountryCode="LR" value="+231">Liberia (+231)</option>
                                            <option dataCountryCode="LY" value="+218">Libya (+218)</option>
                                            <option dataCountryCode="LI" value="+417">Liechtenstein (+417)</option>
                                            <option dataCountryCode="LT" value="+370">Lithuania (+370)</option>
                                            <option dataCountryCode="LU" value="+352">Luxembourg (+352)</option>
                                            <option dataCountryCode="MO" value="+853">Macao (+853)</option>
                                            <option dataCountryCode="MK" value="+389">Macedonia (+389)</option>
                                            <option dataCountryCode="MG" value="+261">Madagascar (+261)</option>
                                            <option dataCountryCode="MW" value="+265">Malawi (+265)</option>
                                            <option dataCountryCode="MY" value="+60">Malaysia (+60)</option>
                                            <option dataCountryCode="MV" value="+960">Maldives (+960)</option>
                                            <option dataCountryCode="ML" value="+223">Mali (+223)</option>
                                            <option dataCountryCode="MT" value="+356">Malta (+356)</option>
                                            <option dataCountryCode="MH" value="+692">Marshall Islands (+692)</option>
                                            <option dataCountryCode="MQ" value="+596">Martinique (+596)</option>
                                            <option dataCountryCode="MR" value="+222">Mauritania (+222)</option>
                                            <option dataCountryCode="YT" value="+269">Mayotte (+269)</option>
                                            <option dataCountryCode="MX" value="+52">Mexico (+52)</option>
                                            <option dataCountryCode="FM" value="+691">Micronesia (+691)</option>
                                            <option dataCountryCode="MD" value="+373">Moldova (+373)</option>
                                            <option dataCountryCode="MC" value="+377">Monaco (+377)</option>
                                            <option dataCountryCode="MN" value="+976">Mongolia (+976)</option>
                                            <option dataCountryCode="MS" value="+1664">Montserrat (+1664)</option>
                                            <option dataCountryCode="MA" value="+212">Morocco (+212)</option>
                                            <option dataCountryCode="MZ" value="+258">Mozambique (+258)</option>
                                            <option dataCountryCode="MN" value="+95">Myanmar (+95)</option>
                                            <option dataCountryCode="NA" value="+264">Namibia (+264)</option>
                                            <option dataCountryCode="NR" value="+674">Nauru (+674)</option>
                                            <option dataCountryCode="NP" value="+977">Nepal (+977)</option>
                                            <option dataCountryCode="NL" value="+31">Netherlands (+31)</option>
                                            <option dataCountryCode="NC" value="+687">New Caledonia (+687)</option>
                                            <option dataCountryCode="NI" value="+505">Nicaragua (+505)</option>
                                            <option dataCountryCode="NE" value="+227">Niger (+227)</option>
                                            <option dataCountryCode="NG" value="+234">Nigeria (+234)</option>
                                            <option dataCountryCode="NU" value="+683">Niue (+683)</option>
                                            <option dataCountryCode="NF" value="+672">Norfolk Islands (+672)</option>
                                            <option dataCountryCode="NP" value="+670">Northern Marianas (+670)</option>
                                            <option dataCountryCode="NO" value="+47">Norway (+47)</option>
                                            <option dataCountryCode="PW" value="+680">Palau (+680)</option>
                                            <option dataCountryCode="PA" value="+507">Panama (+507)</option>
                                            <option dataCountryCode="PG" value="+675">Papua New Guinea (+675)</option>
                                            <option dataCountryCode="PY" value="+595">Paraguay (+595)</option>
                                            <option dataCountryCode="PE" value="+51">Peru (+51)</option>
                                            <option dataCountryCode="PH" value="+63">Philippines (+63)</option>
                                            <option dataCountryCode="PL" value="+48">Poland (+48)</option>
                                            <option dataCountryCode="PT" value="+351">Portugal (+351)</option>
                                            <option dataCountryCode="PR" value="+1787">Puerto Rico (+1787)</option>
                                            <option dataCountryCode="QA" value="+974">Qatar (+974)</option>
                                            <option dataCountryCode="RE" value="+262">Reunion (+262)</option>
                                            <option dataCountryCode="RO" value="+40">Romania (+40)</option>
                                            <option dataCountryCode="RU" value="+7">Russia (+7)</option>
                                            <option dataCountryCode="RW" value="+250">Rwanda (+250)</option>
                                            <option dataCountryCode="SM" value="+378">San Marino (+378)</option>
                                            <option dataCountryCode="ST" value="+239">Sao Tome &amp; Principe(+239)</option>
                                            <option dataCountryCode="SA" value="+966">Saudi Arabia (+966)</option>
                                            <option dataCountryCode="SN" value="+221">Senegal (+221)</option>
                                            <option dataCountryCode="CS" value="+381">Serbia (+381)</option>
                                            <option dataCountryCode="SC" value="+248">Seychelles (+248)</option>
                                            <option dataCountryCode="SL" value="+232">Sierra Leone (+232)</option>
                                            <option dataCountryCode="SG" value="+65">Singapore (+65)</option>
                                            <option dataCountryCode="SK" value="+421">Slovak Republic (+421)</option>
                                            <option dataCountryCode="SI" value="+386">Slovenia (+386)</option>
                                            <option dataCountryCode="SB" value="+677">Solomon Islands (+677)</option>
                                            <option dataCountryCode="SO" value="+252">Somalia (+252)</option>
                                            <option dataCountryCode="ZA" value="+27">South Africa (+27)</option>
                                            <option dataCountryCode="ES" value="+34">Spain (+34)</option>
                                            <option dataCountryCode="SH" value="+290">St. Helena (+290)</option>
                                            <option dataCountryCode="KN" value="+1869">St. Kitts (+1869)</option>
                                            <option dataCountryCode="SC" value="+1758">St. Lucia (+1758)</option>
                                            <option dataCountryCode="SD" value="+249">Sudan (+249)</option>
                                            <option dataCountryCode="SR" value="+597">Suriname (+597)</option>
                                            <option dataCountryCode="SZ" value="+268">Swaziland (+268)</option>
                                            <option dataCountryCode="SE" value="+46">Sweden (+46)</option>
                                            <option dataCountryCode="CH" value="+41">Switzerland (+41)</option>
                                            <option dataCountryCode="SI" value="+963">Syria (+963)</option>
                                            <option dataCountryCode="TW" value="+886">Taiwan (+886)</option>
                                            <option dataCountryCode="TJ" value="+7">Tajikstan (+7)</option>
                                            <option dataCountryCode="TH" value="+66">Thailand (+66)</option>
                                            <option dataCountryCode="TG" value="+228">Togo (+228)</option>
                                            <option dataCountryCode="TO" value="+676">Tonga (+676)</option>
                                            <option dataCountryCode="TT" value="+1868">Trinidad &amp; Tobago(+1868)</option>
                                            <option dataCountryCode="TN" value="+216">Tunisia (+216)</option>
                                            <option dataCountryCode="TR" value="+90">Turkey (+90)</option>
                                            <option dataCountryCode="TM" value="+7">Turkmenistan (+7)</option>
                                            <option dataCountryCode="TM" value="+993">Turkmenistan (+993)</option>
                                            <option dataCountryCode="TC" value="+1649">Turks &amp; Caicos Islands (+1649)</option>
                                            <option dataCountryCode="TV" value="+688">Tuvalu (+688)</option>
                                            <option dataCountryCode="UG" value="+256">Uganda (+256)</option>
                                            <option dataCountryCode="GB" value="+44">UK (+44)</option>
                                            <option dataCountryCode="UA" value="+380">Ukraine (+380)</option>
                                            <option dataCountryCode="AE" value="+971">United Arab Emirates(+971)</option>
                                            <option dataCountryCode="UY" value="+598">Uruguay (+598)</option>
                                            <option dataCountryCode="US" value="+1">USA (+1)</option>
                                            <option dataCountryCode="UZ" value="+7">Uzbekistan (+7)</option>
                                            <option dataCountryCode="VU" value="+678">Vanuatu (+678)</option>
                                            <option dataCountryCode="VA" value="+379">Vatican City (+379)</option>
                                            <option dataCountryCode="VE" value="+58">Venezuela (+58)</option>
                                            <option dataCountryCode="VN" value="+84">Vietnam (+84)</option>
                                            <option dataCountryCode="VG" value="+84">Virgin Islands  British (+1284)</option>
                                            <option dataCountryCode="VI" value="+84">Virgin Islands  US (+1340)</option>
                                            <option dataCountryCode="WF" value="+681">Wallis &amp; Futuna (+681)</option>
                                            <option dataCountryCode="YE" value="+969">Yemen (North)(+969)</option>
                                            <option dataCountryCode="YE" value="+967">Yemen (South)(+967)</option>
                                            <option dataCountryCode="ZM" value="+260">Zambia (+260)</option>
                                            <option dataCountryCode="ZW" value="+263">Zimbabwe (+263)</option>
                                        </optgroup>
                                      </select>
                            <input type="text" className="form-control" name="phone" placeholder="Phone" required="required"/>
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label htmlFor="inputPackage" className="col-sm-4 col-form-label">
                        Select Your Package <sup>*</sup>
                      </label>
                      <div className="col-sm-8">
                        <select id="inputPackage" name="package" className="form-control" required="required"
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
                      <label for="inputRequ" className="col-sm-4 col-form-label">
                        Describe your Requirement <sup>*</sup>
                      </label>
                      <div className="col-sm-8">
                        <textarea className="form-control" name="message" placeholder="Message" rows="3" required="required" defaultValue={""}/>
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
  );
}

export default ModalPricing;
