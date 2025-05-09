import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderStyle.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import { homeTodos } from '../../Reducers/reducer';
import {FaSearch, FaShoppingBag} from "react-icons/fa";
import logo from '../../Assets/Images/lifeStyleImage.jpeg'


const Header = () => {
    const homeData = useSelector(state => state.form.homeData);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(homeTodos());
    }, []);

    return (

            <div className="rewards-container">
                <header className="promo-bar">
                    <div className="promo-message">FREE SHIPPING ON $50+ FOR REWARDS MEMBERS</div>
                    <div className="promo-user-info">
                        <div className="user-details">
                            <span className="user-name">Hi, {homeData.name}</span>
                            <span className="reward-status">${homeData.rewards} in rewards</span>

                        </div>
                        <FaShoppingBag className="icon bag" />
                    </div>
                </header>

                <nav className="main-navbar">
                    <div className="navbar-content">
                        <img src={logo} alt="Lifestyle Logo" className="brand-logo" />
                        <nav className ="links">
                        <Link to="/">New</Link>
                        <Link to="/women">Women</Link>
                        <Link to="/men">Men</Link>
                        <Link to="/girls">Girls</Link>
                        <Link to="/boys">Boys</Link>
                        <Link to="/baby">Baby & Toddler</Link>
                        </nav>
                        <div className="search-box">
                            <input type="text" placeholder="Search" />
                            <FaSearch className="icon search-icon" />
                        </div>
                    </div>
                </nav>
            </div>





    );
};

export default Header;
