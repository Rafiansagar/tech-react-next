import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SingleTeam = (props) => {
	return(
        <div className={props.itemClass}>
            <div className="team-wrap">
                <div className="image-inner">
                    <img 
                        src={props.teamImage} 
                        alt={props.Title}
                    />
                </div>
            </div>
            <div className="team-content text-center">
                <h4 className="person-name">
                    <Link href="/team/team-details">
                        {props.Title}
                    </Link>
                </h4>
                <span className="designation">{props.Designation}</span>
                <ul className="team-social">
                    <li>
                        <Link href="#" as="#">
                            <a><i><FontAwesomeIcon icon={['fab', 'facebook-f']} /></i></a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" as="#">
                            <a><i><FontAwesomeIcon icon={['fab', 'twitter']} /></i></a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" as="#">
                            <a><i><FontAwesomeIcon icon={['fab', 'pinterest']} /></i></a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" as="#">
                            <a><i><FontAwesomeIcon icon={['fab', 'instagram']} /></i></a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
	)
}

export default SingleTeam