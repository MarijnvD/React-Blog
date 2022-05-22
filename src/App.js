import React, {useState} from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom";
import BlogPostsById from "./pages/BlogPostsById";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import PrivateRoute from "./Components/PrivateRoute";
import TopMenu from "./Components/TopMenu";
import BlogPosts from "./pages/Blogposts";


function App() {

    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);


    return (
        <>
            <TopMenu auth={isAuthenticated} setter={toggleIsAuthenticated} getter={isAuthenticated}/>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route path="/login">
                    <Login auth={isAuthenticated} getter={isAuthenticated} setter={toggleIsAuthenticated}/>
                </Route>
                <PrivateRoute exact path="/blogposts" auth={isAuthenticated}>
                    <BlogPosts/>
                </PrivateRoute>
                <PrivateRoute path="/blogposts/:id" auth={isAuthenticated}>
                    <BlogPostsById />
                </PrivateRoute>

            </Switch>
        </>
    );
}

export default App;