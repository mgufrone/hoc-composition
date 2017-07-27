import React from 'react';

export class Parent extends React.Component {
    componentWillMount() {
        console.log('will mount called');
    }
    render() {
      return (<div>
        Render From Parent
      </div>);
    }
}


export default class extends Parent {
    componentWillMount() {
        console.log('override parent');
    }
    render() {
      return (<div>
        Render From Parent
      </div>);
    }
}
