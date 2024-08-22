import React from "react";

const Log = ({ row, col }) => {
  console.log(row, col);

  return (
    <p>
      {row} , {col}
    </p>
  );
};

export default Log;
