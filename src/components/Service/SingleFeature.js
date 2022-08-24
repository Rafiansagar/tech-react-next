const SingleFeature = (props) => {
	return(
        <div className={props.featureClass}>
            <div className="box-inner">
                <div className="icon-area">
                    <a href="#">
                        <img
                            src={props.featureImage}
                            alt={props.featureTitle}
                        />
                    </a> 
                </div>
                <div className="content-part">
                    <h4 className="title"><a href="#">{props.featureTitle}</a></h4>
                </div>
            </div>
        </div>
	)
}

export default SingleFeature