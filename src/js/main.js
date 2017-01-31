import React from 'react';
import ReactDOM from 'react-dom';
import DictatorsList from './DictatorsList.jsx';

class App extends React.Component {
    render() {
        return <DictatorsList/>
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));

