import React from 'react';
import SectionTitle from '../../components/Common/SectionTitle';
import PortfolioTab from '../../components/Elements/Tab/PortfolioTab'


function Project() {

	return(
        <React.Fragment>
            <div id="rs-portfolio" className="rs-project style8 modify1 pt-110 pb-120 md-pt-70 md-pb-80">
                <div className="container">
                    <SectionTitle
                        sectionClass="sec-title6 mb-30 text-center"
                        subtitleClass="sub-text new-text"
                        subtitle="We help brands with"
                        titleClass="title new-title"
                        title="Some Finest Projects We Completed"
                    />
                    <PortfolioTab />
                    
                </div>
            </div>
        </React.Fragment>
	)
}

export default Project