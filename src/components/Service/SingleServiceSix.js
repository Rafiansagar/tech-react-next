import Link from 'next/link';

const SingleServiceSix = (props) => {
	return(
        <div className={props.itemClass}>
            <div className="services-img">
                <Link href="/service/service-details">
                    <a>
                        <img 
                            className="main-img"
                            src={props.serviceImg} 
                            alt={props.Title}
                        />
                    </a>
                </Link>
            </div>
            <div className="services-content">
                <div className="services-text">
                    <div className="services-title">
                        <h3 className="title">
                            <Link href="/service/service-details">
                                <a>{props.Title}</a>
                            </Link>
                        </h3>
                    </div>
                </div>
                <p className="services-txt">
                    {props.Text}
                </p>
                <div className={props.btnClass}>
                    <Link href="/service/service-details">
                        <a>{props.btnText}</a>
                    </Link>
                </div>
            </div>
        </div>
	)
}

export default SingleServiceSix