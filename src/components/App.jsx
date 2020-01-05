import React, { Component } from 'react';
import NavBar from "./NavBar";
import SideMenu from './SideMenu';
import CreateNotes from './CreateNotes';
import NotesList from "./NotesList";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";


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

    router = () => {
        return (
            <Switch>
                <Route exact path="/" render={() => <Redirect to="/notes" />}>

                </Route>
                <Route exact path="/notes">
                    <h1 className="heading">Notes</h1>
                    <CreateNotes
                        onSubmit={this.noteSubmit} notes={this.state.notes} />
                    <NotesList
                        notes={this.state.notes} />
                </Route>
                <Route exact path="/reminders">
                    <h1 className="heading">Reminders</h1>
                    <Reminders />
                </Route>
                <Route exact path="/edit-label">
                    <h1 className="heading">Edit-Label</h1>
                    <EditLabel />
                </Route>
                <Route exact path="/archive">
                    <h1 className="heading">Archive</h1>
                    <Archive />
                </Route>
                <Route exact path="/trash">
                    <h1 className="heading">Trash</h1>
                    <Trash />
                </Route>
            </Switch >
        )
    }

    render() {
        const slideMain = this.state.navOpen ? "slideMain" : ''

        return (
            <Router basename={process.env.PUBLIC_URL}>
                <NavBar onClick={this.onMenuClick} />
                <SideMenu navOpen={this.state.navOpen} />
                <main className={slideMain}>
                    {
                        this.router()
                    }
                </main>
            </Router>
        );
    }
}

function Reminders() {
    return null
}

function EditLabel() {
    return null;
}

function Archive() {
    return null;
}

function Trash() {
    return null;
}
