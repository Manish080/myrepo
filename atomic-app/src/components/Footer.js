import React, { Component } from "react";
import Footercontent from "../pages/children/Footercontent";
import Headings from "../pages/children/Headings";
import Para from "../pages/children/Para";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer class="footer-content">
          <div class="layer footer">
            <div class="container-fluid">
              <div class="row footer-top-inner-w3ls">
                <div class="col-lg-4 col-md-6 footer-top ">
                  <h2>
                    <h1 style={{color:"yellow"}}>Men spa</h1>
                  </h2>
                  <Footercontent className="my-3"/>
                </div>
                <div class="col-lg-4 col-md-6 mt-md-0 mt-5">
                  <div class="footer-w3pvt">
                    <Headings title="Opening Hours" className="mb-3 w3pvt_title"/>
                    <hr />
                    <ul class="list-info-w3pvt last-w3ls-contact mt-lg-4">
                      <li>
                        <Para title="Monday - Friday 08.00 am - 10.00 pm"/>
                      </li>
                      <li class="my-2">
                        <Para title=" Saturday 08.00 am - 10.00 pm"/>
                      </li>
                      <li class="my-2">
                      <Para title=" Sunday 08.00 am - 10.00 pm"/>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 mt-lg-0 mt-5">
                  <div class="footer-w3pvt">
                  <Headings title="Contact Us" className="mb-3 w3pvt_title"/>
                    <hr />
                    <div class="last-w3ls-contact">
                      <Para title="info@example.com"/>
                    </div>
                    <div class="last-w3ls-contact my-2">
                    <Para title="96789735353"/>
                    </div>
                    <div class="last-w3ls-contact">
                    <Para title="william street"/>
                    <Para title="sydney, ustralia 049436."/>
                    </div>
                  </div>
                </div>
              </div>
              <Para title="© 2021 Men spa. All Rights Reserved | Design by Manish Gour" class="copy-right-grids text-li text-center my-sm-4 my-4"/>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
export default Footer;
