import React from 'react';
import Dictator from './Dictator.jsx';

export default class DictatorsList extends React.Component {
    render()
    {
        return <div>
            <h1>List of dictators</h1>
            <ul>
                <Dictator name="Adolf Hitler" country="German Reich"/>
                <Dictator name="Joseph Stalin" country="Soviet Union"/>
                <Dictator name="Mao Zedong" country="China"/>
            </ul>
        </div>
    }
}
