import React, { Component } from 'react';
import NavBar from "./NavBar";
import SideMenu from './SideMenu';
import CreateNotes from './CreateNotes';
import NotesList from "./NotesList";

export default class App extends Component {
    state = {
        notes: [],
        navOpen: true
    }

    noteSubmit = (notes) => {
        this.setState({
            notes
        })
    }

    onMenuClick = () => {
        this.setState({
            navOpen: !this.state.navOpen
        })
    }

    render() {

        const slideMain = this.state.navOpen ? "slideMain" : ''

        return (
            <div>
                <NavBar onClick={this.onMenuClick} />
                <SideMenu navOpen={this.state.navOpen} />
                <main className={slideMain}>
                    <CreateNotes onSubmit={this.noteSubmit} />
                    <NotesList notes={this.state.notes} />
                </main>
            </div>
        );
    }
}

