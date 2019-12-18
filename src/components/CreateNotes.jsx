import React, { Component } from "react";


export default class CreateNotes extends Component {

    state = {
        notes: []
    }

    noteInputHandler = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.notes);
    }

    render() {
        return (
            <form className="create-notes-input" onSubmit={e => this.noteInputHandler(e)} >
                <input
                    type="text"
                    placeholder="Take a note..."
                    onKeyPress={
                        e => {
                            if (e.which === 13) {
                                this.setState({
                                    notes: [...this.state.notes, { title: e.target.value }]
                                })
                                e.target.value = ""
                            }
                        }
                    }
                />

                {/* <div className='input' contentEditable="true" aria-multiline="true" role="textbox" tabIndex="0" aria-label="Title" spellCheck="true" aria-placeholder="Take a note..."></div> */}
            </form>
        )
    }
}
