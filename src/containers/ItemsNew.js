import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import { browserHistory } from 'react-router';
import { addItem } from '../actions';

class ItemsNew extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      done: false
    }
  }

  handleOnTextChange(ev) {
    this.setState({
      text: ev.target.value
    })
  }

  handleOnDoneChange(ev) {
    this.setState({
        done: true
    })
  }

  handleSubmit(ev) {
    ev.preventDefault();
    this.props.addItem(this.state);
    //browserHistory.push('/lists');
    this.setState({
      name: ''
    })
  }

  render() {
    return (
      <div className="new-items">
        <form onSubmit={(event) => this.handleSubmit(event)>
            <label>Text: </label>
            <input type="text" onChange={(event) => this.handleOnTextChange(event)} value={this.state.text} />
            <br />
            <label>Done: </label>
            <input type="checkbox" onChange={(event) => this.handleOnDoneChange(event)} value={this.state.done} />
            <br />
            <input type="submit" value="Add Task" />
          </form>
        </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addList: bindActionCreators(addItem, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(ItemNew);