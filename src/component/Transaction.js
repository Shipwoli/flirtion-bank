import React from "react";

function Transaction({date, description, category, amount}) {
  return (
    <tr>
      <td>{category}</td>
      <td>{description}</td>
      <td>{date}</td>
      <td>{amount}</td>
    </tr>
  );
}

export default Transaction;
