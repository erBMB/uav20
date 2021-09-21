import React from "react";
import { sectiuneaTextile } from "../components/listData";

function Lists(props) {
  const list1 = sectiuneaTextile.map((sectiuneaTextile) => {
    return <li>{sectiuneaTextile}</li>;
  });
  //const list2 = props.sectiuneaTextile;
  return (
    
        <ol>{list1}</ol>
  );
}

export default Lists;
