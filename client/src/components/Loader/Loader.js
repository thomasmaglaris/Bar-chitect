import React from "react";

export const Loader = (props) => {
  return (
    <div className="loader-pos">
      <img alt={props.name} src={`./images/35.gif`} />
    </div>
  );
};
