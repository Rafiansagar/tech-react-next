import React from 'react';

const CaseStyleFive = (props) => {
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
                <div className="vertical-middle">
                    <div className="vertical-middle-cell">
                        <h3 className="title"><a href="#">{props.caseTitle}</a></h3>
                        <span className="category"><a href="#">{props.caseCategory}</a></span>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default CaseStyleFive;