import {Link, useLocation} from "react-router-dom";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {homeTodos} from "../../Reducers/reducer";
import'./RewardsTab.css'

function RewardsTabs(){
    const homeData = useSelector(state => state.form.homeData);
    const dispatch = useDispatch();
    const location = useLocation();


    useEffect(() => {
        dispatch(homeTodos());
    }, []);

    return(

        <div className="dashboard-card">
            <div className= "dashboard-card-left">
                <p className="reward-label">Reward Dollars</p>
                <p className="reward-amount">$ {homeData.rewards}</p>
            </div>
            <div className="tabs">
                <Link to="/Home" className={`tab ${ location.pathname === '/Home' ? 'active' : '' } `}>DashBoard</Link>
                <Link to="/summary" className={`tab ${location.pathname === '/summary' ? 'active' : ''}`}>Rewards Summary</Link>
                <Link to="/earn" className={`tab ${location.pathname === '/earn' ? 'active' : ''}`}>Earn and Redeem</Link>
            </div>
        </div>

        );
}
export default RewardsTabs;