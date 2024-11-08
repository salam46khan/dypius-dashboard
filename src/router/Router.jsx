import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Root from '../layout/Root';
import Dashboard from '../layout/Dashboard';
import Dypius from '../pages/Dypius/Dypius';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>, 
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'migration',
                element: <p>Migration</p>
            },
            {
                path: 'dypius',
                element: <Dypius />
            },
            {
                path: 'staking',
                element: <p>Staking</p>
            },
            {
                path: 'launchpad',
                element: <p>Launchpad</p>
            },
            {
                path: 'games',
                element: <p>Games</p>
            },
            {
                path: 'loyalty',
                element: <p>Loyalty</p>
            },
            {
                path: 'loyalty',
                element: <p>Loyalty</p>
            },
            {
                path: 'governance',
                element: <p>Governance</p>
            },
            {
                path: 'bridge',
                element: <p>Bridge</p>
            },
            {
                path: 'yields',
                element: <p>Yields</p>
            },
            {
                path: 'locker',
                element: <p>DYP Locker</p>
            },
            {
                path: 'news',
                element: <p>News</p>
            }
        ]
    }
])

export default Router;