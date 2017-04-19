import React from 'react';

const ListShow = (props) => {
  let list = {id: 1, name: 'school', items: [{id: 1, name: 'hw 1', description: 'Algebra', timeDue: 'Tomorrow', location: 'School', done: false}, {id: 2, name: 'hw 4', description: 'Chemistry', timeDue: 'Thursday', location: 'School', done: true}]};

  return (
    <div>
      <h2>{list.name}</h2>

      {list.items.map((item) => 
        <div>
          <p><strong>{item.name}</strong></p>
          <p>{item.done ? "Done" : "Not Done"}</p>
          <p>Description: {item.description}</p>
          <p>Time Due: {item.timeDue}</p>
          <p>Location: {item.location}</p>
        </div>
      )}
    </div>
  );
};

export default ListShow;