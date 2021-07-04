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
    const [isLoading, isSetLoading] = useState(false);

    // error state
    const [error, setError] = useState({ show: false, msg: '' });

    // error function
    const toggleError = (show = false, msg = '') => {
        setError({ show, msg });
    };

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
                    toggleError(true, 'Sorry you completed your hourly rate limit');
                }
            })
            .catch((err) => console.log(err));
    };

    // useEffect for chek requests
    useEffect(checkRequests, []);

    // search github user
    const searchGithubUser = async (user) => {
        toggleError();

        isSetLoading(true);

        const response = await axios(`${rootUrl}/users/${user}`).catch((err) => console.log(err));

        if (response) {
            setGithubUser(response.data);
            const { login, followers_url } = response.data;
            // repos
            // axios(`${rootUrl}/users/${login}/repos?per_page=100`).then((res) => setRepos(res.data));
            // followers
            // axios(`${followers_url}?per_page=100`).then((res) => setFollowers(res.data));

            await Promise.allSettled([
                axios(`${rootUrl}/users/${login}/repos?per_page=100`),
                axios(`${followers_url}?per_page=100`),
            ])
                .then((results) => {
                    const [repo, follower] = results;
                    const status = 'fulfilled';

                    if (repos.status === status) {
                        setRepos(repo.value.data);
                    }
                    if (follower.status === status) {
                        setFollowers(follower.value.data);
                    }
                })
                .catch((err) => console.log(err));
        } else {
            toggleError(true, 'There is no user with that username');
        }

        checkRequests();
        isSetLoading(false);
    };

    return (
        <GithubContext.Provider
            value={{
                githubUser,
                repos,
                followers,
                requests,
                error,
                isLoading,
                searchGithubUser,
            }}
        >
            {children}
        </GithubContext.Provider>
    );
};

export { GithubProvider, GithubContext };


