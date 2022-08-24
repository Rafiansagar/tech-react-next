import React, { useState, useEffect } from 'react';
import OnepageMenuItems from './OnepageMenuItems';

const RSOnepageMobileMenu = (props) => { 
    const { item1, item2, item3, item4, item5, item6, item7, menuOpen, setMenuOpen } = props; 
    return (
        <div className="container relative">
            <div className={menuOpen ? "mobile-menu-part open": "mobile-menu-part"}>
                <div className="mobile-menu">
                    <ul className="nav-menu">
                        <OnepageMenuItems 
                            menuItem1={item1 ? item1 : 'Home'}
                            menuItem2={item2 ? item2 : 'About'}
                            menuItem3={item3 ? item3 : 'Services'}
                            menuItem4={item4 ? item4 : 'Project'}
                            menuItem5={item5 ? item5 : 'Team'}
                            menuItem6={item6 ? item6 : 'Blog'}
                            menuItem7={item7 ? item7 : 'Contact'}
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default RSOnepageMobileMenu;