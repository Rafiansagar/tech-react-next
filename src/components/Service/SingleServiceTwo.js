import Link from 'next/link';

const SingleServiceTwo = (props) => {
	return(
        <div className={props.itemClass}>
            <div className="services-icon">
                <div className="image-part">
                    <img 
                        className="main-img"
                        src={props.mainIcon} 
                        alt={props.Title}
                    />
                    <img
                        className="hover-img"
                        src={props.hoverIcon}
                        alt={props.Title}
                    />
                </div>
            </div>
            <div className="services-content">
                <div className="services-text">
                    <h3 className="title">
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
                <div className="serial-number">{props.prefix}</div>
            </div>
        </div>
	)
}

export default SingleServiceTwo