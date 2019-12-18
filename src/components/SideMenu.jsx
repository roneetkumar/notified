import React, { Component } from "react";
import SideMenuItems from "./SideMenuItems";



export default class SideMenu extends Component {

    state = {
        menuItems: ["Notes", "Reminders", "Edit-Label", "Archive", "Trash"],
    }

    renderSideMenuItems = () => {
        return this.state.menuItems.map((item, key) => <SideMenuItems name={item} key={key} />);
    }

    render() {
        const navOpen = this.props.navOpen ? "side-menu nav-opened" : "side-menu";

        return (
            <ul className={navOpen} >
                {this.renderSideMenuItems()}
            </ul>
        )
    }
}
