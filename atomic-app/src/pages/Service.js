import React, { Component } from "react";
import { Link } from "react-router-dom";
import Headings from "./children/Headings";
import Serviceimages from "./children/Serviceimages";
import Servicetitle from "./children/Servicetitle";

export default class Service extends Component {
  render() {
    return (
      <div>
        <section class="inner-page-banner" id="home"></section>

        <div class="breadcrumb-agile">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Services
            </li>
          </ol>
        </div>
        <section class="what-we-do py-5">
          <div class="container py-md-5">
            <Headings title="Our Styling" />
            <div class="row what-we-do-grid">
              <div class="col-lg-3 col-md-6 pr-0 pl-md-3 pl-0">
                <Serviceimages src="assets/images/sp1.jpg" />
              </div>
              <div class="col-lg-3 col-md-6 bg-grid-clr">
                <Servicetitle title="HAIRCUT" />
                <p>
                  Sed ut perspiciatis undert sed omnis natus error .
                </p>
              </div>
              <div class="col-lg-3 col-md-6 pr-0 pl-md-3 pl-0 mt-lg-0 mt-4">
                <Serviceimages src="assets/images/sp2.jpg" />
              </div>
              <div class="col-lg-3 col-md-6 bg-grid-clr mt-lg-0 mt-md-4">
                <Servicetitle title="SHAVES" />
                <p>
                  Sed ut perspiciatis undert sed omnis natus error .
                </p>
              </div>

              <div class="col-lg-3 col-md-6 pr-0 pl-md-3 pl-0 mt-lg-5 mt-4">
                <Serviceimages src="assets/images/sp3.jpg" />
              </div>
              <div class="col-lg-3 col-md-6 bg-grid-clr mt-lg-5 mt-md-4">
                <Servicetitle title="BEARD" />
                <p>
                  Sed ut perspiciatis undert sed omnis natus error .
                </p>
              </div>
              <div class="col-lg-3 col-md-6 pr-0 pl-md-3 pl-0 mt-lg-5 mt-4">
                <Serviceimages src="assets/images/sp4.jpg" />
              </div>
              <div class="col-lg-3 col-md-6 bg-grid-clr mt-lg-5 mt-md-4">
                <Servicetitle title="MUSTACHE TRIM" />
                <p>
                  Sed ut perspiciatis undert sed omnis natus error .
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
