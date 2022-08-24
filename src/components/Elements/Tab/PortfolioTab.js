import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const PortfolioTab = () => {

    let tab1 = "All",
        tab2 = "Mobile App",
        tab3 = "Web Design",
        tab4 = "Product Design"
    const tabStyle = 'tab-menu text-center';

    return (
        <div className="tab-part">
            <Tabs>
                <TabList className={tabStyle}>
                    <Tab><button>{tab1}</button></Tab>
                    <Tab><button>{tab2}</button></Tab>
                    <Tab><button>{tab3}</button></Tab>
                    <Tab><button>{tab4}</button></Tab>
                </TabList>

                <TabPanel>
                    <div id="portfolio-grid" className="row">
                        <div className="col-lg-4 col-md-6 md-mb-30">
                            <div className="project-item mb-30">
                                <div className="project-img">
                                    <img
                                        src="assets/img/project/style5/1.jpg"
                                        alt="images"
                                    />
                                </div>
                                <div className="project-content">
                                    <div className="project-inner">
                                        <h3 className="title"><a href="#">Mobile App</a></h3>
                                        <span className="category"><a href="#">Product Engineering</a></span>
                                    </div>
                                </div>
                            </div>
                            <div className="project-item">
                                <div className="project-img">
                                    <img
                                        src="assets/img/project/style5/4.jpg"
                                        alt="images"
                                    />
                                </div>
                                <div className="project-content">
                                    <div className="project-inner">
                                        <h3 className="title"><a href="#">Web Design</a></h3>
                                        <span className="category"><a href="#">Product Engineering</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 sm-mb-30">
                            <div className="project-item mb-30">
                                <div className="project-img">
                                    <img
                                        src="assets/img/project/style5/2.jpg"
                                        alt="images"
                                    />
                                </div>
                                <div className="project-content">
                                    <div className="project-inner">
                                        <h3 className="title"><a href="#">Web Design</a></h3>
                                        <span className="category"><a href="#">Product Engineering</a></span>
                                    </div>
                                </div>
                            </div>
                            <div className="project-item">
                                <div className="project-img">
                                    <img
                                        src="assets/img/project/style5/5.jpg"
                                        alt="images"
                                    />
                                </div>
                                <div className="project-content">
                                    <div className="project-inner">
                                        <h3 className="title"><a href="#">Mobile App</a></h3>
                                        <span className="category"><a href="#">Product Engineering</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="project-item mb-30">
                                <div className="project-img">
                                    <img
                                        src="assets/img/project/style5/3.jpg"
                                        alt="images"
                                    />
                                </div>
                                <div className="project-content">
                                    <div className="project-inner">
                                        <h3 className="title"><a href="#">Product Design</a></h3>
                                        <span className="category"><a href="#">Product Engineering</a></span>
                                    </div>
                                </div>
                            </div>
                            <div className="project-item">
                                <div className="project-img">
                                    <img
                                        src="assets/img/project/style5/6.jpg"
                                        alt="images"
                                    />
                                </div>
                                <div className="project-content">
                                    <div className="project-inner">
                                        <h3 className="title"><a href="#">Product Design</a></h3>
                                        <span className="category"><a href="#">Product Engineering</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div id="portfolio-grid" className="row">
                        <div className="col-lg-4 col-md-6 md-mb-30">
                            <div className="project-item mb-30">
                                <div className="project-img">
                                    <img
                                        src="assets/img/project/style5/1.jpg"
                                        alt="images"
                                    />
                                </div>
                                <div className="project-content">
                                    <div className="project-inner">
                                        <h3 className="title"><a href="#">Mobile App</a></h3>
                                        <span className="category"><a href="#">Product Engineering</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 sm-mb-30">
                            <div className="project-item mb-30">
                                <div className="project-img">
                                    <img
                                        src="assets/img/project/style5/2.jpg"
                                        alt="images"
                                    />
                                </div>
                                <div className="project-content">
                                    <div className="project-inner">
                                        <h3 className="title"><a href="#">Mobile App</a></h3>
                                        <span className="category"><a href="#">Product Engineering</a></span>
                                    </div>
                                </div>
                            </div>
                            <div className="project-item">
                                <div className="project-img">
                                    <img
                                        src="assets/img/project/style5/6.jpg"
                                        alt="images"
                                    />
                                </div>
                                <div className="project-content">
                                    <div className="project-inner">
                                        <h3 className="title"><a href="#">Mobile App</a></h3>
                                        <span className="category"><a href="#">Product Engineering</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="project-item">
                                <div className="project-img">
                                    <img
                                        src="assets/img/project/style5/5.jpg"
                                        alt="images"
                                    />
                                </div>
                                <div className="project-content">
                                    <div className="project-inner">
                                        <h3 className="title"><a href="#">Mobile App</a></h3>
                                        <span className="category"><a href="#">Product Engineering</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div id="portfolio-grid" className="row">
                        <div className="col-lg-4 col-md-6 md-mb-30">
                            <div className="project-item">
                                <div className="project-img">
                                    <img
                                        src="assets/img/project/style5/3.jpg"
                                        alt="images"
                                    />
                                </div>
                                <div className="project-content">
                                    <div className="project-inner">
                                        <h3 className="title"><a href="#">Product Design</a></h3>
                                        <span className="category"><a href="#">Product Engineering</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 sm-mb-30">
                            <div className="project-item">
                                <div className="project-img">
                                    <img
                                        src="assets/img/project/style5/5.jpg"
                                        alt="images"
                                    />
                                </div>
                                <div className="project-content">
                                    <div className="project-inner">
                                        <h3 className="title"><a href="#">Mobile App</a></h3>
                                        <span className="category"><a href="#">Product Engineering</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="project-item mb-30">
                                <div className="project-img">
                                    <img
                                        src="assets/img/project/style5/4.jpg"
                                        alt="images"
                                    />
                                </div>
                                <div className="project-content">
                                    <div className="project-inner">
                                        <h3 className="title"><a href="#">Web Design</a></h3>
                                        <span className="category"><a href="#">Product Engineering</a></span>
                                    </div>
                                </div>
                            </div>
                            <div className="project-item">
                                <div className="project-img">
                                    <img
                                        src="assets/img/project/style5/6.jpg"
                                        alt="images"
                                    />
                                </div>
                                <div className="project-content">
                                    <div className="project-inner">
                                        <h3 className="title"><a href="#">Product Design</a></h3>
                                        <span className="category"><a href="#">Product Engineering</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div id="portfolio-grid" className="row">
                        <div className="col-lg-4 col-md-6 md-mb-30">
                            <div className="project-item mb-30">
                                <div className="project-img">
                                    <img
                                        src="assets/img/project/style5/2.jpg"
                                        alt="images"
                                    />
                                </div>
                                <div className="project-content">
                                    <div className="project-inner">
                                        <h3 className="title"><a href="#">Product Design</a></h3>
                                        <span className="category"><a href="#">Product Engineering</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 sm-mb-30">
                            <div className="project-item mb-30">
                                <div className="project-img">
                                    <img
                                        src="assets/img/project/style5/3.jpg"
                                        alt="images"
                                    />
                                </div>
                                <div className="project-content">
                                    <div className="project-inner">
                                        <h3 className="title"><a href="#">Product Design</a></h3>
                                        <span className="category"><a href="#">Product Engineering</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="project-item">
                                <div className="project-img">
                                    <img
                                        src="assets/img/project/style5/4.jpg"
                                        alt="images"
                                    />
                                </div>
                                <div className="project-content">
                                    <div className="project-inner">
                                        <h3 className="title"><a href="#">Product Design</a></h3>
                                        <span className="category"><a href="#">Product Engineering</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
            </Tabs>
        </div>

    );
}

export default PortfolioTab;