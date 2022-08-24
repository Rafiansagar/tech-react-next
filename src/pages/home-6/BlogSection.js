import React from 'react';
import BlogPart from '../../components/Blog/HomeBlogSection';
import SectionTitle from '../../components/Common/SectionTitle';

const Blog = () => {
    return (
        <React.Fragment>
            <div id="rs-blog" className="rs-blog pt-120 pb-120 md-pt-74 md-pb-80">
                <div className="container">
                    <SectionTitle
                        sectionClass="sec-title2 text-center mb-30"
                        subtitleClass="sub-text"
                        subtitle="Blogs"
                        titleClass="title testi-title"
                        title="Latest Tips &Tricks"
                        descClass="desc"
                        description="We've been building creative tools together for over a decade and have a deep appreciation for software applications"
                    />
                    <BlogPart />
                </div>
            </div>
        </React.Fragment>
    );

}

export default Blog;