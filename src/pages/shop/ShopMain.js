import React, { Component } from 'react';

import posts from '../../sample-data/shop-item/products.json';
import SingleProduct from './SingleProduct';

class ShopMain extends Component {

	render() {

		return (
			<div className="rs-shop-part pt-120 pb-120 md-pt-70 md-pb-80">
				<div className="container">
					<div className="row align-items-center rs-vertical-middle shorting mb-50">
						<div className="col-sm-6 col-12">
							<p className="woocommerce-result-count">Showing 1-9 of 12 results</p>
						</div>
						<div className="col-sm-6 col-12 sm-mt-20">
							<select className="from-control">
								<option>Default sorting</option>
								<option>Sort by popularity</option>
								<option>Sort by average rating</option>
								<option>Sort by lates</option>
								<option>Sort by price: low to high</option>
								<option>Sort by price: high to low</option>
							</select>
						</div>
					</div>

					<div className="row">
						{posts && posts.map((post, i) => (
							<div key={i} className="col-lg-4 col-md-6 mb-80">
								<SingleProduct post={post} />
							</div>
						))}
						<div className="col-lg-12 text-center">
							<ul className="pagination-part">
								<li className="active"><a href="#">1</a></li>
								<li><a href="#">2</a></li>
								<li><a className="next-page" href="#">Next</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ShopMain;