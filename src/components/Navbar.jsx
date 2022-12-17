import React from "react";
import "./Navbar.scss";
import logo from "../logo.png";

const Navbar = () => {
    return (
        <div className="nav_container">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="center">
                <div className="nav_item active">Rent</div>
                <div className="nav_item">Buy</div>
                <div className="nav_item">Sell</div>
                <div className="nav_item">Manage Property</div>
                <div className="nav_item">Resources</div>
            </div>
            <div className="left">
                <button className="nav_btn login">Login</button>
                <button className="nav_btn signup">Signup</button>
            </div>
        </div>
    );
};

export default Navbar;
