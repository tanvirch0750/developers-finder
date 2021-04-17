import React from 'react';
import { Navbar, Repos, Search, User, UserInfo } from '../components';
// import loadingImage from '../images/preloader.gif';
// import { GithubContext } from '../context/context';
const Dashboard = () => (
    <main>
        <Navbar />
        <Search />
        <UserInfo />
        <User />
        <Repos />
    </main>
);

export default Dashboard;
