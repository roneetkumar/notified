import React, { Component } from "react";


export default class Notes extends Component {
    render() {
        return (
            <div className="note-card">
                <h1 className="title">{this.props.note.title}</h1>
                <p className="content">{this.props.note.content}</p>
            </div>
        )
    }
}
