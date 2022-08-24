import Link from 'next/link';

const SingleTestimonial3 = (props) => {
	return(
        <div className={props.itemClass}>
            <div className="author-desc">
                <div className="desc">
                    <img 
                        src={props.quoteImage} 
                        alt={props.Title}
                        className="quote" 
                    />
                    {props.Description}
                </div>
            </div>
            <div className="testimonial-content">
                <div className="author-img">
                    <img
                        src={props.authorImage}
                        alt={props.Title}
                    />
                </div>
                <div className="author-part">
                    <Link href='#'>
                        <a className="name">{props.Title}</a>
                    </Link>
                    <span className="designation">{props.Designation}</span>
                </div>
            </div>
        </div>
	)
}

export default SingleTestimonial3