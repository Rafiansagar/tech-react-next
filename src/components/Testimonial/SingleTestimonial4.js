import Link from 'next/link';

const SingleTestimonial4 = (props) => {
	return(
        <div className={props.itemClass}>
            <div className="testi-content">
                <div className="images-wrap">
                    <img
                        src={props.authorImage}
                        alt={props.Title}
                    />
                </div>
                <div className="testi-information">
                    <div className="testi-name">
                        <Link href='#'>
                            <a className="name">{props.Title}</a>
                        </Link>
                    </div>
                    <span className="testi-title">
                        {props.Designation}
                    </span>
                </div>
            </div>
            <div className="item-content-basic">
                <div className="desc">
                    <img 
                        src={props.quoteImage} 
                        alt={props.Title}
                        className="quote" 
                    />
                    {props.Description}
                </div>
            </div>
        </div>
	)
}

export default SingleTestimonial4