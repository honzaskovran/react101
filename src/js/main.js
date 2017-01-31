import React from 'react';
import ReactDOM from 'react-dom';
import DictatorsList from './DictatorsList.jsx';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            dictators: [
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
            ]
        };
    }
    render() {
        return <DictatorsList dictators={this.state.dictators}/>
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));

