import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import postImage from '../../../public/assets/img/blog/inner/5.jpg';

const PostContent = ({ }) => {
    return (
        <div className="post-content">
            <div className="bs-img mb-34">
                <img
                    src={postImage}
                    alt="Post Image"
                />
            </div>
            <div className="blog-full">
                <ul className="single-post-meta">
                    <li>
                        <span className="p-date">
                            <i className="far fa-calendar-check"></i>
                            January 21, 2020
                        </span>
                    </li>
                    <li>
                        <span className="p-date">
                            <i className="far fa-user"></i>
                            Admin
                        </span>
                    </li>
                    <li className="Post-cate">
                        <div className="tag-line">
                            <i className="fas fa-book"></i>
                            <a href="#">Strategy</a>
                        </div>
                    </li>
                    <li className="post-comment">
                        <i className="far fa-comments"></i> 1
                    </li>
                </ul>
                <p>We denounce with righteous indige nation and dislike men who are so beguiled and demo realized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue cannot foresee. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled data structures manages data in technology.</p>
            </div>
        </div>
    )
}

export default PostContent;