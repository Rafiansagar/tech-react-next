import Link from 'next/link';

const SingleServiceFive = (props) => {
    const { itemClass, btnClass } = props;
	return(
        <div className={ itemClass ? itemClass : 'services-item'}>
            <div className="services-icon">
                <div className="image-part">
                    <img
                        className="main-img"
                        src={props.MainImg} 
                        alt={props.Title}
                    />
                    <img
                        className="hover-img"
                        src={props.HoverImg} 
                        alt={props.Title}
                    />
                </div>
            </div>
            <div className="services-content">
                <div className="services-text">
                    <h3 className="title">
                        <Link href="/service/service-details">
                            <a>{props.Title}</a>
                        </Link>
                    </h3>
                </div>
                <div className="services-desc">
                    <p>{props.Text}</p>
                </div>
                <div className={ btnClass ? btnClass : 'services-button'}>
                    <Link href="/service/service-details">
                        <a>{props.serviceBtn}</a>
                    </Link>
                </div>
            </div>
        </div>
	)
}

export default SingleServiceFive