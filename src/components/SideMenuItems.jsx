import React, { Component } from "react";
import { Link } from "react-router-dom";



export default class SideMenuItems extends Component {
    render() {
        return (
            <Link to={this.props.name.toLowerCase()}>
                <li className="menu-item">{this.props.name}</li>
            </Link>
        )
    }
}
