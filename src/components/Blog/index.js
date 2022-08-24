import React, { Component } from 'react';
import SearchWidget from '../Widget/SearchWidget';
import RecentPostWidget from '../Widget/RecentPostWidget';
import CategoriesWidget from '../Widget/CategoriesWidget';

import SinglePost from '../../components/Blog/SinglePost';

import blogImg1 from '../../../public/assets/img/blog/inner/1.jpg'
import blogImg2 from '../../../public/assets/img/blog/inner/2.jpg'
import blogImg3 from '../../../public/assets/img/blog/inner/3.jpg'
import blogImg4 from '../../../public/assets/img/blog/inner/4.jpg'
import blogImg5 from '../../../public/assets/img/blog/inner/5.jpg'
import blogImg6 from '../../../public/assets/img/blog/inner/6.jpg'
import blogImg7 from '../../../public/assets/img/blog/inner/7.jpg'
import blogImg8 from '../../../public/assets/img/blog/inner/8.jpg'
import blogImg9 from '../../../public/assets/img/blog/inner/9.jpg'
import blogImg10 from '../../../public/assets/img/blog/inner/10.jpg'

class BlogMain extends Component {

    render() {

        return (
            <div className="rs-blog rs-inner-blog pt-120 pb-120 md-pt-90 md-pb-90">
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
                            <SinglePost 
                                blogImage={blogImg1}
                                blogCategory='Application Testing'
                                blogPublishedDate='January 21, 2021'
                                blogTitle='Open Source Job Report Show More Openings Fewer'
                                blogDesc='We denounce with righteous indige nation and dislike men who are so beguiled and demo realized by the charms of pleasure of the moment, so blinded by desire, that...'
                                blogButtonClass='blog-button inner-blog'
                            />
                            <SinglePost 
                                blogImage={blogImg2}
                                blogCategory='Application Testing'
                                blogPublishedDate='January 21, 2021'
                                blogTitle='Tech Products That Makes Its Easier to Stay at Home '
                                blogDesc='We denounce with righteous indige nation and dislike men who are so beguiled and demo realized by the charms of pleasure of the moment, so blinded by desire, that...'
                                blogButtonClass='blog-button inner-blog'
                            />
                            <SinglePost 
                                blogImage={blogImg3}
                                blogCategory='Application Testing'
                                blogPublishedDate='January 21, 2021'
                                blogTitle='Necessity May Give Us Your Best Virtual Court System'
                                blogDesc='We denounce with righteous indige nation and dislike men who are so beguiled and demo realized by the charms of pleasure of the moment, so blinded by desire, that...'
                                blogButtonClass='blog-button inner-blog'
                            />
                            <SinglePost 
                                blogImage={blogImg4}
                                blogCategory='Application Testing'
                                blogPublishedDate='November 21, 2021'
                                blogTitle='Servo Project Joins The Linux Foundation Fold Desco'
                                blogDesc='We denounce with righteous indige nation and dislike men who are so beguiled and demo realized by the charms of pleasure of the moment, so blinded by desire, that...'
                                blogButtonClass='blog-button inner-blog'
                            />
                            <SinglePost 
                                blogImage={blogImg5}
                                blogCategory='IT Services'
                                blogPublishedDate='November 16, 2020'
                                blogTitle='Servo Project Joins The Linux Foundation Fold Desco'
                                blogDesc='We denounce with righteous indige nation and dislike men who are so beguiled and demo realized by the charms of pleasure of the moment, so blinded by desire, that...'
                                blogButtonClass='blog-button inner-blog'
                            />
                            <SinglePost 
                                blogImage={blogImg6}
                                blogCategory='Web Development'
                                blogPublishedDate='November 16, 2020'
                                blogTitle='Necessity May Give Us Your Best Virtual Court System'
                                blogDesc='We denounce with righteous indige nation and dislike men who are so beguiled and demo realized by the charms of pleasure of the moment, so blinded by desire, that...'
                                blogButtonClass='blog-button inner-blog'
                            />
                            <SinglePost 
                                blogImage={blogImg7}
                                blogCategory='Software Development'
                                blogPublishedDate='November 16, 2020'
                                blogTitle='Tech Products That Makes Its Easier to Stay at Home'
                                blogDesc='We denounce with righteous indige nation and dislike men who are so beguiled and demo realized by the charms of pleasure of the moment, so blinded by desire, that...'
                                blogButtonClass='blog-button inner-blog'
                            />
                            <SinglePost 
                                blogImage={blogImg8}
                                blogCategory='IT Services'
                                blogPublishedDate='November 16, 2020'
                                blogTitle='Open Source Job Report Show More Openings Fewer'
                                blogDesc='We denounce with righteous indige nation and dislike men who are so beguiled and demo realized by the charms of pleasure of the moment, so blinded by desire, that...'
                                blogButtonClass='blog-button inner-blog'
                            />
                            <SinglePost 
                                blogImage={blogImg9}
                                blogCategory='Artificial Intelligence'
                                blogPublishedDate='November 16, 2020'
                                blogTitle='Types of Social Proof What its Makes Them Effective'
                                blogDesc='We denounce with righteous indige nation and dislike men who are so beguiled and demo realized by the charms of pleasure of the moment, so blinded by desire, that...'
                                blogButtonClass='blog-button inner-blog'
                            />
                            <SinglePost 
                                blogImage={blogImg10}
                                blogCategory='Digital Technology'
                                blogPublishedDate='November 16, 2020'
                                blogTitle='Tech Firms Support Huawei Restriction, Balk at Cost'
                                blogDesc='We denounce with righteous indige nation and dislike men who are so beguiled and demo realized by the charms of pleasure of the moment, so blinded by desire, that...'
                                blogButtonClass='blog-button inner-blog'
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BlogMain;