import React, { Component } from "react";
import { Link } from "react-router-dom";
import Headings from "./children/Headings";
import Images from "./children/Images";

export default class Gallary extends Component {
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
              Gallery
            </li>
          </ol>
        </div>
        <section class="gallery py-5" id="gallery">
          <div class="container py-md-5">
            <Headings title="Our Gallary" />
            <div class="gallery-content">
              <div class="row">
                <div class="col-md-4 col-sm-6 gal-img">
                  <Images href="#gal1" src="assets/images/g1.jpg"/>
                </div>
                <div class="col-md-4 col-sm-6 gal-img">
                  <Images href="#gal2" src="assets/images/g2.jpg" />
                </div>
                <div class="col-md-4 col-sm-6 gal-img">
                  <Images  href="#gal3" src="assets/images/g3.jpg" />
                </div>
                <div class="col-md-4 col-sm-6 gal-img">
                  <Images  href="#gal4" src="assets/images/g4.jpg" />
                </div>
                <div class="col-md-4 col-sm-6 gal-img">
                  <Images  href="#gal5" src="assets/images/g5.jpg" />
                </div>
                <div class="col-md-4 col-sm-6 gal-img">
                  <Images  href="#gal6" src="assets/images/g6.jpg"/>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
