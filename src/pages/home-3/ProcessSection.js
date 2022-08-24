import SectionTitle from '../../components/Common/SectionTitle';
import SingleProcess from '../../components/Process/SingleProcess';

import processImage1 from '../../../public/assets/img/process/1.png';
import processImage2 from '../../../public/assets/img/process/2.png';
import processImage3 from '../../../public/assets/img/process/3.png';
import processImage4 from '../../../public/assets/img/process/4.png';

const Process = () => {

    return (
        <div className="rs-process style2 pt-120 pb-112 md-pt-80 md-pb-72">
            <div className="container">
                <SectionTitle
                    sectionClass="sec-title2 text-center mb-46"
                    subtitleClass="sub-text style-bg"
                    subtitle="Process"
                    titleClass="title title2"
                    title="Our Working Process"
                />
                <div className="row">
                    <div className="col-lg-3 col-sm-6 md-mb-50">
                        <SingleProcess
                            itemClass="addon-process"
                            processImage={processImage1}
                            titleClass="title"
                            Title="Discovery"
                        />
                    </div>
                    <div className="col-lg-3 col-sm-6 md-mb-50">
                        <SingleProcess
                            itemClass="addon-process"
                            processImage={processImage2}
                            titleClass="title"
                            Title="Planning"
                        />
                    </div>
                    <div className="col-lg-3 col-sm-6 sm-mb-50">
                        <SingleProcess
                            itemClass="addon-process"
                            processImage={processImage3}
                            titleClass="title"
                            Title="Execute"
                        />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <SingleProcess
                            itemClass="addon-process"
                            processImage={processImage4}
                            titleClass="title"
                            Title="Deliver"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Process;