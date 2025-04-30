import React, { useEffect } from 'react';
import './HomepageStyle.css';
import { useDispatch, useSelector } from 'react-redux';
import {redeemSection,toggleReviewMode,setRedeemAmount} from '../../Reducers/reducer'
import RewardsTabs from "../../components/RewardsTab/RewardsTabs";
import { homeTodos } from '../../Reducers/reducer';
import Footer from '../../components/Footer/Footer';
import Header from "../../components/Header/Header";


function HomePage() {
    const homeData = useSelector(state => state.form.homeData);
    const dispatch = useDispatch();
    const showRedeemSection = useSelector((state) => state.form.showRedeemSection);
    const reviewMode = useSelector((state) => state.form.reviewMode);
    const redeemAmount = useSelector((state) => state.form.redeemAmount);
    const rewards = homeData.rewards;


    useEffect(() => {
        dispatch(homeTodos());
    }, []);


    return (
        <>
            <Header />
        <div className="rewards-container">

            <div className="dashboard-wrapper">
              <RewardsTabs />

                <div className="card-section">
                    <div className="card-header">
                        <div className="card-logo">Lifestyle</div>
                        <div>
                            <p className="card-title">Lifestyle Rewards Credit Card</p>
                            <a className="apply-link" href="#">Apply</a>
                        </div>
                    </div>
                    <hr />

                    <div className="card-info">
                        <div>
                            <p className="info-label">Available Rewards Points</p>
                            <p className="info-value">150 points</p>
                        </div>
                        <div>
                            <p className="info-label">Free Shipping</p>
                            <p className="info-value">150/500</p>
                        </div>
                        <div>
                            <p className="info-label">Monthly Challenge</p>
                            <p className="info-value bold">Shop 2x by Feb 28 for 50 Points!</p>
                        </div>
                    </div>

                    <div className="redeem-section">
                        <button className="redeem-btn" onClick={() => dispatch(redeemSection())}>
                            Find ways to Redeem
                        </button>
                    </div>
                </div>

                <div className="offer-section">
                    <p className="offer-heading">Next Rewards Possible Offers</p>
                    <p className="offer-subtitle">Lifestyle rewards shop small and earn more</p>
                    <div className="offer-cards">
                        <div className="offer-card">

                            <div className="offer-tag">Suggested For You</div>
                            <div className="offer-icon">🎁</div>
                            <p className="offer-description">Earn 5 Points for every $1 spent as a card member across our family brands</p>

                        </div>
                        <div className="offer-card">

                            <div className="offer-tag">New Offer</div>
                            <div className="offer-icon">🛍️</div>
                            <p className="offer-description">Lifestyle Mastercard card members earn 2 points for every $1 spent outside our family brands</p>
                        </div>
                        <div className="offer-card">

                            <div className="offer-tag">Available Benefit</div>
                            <div className="offer-icon">🏷️</div>
                            <p className="offer-description">Earn 1 point for every $1 spent at our family of brands as rewards member</p>
                        </div>
                    </div>
                </div>
                {showRedeemSection && !reviewMode && (
                    <div className="redeem-box">
                        <h2 className="redeem-title">Redeem Reward Dollars for a Checkout</h2>
                        <hr className="redeem-divider" />

                        <div className="redeem-row">

                                <div className='sub-head'>
                                    <div className="sub-head-left">
                                    <p className="credit-label">Choose a Credit Amount</p>
                                    <p className='sub-text'>The credit will apply</p>
                                    </div >
                                    <div className="sub-head-right">
                                    <p className="right-content-1"> You have {rewards?.toFixed(2)} reward dollars</p>
                                    <p className="right-content-2">$1.00 = 1.00 Reward Dollar</p>
                                    </div>
                                </div>

                                <div className="input-section-main">
                                  <label className="input-label">Reward Dollars</label>
                                  <div className="input-section">

                                    <input
                                        type="number"

                                        max={rewards}
                                        value={redeemAmount}
                                        onChange={(e) => dispatch(setRedeemAmount(e.target.value))}
                                        className="redeem-input-box"
                                    />


                                    <span className="equal-sign">=</span>
                                    <div className="statement-box">
                                        Receive a ${redeemAmount?.toFixed(2)} statement
                                    </div>
                                  </div>
                                </div>



                            <div className="redeem-column-right">
                                <a href="/terms" className="terms-link">View terms & Conditions</a>
                                <button
                                    className="review-button"
                                    onClick={() => dispatch(toggleReviewMode())}
                                    disabled={redeemAmount <= 0}
                                >
                                    Continue to Review
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                {showRedeemSection && reviewMode && (
                    <div className="redeem-review-box">
                        <h2 className="redeem-title">Redeem Reward Dollars for a Checkout</h2>
                        <hr className="redeem-divider" />

                        <div className="review-content">
                            <div className="review-summary">
                                <div className="review-left">
                                    <h3 className="review-label">Review</h3>
                                    <p className="review-sub-left">Redeem</p>
                                    <p className="review-amount-blue">{redeemAmount} Reward Dollars</p>
                                </div>
                                <div className="review-divider" />
                                <div className="review-right">
                                    <p className="review-sub">Receive</p>
                                    <p className="review-amount-green">${redeemAmount.toFixed(2)} Dollars</p>
                                </div>
                            </div>
                            <hr className="redeem-divider" />
                            <div className="review-balance">
                                <p>Remaining Reward Dollars balance (if you redeem):</p>
                                <p className="review-balance-bold">${(homeData.rewards - redeemAmount).toFixed(2)} Reward Dollar</p>
                            </div>
                            <div className="review-button-section" >
                            <a href="#" className="terms-link">View terms & Conditions</a>

                            <div className="review-buttons">
                                <button onClick={() => dispatch(toggleReviewMode())} className="go-back-btn">Go Back</button>
                                <button className="confirm-button">Redeem Now</button>
                            </div>
                        </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
        <Footer />
        </>
    );
}

export default HomePage;
