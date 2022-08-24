import React, { Component } from 'react';

class AccountMain extends Component {
    render() {
        return (
            <div className="rs-my-account pt-110 pb-120 md-pt-60 md-pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 md-mb-50">
                            <h2 className="title pb-30 md-pb-14">Login</h2>
                            <div className="rs-login">
                                <form id="login" className="form-group mb-30" action="#">
                                    <div className="form-part">
                                        <div className="wraper mb-10">
                                            <label>Username or email address<span>*</span></label>
                                            <input id="fname" name="name" className="form-control-mod" type="text" required />
                                        </div>
                                        <div className="wraper mb-30">
                                            <label>Password<span>*</span></label>
                                            <input id="fpassword" name="password" className="form-control-mod" type="password" required />
                                        </div>
                                    </div>
                                    <div className="btns-part">
                                        <button className="add-btn" type="submit">Log In</button>
                                        <label>
                                            <input className="woocommerce-form__input woocommerce-form__input-checkbox" name="rememberme" type="checkbox" id="rememberme" value="forever" required />
                                            <span>Remember me</span>
                                        </label>
                                    </div>
                                </form>
                                <div className="last-password">
                                    <a href="#">Lost your password?</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h2 className="title pb-30 md-pb-14">Register</h2>
                            <div className="rs-login">
                                <form id="register" action="#">
                                    <div className="form-group">
                                        <div className="form-part">
                                            <label>Email address<span>*</span></label>
                                            <input id="gemail" name="email" className="form-control-mod" type="email" required />
                                        </div>
                                    </div>
                                    <p>A password will be sent to your email address.</p>
                                    <p>
                                        Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <a href="#">privacy policy.</a>
                                    </p>
                                    <button className="add-btn" type="submit">Register</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AccountMain;