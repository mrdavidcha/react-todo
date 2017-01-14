import React from 'react';
import { Component } from 'react';

// routes, check the file to see it how works
import {SceneLink} from '../Scenes';

export default class List extends Component {
  componentWillMount() {
    this.props.fetch();
  }

  renderList(items) {
    return items.map((item) => {
      return (
        <tr key={item._id}>
          <td>
            <SceneLink param={item._id} onClick={this.props.edit}>Edit</SceneLink>
            &nbsp;
            {item.title}
          </td>
          <td></td>
          <td>
            <SceneLink param={item._id} onClick={this.props.remove}>Remove</SceneLink>
          </td>
          <td>
          </td>
        </tr>
      );
    });
  }

  render() {
    const { items, itemsFetching } = this.props;

    if (itemsFetching) {
      return (
        <div className="alert alert-warning" role="alert">
          Loading...
        </div>
      );
    }

    if (!items || items.length<1) {
      return (
        <div className="alert alert-info" role="alert">
          No todos found, please add one.
        </div>
      );
    }

    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Things I have to do: </th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.renderList(items)}
        </tbody>
      </table>
    );

  }

}
