import {Route, Routes, HashRouter} from 'react-router-dom'
import Login from "../Container/Login/Login"
import RewardsSummary from "../Container/RewardsSummary/RewardsSummary";
import RewardsData from "../Container/RewardsDataPage/RewardsData";
import HomePage from "../Container/HomePage/HomePage";


const Router =() =>{
    return(
        <HashRouter>
            <Routes>
                <Route exact path ="/" element={<Login />}>
                </Route>

                <Route path="/Home" element={<HomePage />}>
                </Route>

                <Route path ="/summary" element ={<RewardsSummary />}>
                </Route>
                <Route path ="/earn" element ={<RewardsData />}>

                </Route>
            </Routes>
        </HashRouter>
    )
}

export default Router;