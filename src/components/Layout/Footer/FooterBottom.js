import React from 'react';
import Link from 'next/link';

const FooterBottom = () => {
    return (
        <div className="footer-bottom">
            <div className="container">
                <div className="row y-middle">
                    <div className="col-lg-6 text-right md-text-center md-mb-10 order-last">
                        <ul className="copy-right-menu">
                            <li><Link href="/" as="/"><a>Home</a></Link></li>
                            <li><Link href="/about" as="/about"><a>About</a></Link></li>
                            <li><Link href="/blog" as="/blog"><a>Blog</a></Link></li>
                            <li><Link href="/shop" as="/shop"><a>Shop</a></Link></li>
                            <li><Link href="/faq" as="/faq"><a>FAQs</a></Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <div className="copyright md-text-center md-mb-10">
                            <p>© 2021 All Rights Reserved. Developed By <a href="#">Reacthemes</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterBottom;