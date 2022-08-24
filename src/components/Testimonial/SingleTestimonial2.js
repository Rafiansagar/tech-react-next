import Link from 'next/link';

const SingleTestimonial2 = (props) => {
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
            <div className="testi-content">
                <div className="images-wrap">
                    <img
                        src={props.authorImage}
                        alt={props.Title}
                    />
                </div>
                <Link href='#'>
                    <a className="name">{props.Title}</a>
                </Link>
                <span className="designation">{props.Designation}</span>
            </div>
        </div>
	)
}

export default SingleTestimonial2