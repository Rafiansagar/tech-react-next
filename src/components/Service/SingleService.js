import Link from 'next/link';

const SingleService = (props) => {
	return(
        <div className={props.itemClass}>
            <div className="services-icon">
                <div className="image-part">
                    <img 
                        src={props.serviceImage} 
                        alt={props.Title}
                    />
                </div>
            </div>
            <div className={props.shapeCall}>{props.shapeImg}</div>
            <div className="services-content">
                <div className="services-text">
                    <h3 className="services-title">
                        <Link href="/service/service-details">
                            {props.Title}
                        </Link>
                    </h3>
                </div>
                <div className="services-desc">
                    <p>
                        {props.Text}
                    </p>
                </div>
            </div>
        </div>
	)
}

export default SingleService