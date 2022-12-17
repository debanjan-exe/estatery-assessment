import React from "react";
import "./Container.scss";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const Container = () => {
    return (
        <div className="main_container container">
            <div className="heading">
                <h1>Search Properties to rent</h1>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={["hello", "hello2"]}
                    sx={{ width: 300 }}
                    renderInput={(params) => (
                        <TextField {...params} label="Search with Search Bar" />
                    )}
                />
            </div>
            <div className="filter_container">
                <div className="filter_item">
                    <h5 className="title">Location</h5>
                    <h5 className="text">Location</h5>
                </div>
                <div className="filter_item">
                    <h5 className="title">Location</h5>
                    <h5 className="text">Location</h5>
                </div>
                <div className="filter_item">
                    <h5 className="title">Location</h5>
                    <h5 className="text">Location</h5>
                </div>
                <div className="filter_item">
                    <h5 className="title">Location</h5>
                    <h5 className="text">Location</h5>
                </div>
                <div className="filter_item">
                    <button className="search">Search</button>
                </div>
            </div>
        </div>
    );
};

export default Container;
