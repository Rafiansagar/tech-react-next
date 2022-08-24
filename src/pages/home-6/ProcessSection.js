import SectionTitle from '../../components/Common/SectionTitle';
import SingleProcessTwo from '../../components/Process/SingleProcessTwo';

import shapeImg from'../../../public/assets/img/process/circle.png';

const Process = () => {

    return (
        <div className="gray-bg">
            <div className="rs-process modify1 pt-160 pb-120 md-pt-74 md-pb-80">
                <div className="shape-animation">
                    <div className="shape-process">
                        <img className="dance2" src={shapeImg} alt="images" />
                    </div>
                </div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 pr-40 md-pr-14 md-pb-80">
                            <SectionTitle
                                sectionClass="sec-title mb-30"
                                subtitleClass="sub-text new"
                                subtitle="Working Process"
                                titleClass="title white-color"
                                title="Our Working Process - How We Work For Our Customers"
                            />
                            <div className="btn-part mt-40">
                                <a className="readon started" href="#">Contact Us</a>
                            </div>
                        </div>
                        <div className="col-lg-8 sm-pl-40 sm-pr-20">
                            <div className="row">
                                <div className="col-md-6 mb-70">
                                    <SingleProcessTwo
                                        itemClass="rs-addon-number"
                                        prefixClass="number-area"
                                        prefix="1"
                                        titleClass="title"
                                        Title="Discovery"
                                        descClass="number-txt"
                                        Description="Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibh luctus, in porttitor theo lacus egestas."
                                    />
                                </div>
                                <div className="col-md-6 mb-70">
                                    <SingleProcessTwo
                                        itemClass="rs-addon-number"
                                        prefixClass="number-area green-bg"
                                        prefix="2"
                                        titleClass="title"
                                        Title="Planning"
                                        descClass="number-txt"
                                        Description="Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibh luctus, in porttitor theo lacus egestas."
                                    />
                                </div>
                                <div className="col-md-6 sm-mb-70">
                                    <SingleProcessTwo
                                        itemClass="rs-addon-number"
                                        prefixClass="number-area plum-bg"
                                        prefix="3"
                                        titleClass="title"
                                        Title="Execute"
                                        descClass="number-txt"
                                        Description="Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibh luctus, in porttitor theo lacus egestas."
                                    />
                                </div>
                                <div className="col-md-6">
                                    <SingleProcessTwo
                                        itemClass="rs-addon-number"
                                        prefixClass="number-area pink-bg"
                                        prefix="4"
                                        titleClass="title"
                                        Title="Deliver"
                                        descClass="number-txt"
                                        Description="Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibh luctus, in porttitor theo lacus egestas."
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Process;