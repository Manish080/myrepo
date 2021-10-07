import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "./children/Button";
import Contactcontent from "./children/Contactcontent";
import Input from "./children/Input";
import Label from "./children/Label";
import Textarea from "./children/Textarea";

export default class Contact extends Component {
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
              Contact Us
            </li>
          </ol>
        </div>
        <section class="content-info py-5">
          <div class="container py-md-5">
            <Contactcontent />
            <div class="contact-w3pvt-form mt-5">
              <form  class="w3layouts-contact-fm">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="form-group">
                      <Label name="First name"/>
                      <Input/>
                    </div>
                    <div class="form-group">
                      <Label name="Last name" />
                      <Input/>
                    </div>
                    <div class="form-group">
                      <Label name="Email" />
                      <Input/>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group">
                      <Label name="Message" />
                      <Textarea/>
                    </div>
                  </div>
                  <div class="form-group mx-auto mt-3">
                    <Button />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
