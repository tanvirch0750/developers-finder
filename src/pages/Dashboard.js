import React from 'react';
import { Navbar, Repos, Search, User, UserInfo } from '../components';
import { GithubContext } from '../context/context';
import loadingImage from '../images/preloader.gif';

const Dashboard = () => {
    const { isLoading } = React.useContext(GithubContext);

    if (isLoading) {
        return (
            <main>
                <Navbar />
                <Search />
                <img src={loadingImage} alt="loading..." className="loading-img" />
            </main>
        );
    }

    return (
        <main>
            <Navbar />
            <Search />
            <UserInfo />
            <User />
            <Repos />
        </main>
    );
};

export default Dashboard;
