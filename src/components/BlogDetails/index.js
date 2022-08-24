import React, { Component } from 'react';
import PostContent from './PostContent';
import BlockQuote from './BlockQuote';
import Commenting from './Commenting';
import SearchWidget from '../Widget/SearchWidget';
import RecentPostWidget from '../Widget/RecentPostWidget';
import CategoriesWidget from '../Widget/CategoriesWidget';

import imgMiddle from '../../../public/assets/img/blog/inner/6.jpg';

class BlogDetailsMain extends Component {

    render() {

        return (
            <div className="rs-inner-blog pt-120 pb-120 md-pt-90 md-pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 order-last">
                            <div className="widget-area">
                                <SearchWidget />
                                <RecentPostWidget />
                                <CategoriesWidget />
                            </div>
                        </div>

                        <div className="col-lg-8 pr-34 md-pr-14">
                            <div className="blog-details">
                                <PostContent />
                                <BlockQuote />

                                <div className="blog-full">
                                    <h3>Digital technology on the cutting edge</h3>
                                    <ul className="dots">
                                        <li>How will digital activities impact traditional manufacturing.</li>
                                        <li>All these digital elements and projects aim to enhance .</li>
                                        <li>I monitor my staff with software that takes screenshots.</li>
                                        <li>Laoreet dolore magna niacin sodium glutimate aliquam hendrerit.</li>
                                        <li>Minim veniam quis niacin sodium glutimate nostrud exerci dolor.</li>
                                    </ul>
                                    <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                                    <div className="bs-img mb-30">
                                        <img
                                            src={imgMiddle}
                                            alt="Middle Image"
                                        />
                                    </div>
                                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.</p>

                                    <Commenting />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BlogDetailsMain;