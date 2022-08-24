import Link from 'next/link';

const SingleProjectThree = (props) => {
    return (
        <div className={props.itemClass}>
            <div className="project-img">
                <Link href="/case-study/style-1">
                    <a>
                        <img
                            src={props.projectImage}
                            alt={props.Title}
                        />
                    </a>
                </Link>
            </div>
            <div className="project-content">
                <p className="category">
                    <Link href='#'>
                        <a>{props.Category}</a>
                    </Link>
                </p>
                <h3 className="title mb-0">
                    <Link href="/case-study/style-1">
                        <a>{props.Title}</a>
                    </Link>
                </h3>
            </div>
        </div>
    )
}

export default SingleProjectThree