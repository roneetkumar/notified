import React, { Component } from 'react';
import NavBar from "./NavBar";
import SideMenu from './SideMenu';
import CreateNotes from './CreateNotes';
import NotesList from "./NotesList";

export default class App extends Component {
    state = {
        notes: []
    }

    noteSubmit = (notes) => {
        this.setState({
            notes
        })
        // console.log(this.state.notes);
    }


    render() {
        return (
            <div>
                <NavBar />
                <SideMenu />
                <main>
                    <CreateNotes onSubmit={this.noteSubmit} />
                    <NotesList notes={this.state.notes} />
                </main>
            </div>
        );
    }
}

