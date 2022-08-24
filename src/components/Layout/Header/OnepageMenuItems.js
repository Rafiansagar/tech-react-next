import React, { useState } from 'react';
import Link from 'next/link';

const OnepageMenuItems = (props) => {
    const { menuItem1, menuItem2, menuItem3, menuItem4, menuItem5, menuItem6, menuItem7 } = props;

    const [home, setHome] = useState(true)
    const [about, setAbout] = useState(false)
    const [service, setService] = useState(false)
    const [portfolio, setPortfolio] = useState(false)
    const [team, setTeam] = useState(false)
    const [blog, setBlog] = useState(false)
    const [contact, setContact] = useState(false)

    const addActiveClass = (menu) => {
    
        if( menu == 'home'){
            setHome(!home)
            setAbout(false)
            setService(false)
            setPortfolio(false)
            setTeam(false)
            setBlog(false)
            setContact(false)
        }
        else if( menu == 'about'){
            setHome(false)
            setAbout(!home)
            setService(false)
            setPortfolio(false)
            setTeam(false)
            setBlog(false)
            setContact(false)
        }
        else if( menu == 'service'){
            setHome(false)
            setAbout(false)
            setService(!home)
            setPortfolio(false)
            setTeam(false)
            setBlog(false)
            setContact(false)
        }
        else if( menu == 'portfolio'){
            setHome(false)
            setAbout(false)
            setService(false)
            setPortfolio(!home)
            setTeam(false)
            setBlog(false)
            setContact(false)
        }
        else if( menu == 'team'){
            setHome(false)
            setAbout(false)
            setService(false)
            setPortfolio(false)
            setTeam(!home)
            setBlog(false)
            setContact(false)
        }
        else if( menu == 'blog'){
            setHome(false)
            setAbout(false)
            setService(false)
            setPortfolio(false)
            setTeam(false)
            setBlog(!home)
            setContact(false)
        }
        else if( menu == 'contact'){
            setHome(false)
            setAbout(false)
            setService(false)
            setPortfolio(false)
            setTeam(false)
            setBlog(false)
            setContact(!home)
        }
    };

	return (
		<React.Fragment>
            {
                menuItem1 ? 
                <li className={home ? "current-menu-item" : ""}>
                    <Link href="#rs-header" as="#rs-header">
                        <a onClick={() => { addActiveClass('home'); }}>{menuItem1}</a>
                    </Link>
                </li> : ''
            }	
            {
                menuItem2 ? 
                <li className={about ? "current-menu-item" : ""}>
                    <Link href="#rs-about" as="#rs-about">
                        <a onClick={() => { addActiveClass('about'); }}>{menuItem2}</a>
                    </Link>
                </li> : ''
            }

            {
                menuItem3 ? 
                <li className={service ? "current-menu-item" : ""}>
                    <Link href="#rs-service" as="#rs-service">
                        <a onClick={() => { addActiveClass('service'); }}>{menuItem3}</a>
                    </Link>
                </li> : ''
            }

            {
                menuItem4 ? 
                <li className={portfolio ? "current-menu-item" : ""}>
                    <Link href="#rs-portfolio" as="#rs-portfolio">
                        <a onClick={() => { addActiveClass('portfolio'); }}>{menuItem4}</a>
                    </Link>
                </li> : ''
            }
            
            {
                menuItem5 ? 
                <li className={team ? "current-menu-item" : ""}>
                    <Link href="#rs-team" as="#rs-team">
                        <a onClick={() => { addActiveClass('team'); }}>{menuItem5}</a>
                    </Link>
                </li> : ''
            }
            
            {
                menuItem6 ? 
                <li className={blog ? "current-menu-item" : ""}>
                    <Link href="#rs-blog" as="#rs-blog">
                        <a onClick={() => { addActiveClass('blog'); }}>{menuItem6}</a>
                    </Link>
                </li> : ''
            }	
            
            {
                menuItem7 ? 
                <li className={contact ? "current-menu-item" : ""}>
                    <Link href="#rs-contact" as="#rs-contact">
                        <a onClick={() => { addActiveClass('contact'); }}>{menuItem7}</a>
                    </Link>
                </li> : ''
            }
            
		</React.Fragment>
	);
}

export default OnepageMenuItems;