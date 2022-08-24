import React from 'react';

const CaseStyleThree = (props) => {
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
                    <h3 className="title"><a href="#">{props.caseTitle}</a></h3>
                    <span className="category"><a href="#">{props.caseCategory}</a></span>
                </div>
            </div>
        </div >
    );
}

export default CaseStyleThree;