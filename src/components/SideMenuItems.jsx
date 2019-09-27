import React, { Component } from "react";


export default class SideMenuItems extends Component {
    render() {
        return (
            <li className="menu-item">{this.props.name}</li>
        )
    }
}
