import React, { Component } from 'react';

/*export default function ListNew(props) {

  return (
    <div className="new-list">
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <label>List Name: </label>
        <input type="text" />
        <br />
        <input type="submit" value="Create List" />
      </form>
    </div>
  );
}*/

class ListNew extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    }
  }

  handleOnNameChange(ev) {
    this.setState({
      name: ev.target.value
    })
  }

  handleSubmit(ev) {
    ev.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_LIST',
      list: this.state,
    });
    this.setState({
      name: ''
    })
  }

  render() {
    return (
      <div className="new-list">
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>List Name: </label>
          <input type="text" onChange={(event) => this.handleOnNameChange(event)} value={this.state.name} />
          <br />
          <input type="submit" value="Create List" />
        </form>
      </div>
    );
  }
}

export default ListNew;