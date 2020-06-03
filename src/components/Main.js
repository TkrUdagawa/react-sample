import React from "react";
import { Route, Switch, useParams } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import UserList from "./UserList";
import User from "./User";
import Joke from "./Joke";

export default function Main(props) {
    return(
        <div>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route exact path="/users">
                    <UserList />
                </Route>
                <Route path="/users/:id">
                    <User />
                </Route>
                <Route path="/joke">
                    <Joke />
                </Route>

            </Switch>
        </div>
    );
}