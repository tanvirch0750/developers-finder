/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
import React from 'react';
// import styled from 'styled-components';
import styled from 'styled-components';
import { GithubContext } from '../context/context';
// import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from './Charts';
import { Doughnut2D, Pie3D } from './Charts';

const Repos = () => {
    const { repos } = React.useContext(GithubContext);

    const languages = repos.reduce((total, item) => {
        const { language, stargazers_count } = item;
        if (!language) return total;

        if (!total[language]) {
            total[language] = { label: language, value: 1, stars: stargazers_count };
        } else {
            total[language] = {
                ...total[language],
                value: total[language].value + 1,
                stars: total[language].stars + stargazers_count,
            };
        }

        return total;
    }, {});

    const mostUsedLanguages = Object.values(languages)
        .sort((a, b) => b.value - a.value)
        .slice(0, 5);

    const mostPopularLanguages = Object.values(languages)
        .sort((a, b) => b.stars - a.stars)
        .map((item) => ({ ...item, value: item.stars }))
        .slice(0, 5);

    // const chartData = [
    //     {
    //         label: 'Venezuela',
    //         value: '290',
    //     },
    //     {
    //         label: 'Saudi',
    //         value: '260',
    //     },
    //     {
    //         label: 'Canada',
    //         value: '180',
    //     },
    // ];

    return (
        <section className="section">
            <Wrapper className="section-center">
                <Pie3D data={mostUsedLanguages} />
                <div />
                <Doughnut2D data={mostPopularLanguages} />
            </Wrapper>
        </section>
    );
};

const Wrapper = styled.div`
    display: grid;
    justify-items: center;
    gap: 2rem;
    @media (min-width: 800px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 1200px) {
        grid-template-columns: 2fr 3fr;
    }

    div {
        width: 100% !important;
    }
    .fusioncharts-container {
        width: 100% !important;
    }
    svg {
        width: 100% !important;
        border-radius: var(--radius) !important;
    }
`;

export default Repos;
