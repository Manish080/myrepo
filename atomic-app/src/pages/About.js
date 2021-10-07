import React, { Component } from "react";
import { Link } from "react-router-dom";
import Aboutimages from "./children/Aboutimages";
import Headings from "./children/Headings";
import Para from './children/Para'

export default class About extends Component {
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
              About Us
            </li>
          </ol>
        </div>
        <section class="banner-bottom py-5" id="exp">
          <div class="container py-md-5">
            <Headings title="ABOUT US" />
            <div class="row mid-grids mt-lg-5 mt-3">
              <div class="col-md-5 content-w3pvt-img">
                <Aboutimages src="assets/images/ab1.jpg"/>
              </div>
              <div class="col-md-7 content-left-bottom entry-w3ls-info text-left mt-3">
                <h5 class="mt-1">CLASSIC HAIR STYLING </h5>
                <h4>
                  real men go to
                  <br />
                  real Men spas
                </h4>
                <Para title="Integer pulvinar leo id viverra feugiat.Pellentesque libero
                  justo, semper at tempus vel, ultrices in sed ligula. Nulla
                  uter sollicitudin velit. Sed porttitor orci vel fermentum elit
                  maximus. Curabitur ut turpis massa in condimentum libero.
                  Pellentesque maximus Pellentesque libero justo Nulla uter
                  sollicitudin velit. Sed porttitor orci vel ferm semper at vel,
                  ultrices in ligula semper at vel.Curabitur ut turpis massa in
                  condimentum libero." class="mt-2 text-left"/>
              </div>
            </div>
          </div>
        </section>
        <section class="banner-bottom  py-5">
          <div class="container py-md-5">
            <Headings title= "OUR TEAM"/>
            <div class="row mt-lg-5 mt-4">
              <div class="col-md-4 team-gd text-center">
                <div class="team-img mb-4">
                <Aboutimages src="assets/images/t1.jpg"/>
                </div>
                <div class="team-info">
                <Headings title="JAMES Men spa" className="mt-md-4 mt-3"/>
                <Para title=" Lorem Ipsum has been the industry's standard since the
                    1500s."/>
                </div>
              </div>

              <div class="col-md-4 team-gd second text-center my-md-0 my-5">
                <div class="team-img mb-4">
                <Aboutimages src="assets/images/t2.jpg"/>
                </div>
                <div class="team-info">
                <Headings title="DEEN MUSTACHIO" className="mt-md-4 mt-3"/>
                  <Para title=" Lorem Ipsum has been the industry's standard since the
                    1500s."/>
                </div>
              </div>
              <div class="col-md-4 team-gd text-center">
                <div class="team-img mb-4">
                <Aboutimages src="assets/images/t3.jpg"/>
                </div>
                <div class="team-info">
                  <Headings title="CLINT HAIRISTA" className="mt-md-4 mt-3"/>
                  <Para title=" Lorem Ipsum has been the industry's standard since the
                    1500s."/>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
