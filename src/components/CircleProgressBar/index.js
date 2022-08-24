import React, { useEffect, useState, useRef } from 'react';

import PropTypes from 'prop-types';

const CircleProgressBar = props => {
    const [offset, setOffset] = useState(0);
    const circleRef = useRef(null);
    const { 
        progress, 
        circleBg,
        circleSize, 
        progressBorderWidth,
        progressBg, 
        progressColor,
        progressTitle,
    } = props;

    const center = circleSize / 2;
    const radius = circleSize / 2 - progressBorderWidth / 2;
    const circumference = 2 * Math.PI * radius;

    useEffect(() => {
        const progressOffset = ((100 - progress) / 100) * circumference;
        setOffset(progressOffset);
        circleRef.current.style = 'transition: stroke-dashoffset 1500ms ease-in-out;';
    }, [setOffset, circumference, progress, offset]);

    return (
        <React.Fragment>
            <div className="pie-chart">
                <div className="circle-part">
                    <span className="progress-number">
                        {progress}%
                    </span>
                
                    <svg
                        className="progress-circle"
                        width={circleSize}
                        height={circleSize}
                        fill={circleBg}
                    >
                        <circle
                            className="progress-circle-bg"
                            stroke={progressBg}
                            cx={center}
                            cy={center}
                            r={radius}
                            strokeWidth={progressBorderWidth}
                        />
                        <circle
                            className="progress-circle"
                            ref={circleRef}
                            stroke={progressColor}
                            cx={center}
                            cy={center}
                            r={radius}
                            strokeWidth={progressBorderWidth}
                            strokeDasharray={circumference}
                            strokeDashoffset={offset}
                        />
                    </svg>
                </div>
                <h2 className="progress-title">{progressTitle}</h2>
            </div>
        </React.Fragment>
    )
}

CircleProgressBar.propTypes = {
    size: PropTypes.number.isRequired,
    progress: PropTypes.number.isRequired,
    progressBorderWidth: PropTypes.number.isRequired,
    circleOneStroke: PropTypes.string.isRequired,
    circleTwoStroke: PropTypes.string.isRequired
}

export default CircleProgressBar;