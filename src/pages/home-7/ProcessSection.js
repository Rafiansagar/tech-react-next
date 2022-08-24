import SectionTitle from '../../components/Common/SectionTitle';
import SingleServiceNumber from '../../components/Service/ServiceNumber';


const Process = () => {

    return (
        <div className="rs-process style3 gray-bg pt-120 pb-120 md-pt-74 md-pb-80">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="process-wrap home7" style={{'background-image': 'url(assets/img/bg/work-bg.png)'}}>
                            <SectionTitle
                                sectionClass="sec-title mb-30"
                                subtitleClass="sub-text new"
                                subtitle="How We Works"
                                titleClass="title title4 white-color pb-20"
                                title="How braintech assist your business"
                                descClass="desc white-color"
                                description="Bring to the table win-win survival strategies to ensure dotted proactive domination. At the end of the day, on going forward, anew normal that has evolved from the generation on streamlined."
                            />
                            <div className="btn-part mt-40">
                                <a className="readon discover started" href="/contact">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 pl-35 md-pt-40 md-pl-15">
                        <div className="row">
                            <div className="col-md-6 mb-20">
                                <SingleServiceNumber 
                                    itemClass="rs-addon-number"
                                    serviceNumber="01"
                                    Title="Discussion"
                                    Text="Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibh theo lacus egestas."
                                />
                            </div>
                            <div className="col-md-6 mb-20">
                                <SingleServiceNumber 
                                    itemClass="rs-addon-number"
                                    serviceNumber="02"
                                    Title="Testing & Trying"
                                    Text="Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibh theo lacus egestas."
                                />
                            </div>
                            <div className="col-md-6 md-mb-20">
                                <SingleServiceNumber 
                                    itemClass="rs-addon-number"
                                    serviceNumber="03"
                                    Title="Ideas & Concepts"
                                    Text="Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibh theo lacus egestas."
                                />
                            </div>
                            <div className="col-md-6">
                                <SingleServiceNumber 
                                    itemClass="rs-addon-number"
                                    serviceNumber="04"
                                    Title="Execute & install"
                                    Text="Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibh theo lacus egestas."
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Process;