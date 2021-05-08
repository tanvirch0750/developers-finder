/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import mockFollowers from './mockData.js/mockFollowers';
import mockRepos from './mockData.js/mockRepos';
import mockUser from './mockData.js/mockUser';

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
    const [githubUser, setGithubUser] = useState(mockUser);
    const [repos, setRepos] = useState(mockRepos);
    const [followers, setFollowers] = useState(mockFollowers);

    return (
        <GithubContext.Provider value={{ githubUser, repos, followers }}>
            {children}
        </GithubContext.Provider>
    );
};

export { GithubProvider, GithubContext };

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import mockUser from './mockData.js/mockUser';
// import mockRepos from './mockData.js/mockRepos';
// import mockFollowers from './mockData.js/mockFollowers';

// const rootUrl = 'https://api.github.com';
