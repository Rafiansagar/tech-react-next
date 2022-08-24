import React from 'react';
import Link from 'next/link';

// Recent Post Thumb Images
import thumb1 from '../../../public/assets/img/blog/inner/1.jpg'
import thumb2 from '../../../public/assets/img/blog/inner/2.jpg'
import thumb3 from '../../../public/assets/img/blog/inner/3.jpg'
import thumb4 from '../../../public/assets/img/blog/inner/4.jpg'

const RecentPostWidget = ({ }) => {
    return (
        <div className="recent-posts mb-50">
            <div className="widget-title">
                <h3 className="title">Latest Posts</h3>
            </div>
            <div className="recent-post-widget">
                <div className="post-img">
                    <Link href="/blog/blog-details">
                        <img
                            src={thumb1}
                            alt=""
                        />
                    </Link>
                </div>
                <div className="post-desc">
                    <Link href="/blog/blog-details">pen Source Job Report Show More Openings Fewer </Link>
                    <span className="date">
                        <i className="fa fa-calendar"></i>
                        January 21, 2020
                    </span>
                </div>
            </div>
            <div className="recent-post-widget">
                <div className="post-img">
                    <Link href="/blog/blog-details">
                        <img
                            src={thumb2}
                            alt=""
                        />
                    </Link>
                </div>
                <div className="post-desc">
                    <Link href="/blog/blog-details">Tech Products That Makes Its Easier to Stay at Home</Link>
                    <span className="date">
                        <i className="fa fa-calendar"></i>
                        January 21, 2020
                    </span>
                </div>
            </div>
            <div className="recent-post-widget">
                <div className="post-img">
                    <Link href="/blog/blog-details">
                        <img
                            src={thumb3}
                            alt=""
                        />
                    </Link>
                </div>
                <div className="post-desc">
                    <Link href="/blog/blog-details">Necessity May Give Us Your Best Virtual Court System </Link>
                    <span className="date">
                        <i className="fa fa-calendar"></i>
                        January 21, 2020
                    </span>
                </div>
            </div>
            <div className="recent-post-widget">
                <div className="post-img">
                    <Link href="/blog/blog-details">
                        <img
                            src={thumb4}
                            alt=""
                        />
                    </Link>
                </div>
                <div className="post-desc">
                    <Link href="/blog/blog-details">Servo Project Joins The Linux Foundation Fold Desco </Link>
                    <span className="date">
                        <i className="fa fa-calendar"></i>
                        January 21, 2020
                    </span>
                </div>
            </div>
        </div>
    )
}

export default RecentPostWidget;