import React, { Component } from "react";
import SideMenuItems from "./SideMenuItems";



export default class SideMenu extends Component {

    state = {
        menuItems: ["Notes", "Remindes", "Edit Label", "Archive", "Trash"],

    }

    renderSideMenuItems = () => {
        return this.state.menuItems.map((item, key) => <SideMenuItems name={item} key={key} />);
    }

    render() {
        return (
            <ul className="side-menu">
                {this.renderSideMenuItems()}
            </ul>
        )
    }
}
