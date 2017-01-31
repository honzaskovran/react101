import React from 'react';

export default class Dictator extends React.Component {
    render()
    {
        return <li>
            {this.props.name} - {this.props.country}
        </li>
    }
}
