import React from 'react';
import { connect } from 'react-redux';
import { toggleDone } from '../actions/index'
import { bindActionCreators } from 'redux';

const ListShow = (props) => {
  let list = {id: 1, name: 'school'};
  let items = [{id: 1, text: 'hw1', done: false, parentID: 1}, {id: 2, text: 'hw2', done: false, parentID: 1}, {id: 3, text: 'workout', done: false, parentID: 2}, {id: 4, text: 'hw3', done: false, parentID: 1}, {id: 5, text: 'run', done: false, parentID: 5}]
  let listItems = items.filter(item => item.parentID === list.id);

  return (
    <div>
      <h2>List: {list.name}</h2>

      <ul>
        {listItems.map((item) => 
          <li key={item.id} onClick={() => {this.props.toggleDone(item)}}>{item.done ? <strike>{item.text}</strike> : item.text}</li>
        )}
      </ul>
    </div>
  );
};

/*
const mapStateToProps = (state, ownProps) => {
  const list = state.lists.find( (list) => list.id === ownProps.routeParams.id )
  if (list) {
    return {
      list: list,
      items: state.items
    }
  } else {
    return {
      list: {},
      items: []
    };
  }
};*/

const mapDispatchToProps = (dispatch) => {
  return {
    toggleDone: bindActionCreators(toggleDone, dispatch)
  };
}

//export default connect(mapStateToProps, mapDispatchToProps)(ListShow);


export default ListShow;
