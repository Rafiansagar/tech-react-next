import React, { Component, useState } from 'react';
import ModalVideo from 'react-modal-video';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const PortfolioTabTwo = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);

    let tab1 = "Meetings & Workshops",
        tab2 = "Ideation & Brainstorming",
        tab3 = "Research & Design",
        tab4 = "Strategy & Planning",
        tab5 = "Watch Product Demo"
    const tabStyle = 'nav nav-tabs';

    return (
        <div className="tab-area">
            <Tabs>
                <div className="row">
                    <div className="col-lg-8 pr-40 md-pr-14 md-mb-30">
                        <div className="tab-content">
                            <TabPanel>
                                <div className="image-wrap">
                                    <img src="assets/img/process/style2/1.jpg" alt="Process Tab" />
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="image-wrap">
                                    <img src="assets/img/process/style2/2.jpg" alt="Process Tab" />
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="image-wrap">
                                    <img src="assets/img/process/style2/3.jpg" alt="Process Tab" />
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="image-wrap">
                                    <img src="assets/img/process/style2/4.jpg" alt="Process Tab" />
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="image-wrap">
                                    <img src="assets/img/process/style2/1.jpg" alt="Process Tab" />
                                </div>
                            </TabPanel>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <TabList className={tabStyle}>
                            <Tab>
                                <h3>{tab1}</h3>
                                <p>Stay on the pulse of distributed projects with an online whiteboard to plan, then coordinate and discuss. </p>
                            </Tab>
                            <Tab>
                                <h3>{tab2}</h3>
                                <p>Stay on the pulse of distributed projects with an online whiteboard to plan, then coordinate and discuss. </p>
                            </Tab>
                            <Tab>
                                <h3>{tab3}</h3>
                                <p>Stay on the pulse of distributed projects with an online whiteboard to plan, then coordinate and discuss. </p>
                            </Tab>
                            <Tab>
                                <h3>{tab4}</h3>
                                <p>Stay on the pulse of distributed projects with an online whiteboard to plan, then coordinate and discuss. </p>
                            </Tab>
                            <Tab>
                                <ModalVideo channel='youtube' isOpen={isOpen} videoId='FMvA5fyZ338' onClose={() => { openModal(); }} />
                                <div className="tab-videos">
                                    <a className="popup-videos" onClick={() => { openModal(); }}><i><FontAwesomeIcon icon={['fas', 'play']} /></i><h4 className="title mb-0">{tab5}</h4></a>
                                </div>
                            </Tab>
                        </TabList>
                    </div>
                </div>
            </Tabs>
        </div>

    );
}

export default PortfolioTabTwo;