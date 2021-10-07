import React, { Component } from "react";
import { Link } from "react-router-dom";
import Para from "./children/Para";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div class="banner_w3lspvt" id="home">
          <div class="csslider infinity" id="slider1">
            <ul class="banner_slide_bg">
              <li>
                <div class="slider-info bg1">
                  <div class="bs-slider-overlay">
                    <div class="banner-text">
                      <div class="container">
                        <h2 class="movetxt agile-title text-capitalize">
                          We Create and Renovate Hair Style Trends
                        </h2>
                        <Para
                          title="Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. It has survived not only five
                          centuries."
                        />
                        <Link to="/footer" class="btn">
                          {" "}
                          Get appointment{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
