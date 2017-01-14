import React from 'react';
import { Component } from 'react';

// components (scenes) that will be displayed by this component
import Splash from './pages/Splash';
import Home from './pages/Home';
import TodosContainer from '../containers/TodosContainer';

// scenes is a silly trick to avoid routes, check the file to see how it works
import {Scene, SceneLink} from './Scenes';

export default class App extends Component {

  render() {
    const { scene } = this.props;

    return (
      <div className="container">

        <ul className="nav nav-tabs">
            {/* should be inside another component because its repeating */}
            <li role="presentation" className={this.props.scene === 'home' ? 'active' : ''}>
                <SceneLink param="home" onClick={this.props.navigate}>Home</SceneLink>
            </li>

            <li role="presentation" className={this.props.scene === 'todos' ? 'active' : ''}>
                <SceneLink param="todos" onClick={this.props.navigate}>Todos</SceneLink>
            </li>

        </ul>

        <Scene scene="splash" current={scene}>
            <Splash />
        </Scene>

        <Scene scene="home" current={scene}>
            <Home />
        </Scene>

        <Scene scene="todos" current={scene}>
            <TodosContainer />
        </Scene>

        <hr />
        <p className="help-block">
            <strong>Use CTRL + H to show/hide the redux dev tool.</strong> <br />
        </p>

      </div>
    );

  }
}
