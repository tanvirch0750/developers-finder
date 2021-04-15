import React from 'react';
import { Dashboard, Error, Login } from './pages'; // PrivateRoute, AuthWrapper,
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <div>
            <Dashboard />
            <Login />
            <Error />
        </div>
    );
}

export default App;
