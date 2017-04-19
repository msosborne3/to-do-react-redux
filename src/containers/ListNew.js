const React = require('react');

export default function ListNew(props) {
  return (
    <div className="new-list">
      <form>
        <label>List Name:</label>
        <input type="text" />
        <br />
        <input type="submit" value="Create List" />
      </form>
    </div>
  );
}