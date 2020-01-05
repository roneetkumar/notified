import React, { Component } from "react";
import SideMenuItems from "./SideMenuItems";
import { ReactComponent as Bell } from "../icons/bell.svg";
import { ReactComponent as Bulb } from "../icons/bulb.svg";
import { ReactComponent as Archive } from "../icons/archive.svg";
// import {ReactComponent as Bulb} from "../icons/bulb.svg";
// import {ReactComponent as Bulb} from "../icons/bulb.svg";



export default class SideMenu extends Component {

    state = {
        menuItems: ["Notes", "Reminders", "Edit-Label", "Archive", "Trash"],
    }

    renderSideMenuItems = () => {
        const icons = [
            <Bulb fill="coral" />,
            <Bell fill="coral" />,
            <Archive fill="coral" />,
            <Archive fill="coral" />,
            <Archive fill="coral" />
        ];
        return this.state.menuItems.map((item, key) => <SideMenuItems name={item} key={key}>
            {
                icons[key]
            }
        </SideMenuItems>);
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
