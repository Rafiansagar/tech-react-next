import React, { Component } from 'react';

class CartMain extends Component {
    render() {
        return (
            <div className="rs-cart pt-120 pb-120 md-pt-80 md-pb-80">
                <div className="container">
                    <div className="cart-wrap">
                        <form action="#">
                            <table className="cart-table">
                                <thead>
                                    <tr>
                                        <th className="product-remove"></th>
                                        <th className="product-thumbnail"></th>
                                        <th className="product-name">Product</th>
                                        <th className="product-price">Price</th>
                                        <th className="product-quantity">Quantity</th>
                                        <th className="product-subtotal">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="product-remove"><a href="#"><i className="fas fa-times"></i></a></td>
                                        <td className="product-thumbnail"><a href="#"><img src="../../assets/img/shop/2.jpg" alt="" /></a></td>
                                        <td className="product-name"><a href="#">Medicine Bottle</a></td>
                                        <td className="product-price"><span>$</span>30.00</td>
                                        <td className="product-quantity ">
                                            <input type="number" className="input-text" />
                                        </td>
                                        <td className="subtotal"><span className="amount"><span className="symbol">$</span>30.00</span></td>
                                    </tr>
                                    <tr>
                                        <td className="product-remove"><a href="#"><i className="fas fa-times"></i></a></td>
                                        <td className="product-thumbnail"><a href="#"><img src="../../assets/img/shop/1.jpg" alt="" /></a></td>
                                        <td className="product-name"><a href="#">Medicine Bottle</a></td>
                                        <td className="product-price"><span>$</span>30.00</td>
                                        <td className="product-quantity">
                                            <input type="number" className="input-text" />
                                        </td>
                                        <td className="subtotal"><span className="amount"><span className="symbol">$</span>30.00</span></td>
                                    </tr>
                                    <tr>
                                        <td colSpan="6" className="action text-left">
                                            <div className="row no-gutter">
                                                <div className="col-md-8">
                                                    <form action="#">
                                                        <div className="coupon">
                                                            <input type="text" name="text" placeholder="Coupon code" required />
                                                            <button className="add-btn" type="submit">Apply Coupon</button>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="update-cart text-right">
                                                        <button className="add-btn" type="submit">Update cart</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="cart-collaterals pt-70 md-pt-50">
                                <div className="cart-totals">
                                    <h5 className="title mb-25">Cart totals</h5>
                                    <table className="cart-total-table">
                                        <tbody>
                                            <tr className="cart-subtotal">
                                                <th>Subtotal</th>
                                                <td><span className="amount"><span>$</span>60.00</span></td>
                                            </tr>
                                            <tr className="order-total">
                                                <th>Total</th>
                                                <td><strong><span className="amount"><span>$</span>60.00</span></strong></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="wc-proceed-to-checkout">
                                        <button className="add-btn" type="submit"> Proceed to checkout</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        );
    }
}

export default CartMain;