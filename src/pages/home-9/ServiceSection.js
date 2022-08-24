import SingleService from '../../components/Service/SingleService';

// Service Image Icons
import serviceIcon1 from '../../../public/assets/img/service/style8/1.png';
import serviceIcon2 from '../../../public/assets/img/service/style8/2.png';
import serviceIcon3 from '../../../public/assets/img/service/style8/3.png';

const Service = () => {

    return (
        <div id="rs-service" className="rs-services style6 pt-120 pb-120 md-pt-80 md-pb-80">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <SingleService 
                            itemClass="services-item"
                            serviceImage={serviceIcon1}
                            Title="Web Application Testing" 
                            Text="At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database." 
                        />
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <SingleService 
                            itemClass="services-item"
                            serviceImage={serviceIcon2}
                            Title="Desktop Application Testing" 
                            Text="At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database." 
                        />
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <SingleService 
                            itemClass="services-item"
                            serviceImage={serviceIcon3}
                            Title="Mobile Application Testing" 
                            Text="At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database." 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;