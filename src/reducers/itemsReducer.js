let id = 0;
export default function itemsReducer(state= {
  items: []
}, action) {
  switch(action.type) {
    case 'ADD_ITEM':
      id++;
      // Create a new to do item with an id
      let item = {id: id, text: action.item.text, done: action.item.done};
      // Return this list of items and adds it to the list already created.
      return {items: state.items.concat(item)};
    case 'TOGGLE_DONE':
      return state.items.map(item => {
        if (item.id !== action.id) {
          return item;
        } 
        // When the correct item is found, change it to done
        return {
          ...item, done: !item.done
        };
      });
    default:
      return state;
  }
};