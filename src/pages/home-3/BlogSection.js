import React from 'react';
import BlogPart from '../../components/Blog/HomeBlogSection';
import SectionTitle from '../../components/Common/SectionTitle';

const Blog = () => {
    return (
        <React.Fragment>
            <div id="rs-blog" className="rs-blog pt-120 pb-120 md-pt-70 md-pb-70">
                <div className="container">                    
                    <SectionTitle
                        sectionClass="sec-title2 text-center mb-30"
                        subtitleClass="sub-text style-bg"
                        subtitle="Blogs"
                        titleClass="title title2"
                        title="Read Our Latest Tips & Tricks"
                    />
                    <BlogPart />
                </div>
            </div>
        </React.Fragment>
    );

}

export default Blog;