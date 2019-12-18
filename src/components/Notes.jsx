import React, { Component } from "react";


export default class Notes extends Component {
    render() {
        return (
            <div className="note-card">
                <div className="title">{this.props.title}</div>

            </div>
        )
    }
}
