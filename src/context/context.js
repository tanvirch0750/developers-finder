/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import mockFollowers from './mockData.js/mockFollowers';
import mockRepos from './mockData.js/mockRepos';
import mockUser from './mockData.js/mockUser';

const GithubContext = React.createContext();

const rootUrl = 'https://api.github.com';

const GithubProvider = ({ children }) => {
    const [githubUser, setGithubUser] = useState(mockUser);
    const [repos, setRepos] = useState(mockRepos);
    const [followers, setFollowers] = useState(mockFollowers);

    // requests and loading
    const [requests, setRequests] = useState(0);
    const [loading, isSetLoading] = useState(false);

    // check request rate
    const checkRequests = () => {
        axios(`${rootUrl}/rate_limit`)
            .then(({ data }) => {
                const {
                    rate: { remaining },
                } = data;

                setRequests(remaining);

                if (remaining === 0) {
                    // throw an error
                }
            })
            .catch((err) => console.log(err));
    };

    useEffect(checkRequests, []);

    return (
        <GithubContext.Provider value={{ githubUser, repos, followers, requests }}>
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
