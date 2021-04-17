import React from 'react';

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => (
    <GithubContext.Provider value="hello">{children}</GithubContext.Provider>
);

export { GithubProvider, GithubContext };

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import mockUser from './mockData.js/mockUser';
// import mockRepos from './mockData.js/mockRepos';
// import mockFollowers from './mockData.js/mockFollowers';

// const rootUrl = 'https://api.github.com';
