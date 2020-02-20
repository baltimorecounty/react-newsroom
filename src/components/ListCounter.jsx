import React from "react";

const ListCounter = ({ count, total }) => (
  <p className="font-italic">{`Showing ${count} of ${total} news items`}</p>
);

export default ListCounter;
