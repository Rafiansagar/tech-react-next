import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import authorImage from '../../../public/assets/img/rstheme.png'

const Commenting = ({ }) => {
    return (
        <div className="commenting">
            <h3 className="comment-title">1 comment on “Servo Project Joins The Linux Foundation Desco”</h3>
            <div className="comment-body">
                <div className="author-logo">
                    <img
                        src={authorImage}
                        alt="Author"
                    />
                </div>
                <div className="comment-meta">
                    <span><a href="#">Admin</a></span>
                    <a href="#">December 3, 2020 at 8:30 am</a>
                    <p className="mb-15">
                        Aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est
                    </p>
                    <div className="btn-part">
                        <a className="readon reply" href="#">Reply</a>
                    </div>
                </div>
            </div>
            <h3 className="comment-title">Leave a Reply</h3>
            <p>Your email address will not be published. Required fields are marked *</p>
            <div className="comment-note">
                <form id="contact-form" action="#">
                    <div className="row">
                        <div className="col-sm-6 mb-34">
                            <input className="from-control" type="text" id="name" name="name" placeholder="Name*" required />
                        </div>
                        <div className="col-sm-6 mb-34">
                            <input className="from-control" type="email" id="email" name="email" placeholder="E-Mail*" required />
                        </div>
                        <div className="col-12 mb-30">
                            <textarea className="from-control" id="message" name="message" placeholder="Your message Here" required ></textarea>
                        </div>
                    </div>
                    <div className="btn-part">
                        <button type="submit" className="readon learn-more post" href="#">Post Comment</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Commenting;