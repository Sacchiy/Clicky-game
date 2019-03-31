import React from "react";

function List(props) {
  const groceries = props.groceries.map(item => 
    <li key={item.id}>
      {item.name}
    </li>
    );

  return (
    <ul className="list-group">
      {groceries}
      Using the map method, render one li element displaying the text property of each grocery
      object.
    </ul>
  );
}

export default List;
