import React, { Component } from 'react';
class Signup extends Component{
    render(){
        return(
            <div className="col-sm-12">
                {/* <div className="signup-form">sign up form */}
                {/* <Formerrors formErrors ={this.state.formErrors}/> */}
                <form action="/action_page.php">
                    <div class="form-group">
                        <label for="email">Email address:</label>
                        <input type="email" class="form-control" placeholder="Enter email" id="email"/>
                    </div>
                    <div class="form-group">
                        <label for="pwd">Password:</label>
                        <input type="password" class="form-control" placeholder="Enter password" id="pwd"/>
                    </div>
                    <div class="form-group form-check">
                        <label class="form-check-label">
                        <input class="form-check-input" type="checkbox" /> Remember
                        </label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                
                {/* </div>/sign up form */}
            </div>
        );
    }
}
export default Signup;
