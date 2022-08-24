import React from 'react';

const CaseStyleFour = (props) => {
    const { caseClass } = props;
    return (
        <div className={caseClass ? caseClass : 'project-item'}>
            <div className="project-img">
                <img
                    src={props.caseImage}
                    alt={props.caseTitle}
                />
            </div>
            <div className="project-content">
                <div className="portfolio-inner">
                    <span className="category"><a href="#">{props.caseCategory}</a></span>
                    <h3 className="title mb-0"><a href="#">{props.caseTitle}</a></h3>
                </div>
            </div>
        </div >
    );
}

export default CaseStyleFour;