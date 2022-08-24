import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const ProductDetails = ({ post }) => {
    const {title, image, price, text, category} = post;

    let tab1 = "Description",
        tab2 = "Reviews (0)";
    const tabStyle = 'nav nav-tabs';
    const tabContentStyle = 'nav-details';

    return (
        <React.Fragment>
            <div className="row">
                <div className="col-md-6 col-sm-12 sm-mb-30">
                    <div className="single-product-image">
                        <div className="images-single">
                            <img src={'/' + image} alt="blog image" />
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="single-price-info pl-30 sm-pl-0">
                        <h4 className="product-title">{title}</h4>
                        <span className="single-price">{price}</span>
                        <p className="some-text">{text}</p>
                        <form>
                            <input type="number" className="input-text" />
                            <button className="add-btn ml-10" type="submit">Add To cart</button>
                        </form>
                        <p className="category"><span>Category:</span><a href="#"> {category}</a></p>
                    </div>
                </div>
            </div>


            <div className="tab-area">
                <Tabs>
                    <TabList className={tabStyle}>
                        <Tab><button>{tab1}</button></Tab>
                        <Tab><button>{tab2}</button></Tab>
                    </TabList>

                    <TabPanel>
                        <div className="tab-desc">
                            <p className="dsc-p">{text}</p>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="tab-review">
                            <div className="reviews-grid">
                                <div className="top-area">
                                    <p>There are no reviews yet.</p>
                                    <h6 className="mb-0">Be the first to review “{title}”</h6>
                                </div>

                                <form className="comment-form" id="commentform">
                                    <p className="comment-notes">Your email address will not be published. Required fields are marked *</p>

                                    <div className="placeholder-cntrl">
                                        <label>Name *</label>
                                        <input type="text" name="name" size="30" required="" />
                                    </div>
                                    <div className="placeholder-cntrl">
                                        <label>Email *</label>
                                        <input type="Email" name="email" size="30" required="" />
                                    </div>
                                    <div className="ratings">Your rating
                                        <ul>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star-o"></i></li>
                                        </ul>
                                    </div>
                                    <div className="placeholder-cntrl">
                                        <label>Your review *</label>
                                        <textarea required=""></textarea>
                                    </div>
                                    <div className="btn-part">
                                        <button className="add-btn" type="submit">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>

        </React.Fragment>

    )
}

export default ProductDetails