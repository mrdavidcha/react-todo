import React from 'react';
import { Component } from 'react';
import { reduxForm, initialize } from 'redux-form';
import validation from './validation';

// routing
import {SceneLink} from '../Scenes';

class TodoForm extends Component {

  render() {
    const { fields: {title}, item, itemFetching, handleSubmit, submitting, error } = this.props;

    if (itemFetching) {
      return (
        <div className="alert alert-warning" role="alert">
          Loading...
        </div>
      );
    }

    if (!item) {
      return (
        <div className="alert alert-danger" role="alert">
          Failed to load
        </div>
      );
    }

    return (
      <fieldset disabled={this.props.submitting}>
        <form onSubmit={handleSubmit(this.props.save)}>
          <div className="form-group">
            <label>I have to: </label>
            <input className="form-control" type="text" placeholder="example: Buy eggs" {...title}/>
            {title.touched && title.error && <div className="help-block">{title.error}</div>}
          </div>

          {error && <div className="help-block">{error}</div>}

          <button className="btn btn-default btn-success" type="submit">
            Save
          </button>

          <SceneLink className="btn btn-default" param="list" onClick={this.props.navigate}>
            Cancel
          </SceneLink>

        </form>
        </fieldset>

    );
  }

}

TodoForm = reduxForm({
  form: 'newTodoForm',
  fields: ['title', '_id'],
  validate: validation
},
state => ({ // mapStateToProps
  initialValues: state.todos.item // will pull state into form's initialValues
})
)(TodoForm);

export default TodoForm;
