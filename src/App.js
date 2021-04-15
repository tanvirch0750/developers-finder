import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Dashboard, Login } from './pages'; // PrivateRoute, AuthWrapper,

function App() {
    return (
        <Router>
            <Route path="/" exact>
                <Dashboard />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
        </Router>
    );
}

export default App;
