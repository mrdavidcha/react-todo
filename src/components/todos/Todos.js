import React from 'react';
import { Component } from 'react';

// components (scenes) that will be displayed by this component
import List from './List';
import Form from './Form';

// routes, check the file to see it how works
import {Scene, SceneLink} from '../Scenes';

export default class Todos extends Component {

  render() {
    // extract some fields from the props (to avoid use this.prop.bla after)
    const { scene } = this.props;

    // return the layout for the "todos",
    // check that List and Form are being fed with the current props
    // maybe should be pass in only the functions each one requires
    return (
      <div>
        <h1>
          Todo List
        </h1>
        
        <ul className="nav nav-tabs">
          {/* should be in a component instead of repeating it again here */}
          <li role="presentation" className={this.props.scene === 'list' ? 'active' : ''}>
            <SceneLink param="list" onClick={this.props.navigate}>List</SceneLink>
          </li>
          <li role="presentation" className={this.props.scene === 'form' ? 'active' : ''}>
            <SceneLink param="form" onClick={this.props.add}>Add / Modify</SceneLink>
          </li>
        </ul>

        <br />

        <Scene scene="list" current={scene}>
          <List {...this.props} />
        </Scene>

        <Scene scene="form" current={scene}>
          <Form {...this.props} />
        </Scene>

      </div>

    );
  }
}
