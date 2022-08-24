import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SingleBlog = ({ post }) => {
    return (
        <div className="blog-item">
            <div className="image-wrap">
                <Link href="/blog/blog-details">
                    <img src={'/' + post.image} alt="blog image" />
                </Link>
                <ul className="post-categories">
                    <li>
                        <Link href="#">
                            <a>{post.category}</a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="blog-content">
                <ul className="blog-meta">
                    <li className="date"><i><FontAwesomeIcon icon={['fal', 'calendar']} /></i> {post.date}</li>
                    <li className="admin"><i><FontAwesomeIcon icon={['fal', 'user']} /></i> {post.author}</li>
                </ul>
                <h3 className="blog-title">
                    <Link href="/blog/blog-details">
                        <a>{post.title}</a>
                    </Link>
                </h3>
                <p className="desc">{post.text}</p>
                <div className="blog-button">
                    <Link href="/blog/blog-details">
                        <a>Learn More</a>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default SingleBlog