import React from 'react';

const CaseStyleTwo = (props) => {
    const { caseClass } = props;
    return (
        <div className={caseClass ? caseClass : 'project-item'}>
            <div className="project-img">
                <img
                    src={props.caseImage}
                    alt={props.caseTitle}
                />
                <a className="plus-icon" href="#"><i className="fa fa-plus"></i></a>
            </div>
            <div className="project-content">
                <div className="project-inner">
                    <h3 className="title"><a href="#">{props.caseTitle}</a></h3>
                    <span className="category"><a href="#">{props.caseCategory}</a></span>
                </div>
            </div>
        </div >
    );
}

export default CaseStyleTwo;