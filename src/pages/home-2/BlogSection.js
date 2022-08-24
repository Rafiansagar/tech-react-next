import React from 'react';
import BlogPart from '../../components/Blog/HomeBlogSection';
import SectionTitle from '../../components/Common/SectionTitle';

const Blog = () => {
    return (
        <React.Fragment>
            <div id="rs-blog" className="rs-blog pt-108 pb-120 md-pt-70 md-pb-70">
                <div className="container">                    
                    <SectionTitle
                        sectionClass="sec-title2 text-center mb-44"
                        subtitleClass="sub-text"
                        subtitle="Blogs"
                        titleClass="title testi-title"
                        title="Read Our Latest Tips & Tricks"
                        effectClass="heading-line"
                    />
                    <BlogPart />
                </div>
            </div>
        </React.Fragment>
    );

}

export default Blog;