import React from 'react';
import OwlCarousel from 'react-owl-carousel2';
import SingleBlog from './/SingleBlog';
import posts from '../../sample-data/blog-posts/posts.json';

const BlogPart = () => {

    const options = {
        items: 3,
        nav: false,
        dots: true,
        margin: 30,
        rewind: false,
        autoplay: false,
        stagePadding: 30,
        loop: true,
        center: false,
        responsive: {
            0: {
                stagePadding: 0,
                items: 1,
                nav: false,
            },
            768: {
                items: 2,
                stagePadding: 0,

            },
            992: {
                items: 2,
                stagePadding: 0,

            },
            1200: {
                items: 3,
                stagePadding: 0,
            },
            1500: {
                items: 3,
                stagePadding: 0,
            }
        }
    };

    return (
        <React.Fragment>
            <OwlCarousel options={options} >
                {posts && posts.map((post, i) => (
                    <div key={i}>
                        <SingleBlog post={post} />
                    </div>
                ))}
            </OwlCarousel>
        </React.Fragment>
    );

}

export default BlogPart;