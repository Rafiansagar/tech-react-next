import React from 'react';

const CategoriesWidget = ({ }) => {
    return (
        <div className="categories mb-50">
            <div className="widget-title">
                <h3 className="title">Categories</h3>
            </div>
            <ul>
                <li><a href="#">Application Testing</a></li>
                <li><a href="#">Artifical Intelligence</a></li>
                <li><a href="#">Digital Technology</a></li>
                <li><a href="#">IT Services</a></li>
                <li><a href="#">Software Development</a></li>
                <li><a href="#">Web Development</a></li>
            </ul>
        </div>
    )
}

export default CategoriesWidget;