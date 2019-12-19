import React, { Component } from "react";


export default class CreateNotes extends Component {

    state = {
        tempTitle: "",
        tempContent: "",
        notes: [],
        inputState: false
    }

    _onBlur = () => {
        if (this.state.inputState) {
            this.setState({
                notes: [...this.props.notes, {
                    title: this.state.tempTitle,
                    content: this.state.tempContent
                }],
                inputState: false
            })
            this.props.onSubmit(this.state.notes);
        }
    }

    _onFocus = () => {
        if (!this.state.inputState) {
            this.setState({
                inputState: true
            })
        }
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClick, false)
    }

    componentDidUnount() {
        document.removeEventListener('mousedown', this.handleClick, false)
    }

    handleClick = e => {
        if (this.node) {
            if (this.node.contains(e.target)) {
                return
            }
            this._onBlur();
        }
    }

    render() {
        return (
            <form role="grid"
                className="create-notes-input"
                onClick={this._onFocus}
                ref={node => this.node = node}
            >

                {
                    this.state.inputState
                        ? <input
                            type="text"
                            placeholder="Title"
                            onKeyUp={(e) => this.setState({
                                tempTitle: e.target.value
                            })} /> : ""
                }

                <textarea
                    type="text"
                    placeholder="Take a note..."
                    onKeyUp={(e) => this.setState({
                        tempContent: e.target.value
                    })}
                ></textarea>

                {/* <div className='input' contentEditable="true" aria-multiline="true" role="textbox" tabIndex="0" aria-label="Title" spellCheck="true" aria-placeholder="Take a note..."></div> */}
            </form>
        )
    }
}
