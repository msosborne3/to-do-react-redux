import React, { Component } from 'react';

class ListPage extends Component {
  render() {
    // for testing  
    let lists = [{id: 1, name: 'school'}, {id: 2, name: 'work'}];

    return (
      <div>
        <h2>To do lists</h2>
        <ul>
          {lists.map((list) => 
            <li key={list.id}>{list.name}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default ListPage;