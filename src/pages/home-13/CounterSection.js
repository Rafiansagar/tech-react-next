import React, { useState } from "react";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';


const Counter = () => {
    const [state, setState] = useState(true);

    const counters = [
        {
            countNum: 2051,
            countTitle: 'Projects',
            counterClass: 'rs-count'
        },
        {
            countNum: 150,
            countTitle: 'Clients',
            counterPrefix: '+',
            counterClass: 'rs-count'
        },
        {
            countNum: 175,
            countTitle: 'Employees',
            counterPrefix: '+',
            counterClass: 'rs-count'
        },
        {
            countNum: 250,
            countTitle: 'Awards',
            counterPrefix: '+',
            counterClass: 'rs-count'
        }

    ];

    return (
        <div className="rs-counter style3 modify3 pt-90">
            <div className="container">
                <div className="counter-top-area">
                    {counters &&
                        <div className="row">
                            {counters.map((counter, num) => (
                                <div key={num} className="col-lg-3 col-sm-6 md-mb-40">
                                    <div className="counter-list md-center">
                                        <div className="counter-text">
                                            <div className="count-number">
                                                <span className={counter.counterClass}>
                                                    <CountUp start={state ? 0 : counter.countNum} end={counter.countNum} duration={10} onEnd= {()=> setState(false)} />
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor onChange={start} delayedCall>
                                                            <span ref={countUpRef} />
                                                        </VisibilitySensor>
                                                    )}
                                                    <span className="counter-prefix">{counter.counterPrefix}</span>
                                                </span>
                                            </div>
                                            <h3 className="title">{counter.countTitle}</h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
export default Counter;