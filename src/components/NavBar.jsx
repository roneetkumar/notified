import React, { Component } from "react";
import SearchBar from './SearchBar';

export default class NavBar extends Component {

    menuClickHandler = () => {
        this.props.onClick()
    }

    render() {
        return (
            <div className="nav-bar">
                <svg onClick={this.menuClickHandler} className="menu-btn" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" /></svg>

                <div className="logo">
                    <span className="img"></span>
                    <span className="heading">Notified</span>
                </div>
                <SearchBar />
                <div className="menu">ITEMS</div>
            </div >
        )
    }
}
