import Link from 'next/link';

const ErrorContent = () => {
	return (
		<div className="page-error">
            <div className="container">
                <div className="error-not-found">
                    <div className="error-content">
                        <h2 className="title">
                            <span>404</span>
                            oops! page not found 
                        </h2>
                        <div className="btn-part">
                            <Link href="/">
                                <a className="readon learn-more">Back To Homepage</a>
                            </Link>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
	);
}

export default ErrorContent;