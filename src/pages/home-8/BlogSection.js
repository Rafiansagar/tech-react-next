import React from 'react';
import BlogPart from '../../components/Blog/HomeBlogSection'; 

const Blog = () => {
    return (
        <React.Fragment>
            <div id="rs-blog" className="rs-blog pt-120 pb-120 md-pt-70 md-pb-70">
                <div className="container relative">
                    <div className="sec-left">
                        <h2 className="title">Latest Tips & Tricks</h2>
                    </div>
                    <BlogPart />
                </div>
            </div>
        </React.Fragment>
    );

}

export default Blog;