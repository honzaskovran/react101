import React from 'react';
import Dictator from './Dictator.jsx';

export default class DictatorsList extends React.Component {
    render()
    {
        return <div>
            <h1>List of dictators</h1>
            <ul>
                {this.props.dictators.map((value, index) => <Dictator key={index} name={value.name} country={value.country}/>)}
            </ul>
        </div>
    }
}
