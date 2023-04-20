import React from "react";

function Delayed({ children, wait = 500 }) {
  const [show, setShow] = React.useState(false);
}

export const Loading = () => {
  return <div className="loading center"></div>;
};
