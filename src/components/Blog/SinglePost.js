import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SinglePost = ( props ) => {
    const {blogClass, blogImage, blogTitle, blogDesc, blogCategory, blogAuthor, blogPublishedDate, blogButtonClass, blogButtonText } = props;
    return (
        <div className={blogClass ? blogClass : 'blog-item mb-44'}>
            <div className="image-wrap">
                <Link href="/blog/blog-details">
                    <img
                        src={blogImage}
                        alt={blogTitle}
                    />
                </Link>
                <ul className="post-categories">
                    <li>
                        <Link href="#">
                            <a>{blogCategory ? blogCategory : 'Application Testing'}</a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="blog-content">
                <ul className="blog-meta">
                    <li className="date"><i><FontAwesomeIcon icon={['fal', 'user']} /></i> {blogPublishedDate ? blogPublishedDate : ' January 21, 2021'}</li>
                    <li className="admin"><i><FontAwesomeIcon icon={['fal', 'calendar']} /></i> {blogAuthor ? blogAuthor : 'admin'}</li>
                </ul>
                <h3 className="blog-title">
                    <Link href="/blog/blog-details">
                        <a>{blogTitle ? blogTitle : 'Open Source Job Report Show More Openings Fewer '}</a>
                    </Link>
                </h3>
                <p className="desc">{blogDesc ? blogDesc : 'We denounce with righteous indige nation and dislike men who are so beguiled and demo realized by the charms of pleasure of the moment, so blinded by desire, that...'}</p>
                <div className={blogButtonClass ? blogButtonClass : 'blog-button'}>
                    <Link href="/blog/blog-details">
                        <a>{blogButtonText ? blogButtonText : 'Continue Reading'}</a>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default SinglePost