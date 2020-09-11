import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class SSliderr extends Component {
    constructor(props) {
      super(props);
      this.next = this.next.bind(this);
    }
    next() {
      this.slider.slickNext();
    }
    render() {
      const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
      return (
          console.log(this.ref)
        <div>
          <Slider ref={c => (this.slider = c)} {...settings}>
            <div className="slider">
              <h1>Verification Badge</h1>
              <p>
                  Firt-time speccialists have the option of registering under limited free trial membership. When searching for<br/>
                  the right speccialists to address your needs, look for the <b>verified badge</b> on their profile listing. Verified badges<br/>
                  indicate the specialist has undergone and been approved by our vetting agency.
              </p>
            </div>
            <div className="slider">
              <h1>Speccialists Profile Listing</h1>
              <p>
                  Patients benefit from our global listing of verified, professional speccialist. Our online specialist profiles include<br/>
                  important information to help you find the right practitioner for you. Browse throught different specialties, and view<br/>
                  their biographies, clinic addresses, available hours, reviews and more. Robust verification.
              </p>
            </div>
            <div className="slider">
              <h1>Robust Verification</h1>
              <p>
                  Our vitual health platform is based on exhaustive measures of safety and authenticity of care. Our unique<br/>
                  approach maintains up-to-date accuracy of details by verifying each time specialist infomation is updated.<br/>
                  This rigorous multi-step verification also tracks expiry dates of medical licensure.
              </p>
            </div>
          </Slider>
          <div>
            {/* <i onClick={this.next} class="fa fa-arrow-right" aria-hidden="true"></i> */}
            <a onClick={this.next}><img src='image/right.png' alt='icon'/></a>
          </div>
        </div>
      );
    }
  }
