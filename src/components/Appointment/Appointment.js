import React from 'react';

const AppointmentForm = (props) => {
    const { formTitle, formSubTitle, formBtn, formBtnClass } = props;
        return (
            <React.Fragment>

                {/* <!-- appointment form start --> */}
                <div className="appointment-style white-bg">
                    <div className="form-title">
                        <h3 className="title">{ formTitle ? formTitle : 'Schedule Your Appointment'}</h3>
                        <p className="desc">{ formSubTitle ? formSubTitle : 'We here to help you 24/7 with experts'}</p>
                    </div>
                    <form className="appointment-form" action="#">
                        <input type="text" name="name" placeholder="Name" required />
                        <input type="email" name="email" placeholder="E-Mail" required /> 
                        <input type="text" name="text" placeholder="Phone Number" required />
                        <input type="text" name="text" placeholder="Your Website" required />
                        <button type="submit" className={ formBtnClass ? formBtnClass : 'submit'}>{ formBtn ? formBtn : 'Submit Now'}</button>
                    </form>
                </div>
                {/* <!-- appointment form end --> */}
                
            </React.Fragment>
        );

}

export default AppointmentForm;