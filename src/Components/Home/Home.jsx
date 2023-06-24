import React from "react";
import './Home.scss'
const Home = () => {
    return (
        <div className="home">
            WELLCOME TO MY PET SHOP
            <div className="dog-icon">
                <span className="icon-1" >
                    <i className="fa-solid fa-dog"> </i>
                </span>
                <span className="icon-2">
                    <i className="fa-solid fa-bone" ></i>
                </span>
            </div>
        </div>
    )
}
export default Home;