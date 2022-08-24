import Link from 'next/link';

const SingleServiceThree = (props) => {
	return(
        <div className={props.itemClass}>
            <div className="services-icon">
                <img 
                    src={props.serviceImage} 
                    alt={props.Title}
                />
            </div>
            <div className="services-content">
                <h2 className="services-title">
                    <Link href="/service/service-details">
                        <a>{props.Title}</a>
                    </Link>
                </h2>
                <p className="desc">
                    {props.Text}
                </p>
                <div className="services-btn2">
                    <Link href="/service/service-details">
                        <a>{props.serviceBtn}</a>
                    </Link>
                </div>
            </div>
        </div>
	)
}

export default SingleServiceThree