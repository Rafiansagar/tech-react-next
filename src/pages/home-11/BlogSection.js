import React from 'react';
import BlogPart from '../../components/Blog/HomeBlogSection';
import SectionTitle from '../../components/Common/SectionTitle';

const Blog = () => {
    return (
        <React.Fragment>
            <div id="rs-blog" className="rs-blog black-dark pt-120 pb-120 md-pt-70 md-pb-80">
                <div className="container">                    
                    <SectionTitle
                        sectionClass="sec-title2 text-center mb-30"
                        subtitleClass="sub-text white-color"
                        subtitle="Blogs"
                        titleClass="title testi-title white-color"
                        title="Latest Tips &Tricks"
                        descClass="desc white-color"
                        description="We've been building creative tools together for over a decade and have a deep appreciation for software applications"
                    />
                    <BlogPart />
                </div>
            </div>
        </React.Fragment>
    );

}

export default Blog;