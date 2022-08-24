import SectionTitle from '../../components/Common/SectionTitle';
import SingleServiceFour from '../../components/Service/SingleServiceFour';

// Service Icons
import img1 from '../../../public/assets/img/technology/style3/1.png';
import img2 from '../../../public/assets/img/technology/style3/2.png';
import img3 from '../../../public/assets/img/technology/style3/3.png';
import img4 from '../../../public/assets/img/technology/style3/4.png';
import img5 from '../../../public/assets/img/technology/style3/5.png';
import img6 from '../../../public/assets/img/technology/style3/6.png';
import img7 from '../../../public/assets/img/technology/style3/7.png';
import img8 from '../../../public/assets/img/technology/style3/8.png';
import img9 from '../../../public/assets/img/technology/style3/9.png';
import img10 from '../../../public/assets/img/technology/style3/10.png';

const Service = () => {

    return (
        <div className="rs-services style8 pt-120 pb-114 md-pt-70 md-pb-70">
            <div className="container">
                <SectionTitle
                    sectionClass="sec-title2 text-center mb-44"
                    subtitleClass="sub-text gold-color"
                    subtitle="Work For Any Industry"
                    titleClass="title"
                    title="Best Solutions, For All Organizations"
                />
                <div className="all-services">
                    <SingleServiceFour
                        serviceIcon={img1}
                        Title="Software" 
                    />
                    <SingleServiceFour
                        serviceIcon={img2}
                        Title="Fintech" 
                    />
                    <SingleServiceFour
                        serviceIcon={img3}
                        Title="Healthcare" 
                    />
                    <SingleServiceFour
                        serviceIcon={img4}
                        Title="Data Mining" 
                    />
                    <SingleServiceFour
                        serviceIcon={img5}
                        Title="Machine learning" 
                    />
                    <SingleServiceFour
                        serviceIcon={img6}
                        Title="Medical" 
                    />
                    <SingleServiceFour
                        serviceIcon={img7}
                        Title="Entertainment" 
                    />
                    <SingleServiceFour
                        serviceIcon={img8}
                        Title="AI" 
                    />
                    <SingleServiceFour
                        serviceIcon={img9}
                        Title="Manufacturing" 
                    />
                    <SingleServiceFour
                        serviceIcon={img10}
                        Title="Logistics" 
                    />
                </div>
            </div>
        </div>
    );
}

export default Service;