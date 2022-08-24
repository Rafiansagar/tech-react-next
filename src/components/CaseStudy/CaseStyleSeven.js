import React from 'react';

const CaseStyleOne = (props) => {
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
                <div className="project-inner">
                    <h3 className="title"><a href="#">{props.caseTitle}</a></h3>
                    <span className="category"><a href="#">{props.caseCategory}</a></span>
                    <a className="p-icon" href="#"><i className="fa fa-angle-right"></i></a>
                </div>
            </div>
        </div >
    );
}

export default CaseStyleOne;