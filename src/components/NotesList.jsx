import React, { Component } from 'react';
import Notes from "./Notes";

export default class NotesList extends Component {

    render() {
        const notes = () => {
            return this.props.notes.map((n, i) => <Notes title={n.title} key={i} />)
        }

        return (
            <div className="notes-list">
                {notes()}
            </div>
        )
    }
}
