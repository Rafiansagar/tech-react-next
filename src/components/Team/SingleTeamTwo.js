import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SingleTeamTwo = (props) => {
	return(
        <div className={props.itemClass}>
            <div className="images-part">
                <img 
                    src={props.teamImage} 
                    alt={props.Title}
                />
                <div className="social-icon">
                    <ul>
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
            <div className="team-content text-center">
                <h4 className="person-name">
                    <Link href="/team/team-details">
                        {props.Title}
                    </Link>
                </h4>
                <span className="designation">{props.Designation}</span>                
            </div>
        </div>
	)
}

export default SingleTeamTwo