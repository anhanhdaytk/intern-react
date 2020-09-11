import React, { Component} from 'react';
import SimpleSlider from '../layout/SSliderr';
import Signup from '../Login/Signup';
import {
    PopupboxManager,
    PopupboxContainer
  } from 'react-popupbox';
  import "react-popupbox/dist/react-popupbox.css"
class Index extends Component{
    constructor(props){
        super(props)
        this.openPopupbox = this.openPopupbox.bind(this)
    }
    openPopupbox() {
        const content = <Signup />
        PopupboxManager.open({
          content,
          config: {
            titleBar: {
              enable: true,
              text: 'SignUp',
              closeButton: false
            },
            fadeIn: true,
            fadeInSpeed: 500
          }
        })
      }
    render(){
        return(
            <>  
                <div className="head">
                    <div className="container">
                        <nav className="navbar navbar-expand-md bg-white navbar-light">
                            {/* <!-- Brand --> */}
                            <a className="navbar-brand" href="#">MEDFIX</a>

                            {/* <!-- Toggler/collapsibe Button --> */}
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            {/* <!-- Navbar links --> */}
                            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                                <ul className="nav ml-auto">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">How it Works</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Hospital</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">For Speccialists</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Services</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Blog</a>
                                    </li>
                                    <li className="nav-item">
                                        <button type="button" className="btn btn-primary">Get Started</button>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Sign In</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>

                        <div className="banner"> 
                            <div className="container">
                                <div className="row">                                   
                                    <h1 className="col-sm-12 col-md-6 col-lg-6 text">Bringing You Verified,<br/> Accredited Specialists</h1> 
                                    <img className="col-sm-12 col-md-6 col-lg-6 image" src="image/panner.jpeg" alt="ảnh"/>                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                

                <div className="Our">
                    <div className="Our1">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-sm-12 col-md-3 col-lg-3">
                                    <h1 className="Ourleft align-self-center">Our Medfix Guarantee</h1>
                                </div>
                                <div className="col-sm-12 col-md-9 col-lg-9">
                                    <h2 className="Ourright">Interacting with a Medfix specialist means receiving care from a fully vetted<br/> 
                                        headlth professional. Our specialist undergo an in-depth verification<br/>
                                        Procedure to set-up their services with us
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Our2">
                        <div className="Our2-1">
                            <h1>Approving Our Practitioners</h1>
                            <h2>Medfix implements a multi-step credentialing process to authenticatethe validity of our specialists.</h2>
                        </div>
                        <div className="Our2-2">
                            <div className="container-fluid">
                                <div className="row">
                                    <img className="col-sm-12 col-ms-6 col-lg-6" src="image/know.jpg" alt="" />
                                    <ul className="col-sm-12 col-ms-6 col-lg-6">
                                        <li className="active"><h3>We ensure to obtain, assess and verify the indentity and<br/>background of our practitionners.</h3></li>
                                        <li><h3>Our rigorous vetting and verification include documenting<br/>specialist education, training and licensure.</h3></li>
                                        <li><h3>We'll thoroughly review a specialist's information and qualifications <br/>to confirm requirements and prerequisites are met.</h3></li>
                                    </ul>
                                </div>
                            </div>   
                        </div>
                    </div>
                </div>

                <div className="address">
                    <h1>Address your health needs with a peace of mind</h1>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-3">
                                <img src="image/icon1.png" alt=""/><br/>
                                <h3>Targeting Speccialists</h3><br/>
                                <p>Medfix strives to approach and onboard only medical practitioners that are specialist in their field</p>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-3">
                                <img src="image/icon2.png" alt=""/><br/>
                                <h3>Targeting Speccialists</h3><br/>
                                <p>Medfix strives to approach and onboard only medical practitioners that are specialist in their field</p>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-3">
                                <img src="image/icon3.png" alt=""/><br/>
                                <h3>Targeting Speccialists</h3><br/>
                                <p>Medfix strives to approach and onboard only medical practitioners that are specialist in their field</p>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-3">
                                <img src="image/icon4.png" alt=""/><br/>
                                <h3>Targeting Speccialists</h3><br/>
                                <p>Medfix strives to approach and onboard only medical practitioners that are specialist in their field</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profile container-fluid">
                    {/* <img src="image/background.jpg"/> */}
                    <div className="profile1 container">
                        <div className="autoplay">
                            <SimpleSlider />
                        </div> 
                    </div>     
                </div>
                <div className="ready container-fluid">
                    <div className="ready1 container">
                        <div className="row text-center">
                            <div className="col-sm-12 col-md-8 col-lg-8">
                                <h1>Ready to speak with a trusted Specialist?</h1><br/>                       
                                <h2>Begin your Healthcare journey Today with a Verified Medical Professional</h2>
                            </div>
                            <div className="col-sm-12 col-md-4 col-lg-4 button">
                                <button className="btn btn-primary" onClick={this.openPopupbox} type="button" >Register a Free Account</button>
                                <PopupboxContainer />
                            </div>
                        </div>
                    </div>    
                </div>
            </>
        );
    }
}
export default Index;