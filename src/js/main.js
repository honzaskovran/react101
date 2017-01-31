import React from 'react';
import ReactDOM from 'react-dom';
import DictatorsList from './DictatorsList.jsx';

const dictators = [
    {
        name: 'Adolf Hitler',
        country: 'German Reich'
    },
    {
        name: 'Joseph Stalin',
        country: 'Soviet Union'
    },
    {
        name: 'Mao Zedong',
        country: 'China'
    },
    {
        name: 'Benito Mussolini',
        country: 'Italy'
    },
    {
        name: 'Pol Pot',
        country: 'Cambodia'
    },
    {
        name: 'Kim Jong-il',
        country: 'North Korea'
    },
    {
        name: 'Saddam Hussein',
        country: 'Iraq'
    },
    {
        name: 'Robert Mugab',
        country: 'Zimbabwe'
    },
];

ReactDOM.render(<DictatorsList dictators={dictators}/>, document.getElementById('app'));

